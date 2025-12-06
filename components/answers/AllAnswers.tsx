import React from "react";

import { AnswerFilters } from "@/constants/filters";
import { EMPTY_ANSWERS } from "@/constants/states";

import AnswerCard from "../cards/AnswerCard";
import DataRenderer from "../DataRenderer";
import CommonFilter from "../filters/CommonFilter";
import Pagination from "../pagination/Pagination";

interface AnswersProps extends ActionResponse<Answer[]> {
  totalAnswers: number;
  page?: number | string | undefined;
  isNext?: boolean;
}

const AllAnswers = ({
  page = 1,
  isNext = false,
  data,
  success,
  error,
  totalAnswers,
}: AnswersProps) => {
  return (
    <div className="mt-11 ">
      <div className="flex items-center justify-between">
        <h3 className="primary-text-gradient">
          {totalAnswers} {totalAnswers === 1 ? "Answer" : "Answers"}
        </h3>
        <CommonFilter
          filters={AnswerFilters}
          otherClasses="sm:min-w-32"
          containerClasses="max-xs:w-full"
        />
      </div>

      <DataRenderer
        data={data}
        empty={EMPTY_ANSWERS}
        success={success}
        error={error}
        render={(answers) =>
          answers.map((answer) => (
            <AnswerCard
              key={answer._id}
              _id={answer._id}
              author={answer.author}
              content={answer.content}
              createdAt={answer.createdAt}
              downvotes={answer.downvotes}
              upvotes={answer.upvotes}
            />
          ))
        }
      />
      <Pagination page={page} isNext={isNext || false} />
    </div>
  );
};

export default AllAnswers;
