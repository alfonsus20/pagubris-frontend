import React, { useState } from "react";
import lulus from "../assets/pictures/lulus.png";
import TextArea from "./form/TextArea";
import Button from "./Button";
import { useDispatch } from "react-redux";
import {
  answerThread,
} from "../actions/threadActions";
import Comment from "./Comment";
import nopic from "../assets/pictures/nopic.jpeg";

const Answer = ({ image, name, content, id }) => {
  const dispatch = useDispatch();

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
          <img src={image ? image : nopic} className="w-20 h-20 rounded-full" alt='foto-profile' />
        </div>
        <div className="w-9/12 flex flex-col justify-between">
          <strong className="text-lg">{name}</strong>
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
              <h3 className="font-bold text-xl">Tutorial Video</h3>
              <div>
                <img src={lulus} className="w-full h-auto my-4" alt='solusi'/>
              </div>
            </div>
            <div className="flex flex-row space-x-12 mt-4">
              <div className="w-8/12">
                <h3 className="font-bold text-xl mb-2">Deskripsi</h3>
                <p className="text-justify">
                  jadi langkah pertama dalam pembuatan sebuah mockup adalah
                  penentuan ide pokok dari recurement dan setelah itu pencarian
                  referensi.....
                </p>
              </div>
              <div className="w-4/12">
                <h3 className="font-bold text-xl mb-2">Tools</h3>
                <ul class="list-disc list-inside">
                  <li>Komputer</li>
                  <li>Internet</li>
                </ul>
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
                placeholder="Tuliskan pesan Anda ...."
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
