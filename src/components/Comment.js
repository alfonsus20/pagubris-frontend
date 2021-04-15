import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import nopic from "../assets/pictures/nopic.jpeg";
import { useSelector } from "react-redux";
import { getToken } from "../actions/userActions";
import pagubris from "../api/pagubris";

const Comment = ({ id }) => {
  const { success } = useSelector((state) => state.answerThread);

  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await pagubris.get(`/feeds/${id}/answers`, {
        headers: {
          Authorization: getToken(),
        },
      });
      setAnswers(data);
      console.log(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [success]);

  return (
    <>
      {!loading
        ? answers.length !== 0
          ? answers.map((answer) => (
              <div
                className="flex flex-row my-4 border-b-2 border-gray pb-3"
                key={answer.id}
              >
                <div className="w-2/12 flex flex-col justify-center items-center">
                  <img
                    src={nopic}
                    alt="foto-profil"
                    className="w-12 h-12 sm:w-20 h-20 rounded-full"
                  />
                </div>
                <div className="w-10/12 flex flex-col justify-around ml-8 lg:ml-0 text-md">
                  <strong className="text-md">
                    <Link to={`/lihat-profil`}>{answer.creator.name}</Link>
                  </strong>
                  <div>{answer.content}</div>
                </div>
              </div>
            ))
          : "Belum ada komentar"
        : "Loading ...."}
    </>
  );
};

export default Comment;
