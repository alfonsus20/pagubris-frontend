import React from "react";
import jawabIcon from "../../assets/pictures/jawab.svg";
import lihatIcon from "../../assets/pictures/lihat.svg";
import Button from "../Button";
import nopic from "../../assets/pictures/nopic.jpeg";

const Feed = ({ creator, content, threadId }) => {
  const { first_name, last_name, avatar } = creator;
  return (
    <div className="flex flex-row my-6 bg-white shadow-xl rounded-md py-6 px-4">
      <div className="w-3/12 flex flex-col justify-center items-center">
        <img src={avatar ? avatar : nopic} className="w-12 h-12 sm:w-20 sm:h-20 rounded-full" />
        <strong className='text-sm sm:text-md lg:text-lg text-center'>{first_name} {last_name}</strong>
      </div>
      <div className="w-9/12 flex flex-col justify-between ml-8 lg:ml-0 text-sm sm:text-md lg:text-lg">
        <di>{content}</di>
        <div className="flex flex-row">
          <div className="w-1/2">
            <Button
              text="Jawab"
              leftIcon={jawabIcon}
              link={`/post-answer`}
              px={0}
              py={0}
            />
          </div>
          <div className="w-1/2">
            <Button
              text="Lihat"
              leftIcon={lihatIcon}
              link={`/answer`}
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
