import Image from "next/image";
import Link from "next/link";
import React from "react";

import TagCard from "@/components/cards/TagCard";
import DataRenderer from "@/components/DataRenderer";
import ROUTES from "@/constants/routes";
import { getHotQuestions } from "@/lib/actions/question.action";
import { getTopTags } from "@/lib/actions/tag.action";

const RightSidebar = async () => {
  // const { success, data: hotQuestions, error } = await getHotQuestions();
  // const {
  //   success: tagSuccess,
  //   data: tags,
  //   error: tagError,
  // } = await getTopTags();

  const [
    { success, data: hotQuestions, error },
    { success: tagSuccess, data: tags, error: tagError },
  ] = await Promise.all([getHotQuestions(), getTopTags()]);

  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Hot network</h3>
        <DataRenderer
          data={hotQuestions}
          empty={{
            title: "No questions found",
            message: "No questions has been asked yet",
          }}
          success={success}
          error={error}
          render={(hotQuestions) => (
            <div className="mt-7 flex w-full flex-col gap-[30px]">
              {hotQuestions.map((question, index) => (
                <Link
                  key={question._id}
                  href={ROUTES.QUESTION(question._id)}
                  className="flex cursor-pointer items-center justify-between gap-5"
                >
                  <Image
                    src={
                      index % 2 === 0
                        ? "/icons/question-primary.svg"
                        : "/icons/question-blue.svg"
                    }
                    width={18}
                    height={18}
                    alt={"question"}
                  />

                  <p className="body-medium text-dark500_light700 line-clamp-2">
                    {question.title}
                  </p>

                  <Image
                    src={"/icons/chevron-right.svg"}
                    alt="chevron"
                    width={20}
                    height={20}
                    className="invert-colors"
                  />
                </Link>
              ))}
            </div>
          )}
        />
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <DataRenderer
          data={tags}
          empty={{
            title: "No tags found.",
            message: "It seems like there is no tags.",
          }}
          success={tagSuccess}
          error={tagError}
          render={(tags) => (
            <div className="mt-7 flex flex-col gap-4">
              {tags.map(({ _id, name, questions }) => (
                <TagCard
                  key={_id}
                  _id={_id}
                  name={name}
                  questions={questions}
                  ShowCount
                  compact
                />
              ))}
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default RightSidebar;
