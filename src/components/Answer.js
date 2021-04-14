import React, { useState } from "react";
import lulus from "../assets/pictures/lulus.png";
import chevron from "../assets/pictures/chevron-down.svg";

const Answer = ({ image, name, content }) => {
  const [detail, setDetail] = useState(false);

  return (
    <div className="my-6 bg-white shadow-xl rounded-md py-6 px-4">
      <div className="flex flex-row ">
        <div className="w-3/12 flex flex-col justify-center items-center text-xl">
          <img src={image} className="w-20 h-20 rounded-full" />
        </div>
        <div className="w-9/12 flex flex-col justify-between">
          <strong className='text-lg'>Marsyalina</strong>
          <div>yuk cek dengan cara ku, gampang</div>
          <div className="flex flex-row justify-between"></div>
        </div>
        <img
          src={chevron}
          className={`cursor-pointer transform ${detail && "rotate-180"}`}
          alt="chevron"
          onClick={() => setDetail(!detail)}
        />
      </div>
      {detail && (
        <div className="mt-8 p-4 md:p-8">
          <div>
            <h3 className="font-bold text-xl">Tutorial Video</h3>
            <div>
              <img src={lulus} className="w-full h-auto my-4" />
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
      )}
    </div>
  );
};

export default Answer;
