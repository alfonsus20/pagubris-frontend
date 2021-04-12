import React from "react";
import {Link} from 'react-router-dom';

const ChatPreview = ({image, name, previewChat, id}) => {
  return (
    <Link to={`/pesan/${id}`} className="flex flex-row my-6 bg-white shadow-md md:shadow-xl rounded-md py-6 px-4">
      <div className="w-3/12">
        <img src={image} className="w-20 h-20 mx-auto" alt="foto-profil" />
      </div>
      <div className="w-16 h-16 w-9/12 flex flex-col rounded-full">
        <h3 className='font-bold'>{name}</h3>
        <p>{previewChat}</p>
      </div>
    </Link>
  );
};

export default ChatPreview;