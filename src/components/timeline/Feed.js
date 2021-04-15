import React from "react";
import jawabIcon from "../../assets/pictures/jawab.svg";
import lihatIcon from "../../assets/pictures/lihat.svg";
import Button from "../Button";
import nopic from "../../assets/pictures/nopic.jpeg";
import { Link } from "react-router-dom";

const Feed = ({ creator, content, threadId, visible = true }) => {
  const { name, avatar } = creator;
  return (
    <div className={`${visible ? 'flex': 'hidden'} flex-row my-6 bg-white shadow-md md:shadow-xl rounded-md py-6 px-4 `}>
      <div className="w-3/12 flex flex-col justify-center items-center">
        <img
          src={avatar ? avatar : nopic}
          alt={creator}
          className="w-16 h-auto sm:w-20 rounded-full"
        />
      </div>
      <div className="w-9/12 flex flex-col justify-between ml-8 lg:ml-0 text-lg">
        <strong className="text-lg">
          <Link to={`/lihat-profil/${creator.id}`}>
           {name}
          </Link>
        </strong>
        <div>{content}</div>
        <div className="flex flex-row">
          <div className="w-1/2">
            <Button
              text="Jawab"
              leftIcon={jawabIcon}
              link={`/thread/${threadId}/post-answer`}
              px={0}
              py={0}
            />
          </div>
          <div className="w-1/2">
            <Button
              text="Lihat"
              leftIcon={lihatIcon}
              link={`/thread/${threadId}/answers`}
              px={0}
              py={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
