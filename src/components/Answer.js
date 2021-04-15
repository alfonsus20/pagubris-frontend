import React, { useState } from "react";
import TextArea from "./form/TextArea";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { answerThread } from "../actions/threadActions";
import Comment from "./Comment";
import nopic from "../assets/pictures/nopic.jpeg";
import {Link} from 'react-router-dom'

const Answer = ({ avatar, name, content, id, images, userId }) => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.userInfo);
  const [detail, setDetail] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(answerThread({ content: answer, id }));
  };

  return (
    <div className="my-6 bg-white shadow-xl rounded-md py-6 px-4">
      <div className="flex flex-row ">
        <div className="w-3/12 flex flex-col justify-center items-center text-xl">
          <img
            src={avatar ? avatar : nopic}
            className="w-20 h-20 rounded-full"
            alt="foto-profile"
          />
        </div>
        <div className="w-9/12 flex flex-col justify-between">
          <Link
          className = 'text-lg font-bold'
            to={
              userData.id !== userId
                ? `/lihat-profil/${userId}`
                : "/edit-profil"
            }
          >
            {name}
          </Link>
          <div>{content}</div>
          <div className="flex flex-row justify-between"></div>
        </div>
        <img
          src="/assets/chevron-down.svg"
          className={`cursor-pointer transform ${detail && "rotate-180"}`}
          alt="chevron"
          onClick={() => setDetail(!detail)}
        />
      </div>
      {detail && (
        <>
          <div className="mt-8 p-4 md:p-8">
            <div>
              <h3 className="font-bold text-xl">Solusi yang diberikan</h3>
              <div className="my-4">
                {images.length !== 0
                  ? images.map((image) => (
                      <img
                        src={image.url}
                        key={image.id}
                        className="my-4"
                        alt="solusi"
                      />
                    ))
                  : "Tidak ada gambar"}
              </div>
            </div>
            <div className="flex flex-row space-x-12 mt-4">
              <div className="w-full">
                <h3 className="font-bold text-xl mb-2">Deskripsi</h3>
                <p className="text-justify">{content}</p>
              </div>
            </div>
          </div>
          <div className="px-4 md:px-8">
            <h3 className="font-bold text-xl">Komentar</h3>
            <Comment id={id} />
          </div>
          <div className="px-4 md:px-8 mt-8">
            <h3 className="font-bold text-xl">Berikan komentar</h3>
            <form onSubmit={handleSubmit}>
              <TextArea
                px={1}
                placeholder="Tuliskan komentar Anda ...."
                width="full"
                shadow="xl"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
              <Button
                type="submit"
                bgColor="semi-purple"
                text="Kirim"
                color="white"
                px={6}
                additional="mt-8 ml-auto hover:bg-purple"
              />
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Answer;
