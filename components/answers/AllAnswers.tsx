import React from "react";
import DataRenderer from "../DataRenderer";
import { EMPTY_ANSWERS } from "@/constants/states";
import AnswerCard from "../cards/AnswerCard";

interface AnswersProps extends ActionResponse<Answer[]> {
  totalAnswers: number;
}

const AllAnswers = ({ data, success, error, totalAnswers }: AnswersProps) => {
  return (
    <div className="mt-11 ">
      <div className="flex items-center justify-between">
        <h3 className="primary-text-gradient">
          {totalAnswers} {totalAnswers === 1 ? "Answer" : "Answers"}
        </h3>
        <p>Filters</p>
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
            />
          ))
        }
      />
    </div>
  );
};

export default AllAnswers;
