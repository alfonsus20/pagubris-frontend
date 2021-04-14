import React, { useEffect } from "react";
import Answer from "../components/Answer";
import foto from "../assets/pictures/marsyalina.svg";
import PageWithSidebar from "../components/PageWithSidebar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getThreadAnswers } from "../actions/threadActions";

const ViewAnswer = () => {
  const { threadId } = useParams();
  const dispatch = useDispatch();
  const { answers, loading } = useSelector((state) => state.listThreadAnswers);
  const { success } = useSelector((state) => state.answerThread);

  useEffect(() => {
    dispatch(getThreadAnswers(threadId));
  }, [success]);

  return (
    <PageWithSidebar>
      <h2 className="text-2xl font-bold">Lihat tanggapan</h2>
      <div className="blur">
        {!loading
          ? answers.length === 0
            ? "Belum ada tanggapan"
            : answers.map((answer) => (
                <Answer
                  key={answer.id}
                  answers = {answer.answers}
                  image={foto}
                  name={answer.creator.name}
                  content={answer.content}
                  id = {answer.id}
                  mainId = {threadId}
                />
              ))
          : "Loading ..."}
      </div>
    </PageWithSidebar>
  );
};

export default ViewAnswer;
