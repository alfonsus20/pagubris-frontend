import React, { useEffect, useState } from "react";
import PageWithSidebar from "../components/PageWithSidebar";
import { getUserInfo } from "../actions/userActions";
import fotolisa from "../assets/pictures/marsyalina.svg";
import Button from "../components/Button";
import TextField from "../components/form/TextField";
import TextArea from "../components/form/TextArea";

const EditProfile = () => {
  const [gender, setGender] = useState("MALE");

  return (
    <PageWithSidebar>
      <div className="flex flex-col md:flex-row bg-light-blue px-4 py-8 md:space-x-8">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h3 className = ' text-xl font-bold'>Profile Kamu</h3>
          <img
            src={fotolisa}
            alt="foto-profile"
            className="w-40 h-40 rounded-full my-4"
          />
          <p className="text-center">Lisa Sukmawati</p>
          <div className="flex flex-row text-sm text-center space-x-12 my-4">
            <div className="flex flex-col">
              <strong>20</strong>
              mengikuti
            </div>
            <div className="flex flex-col">
              <strong>20</strong>
              diikuti
            </div>
            <div className="flex flex-col">
              <strong>20</strong>
              total bantu
            </div>
          </div>
          <Button text="Ganti Foto" bgColor="semi-gray" color="white" />
          <Button text="Hapus" bgColor="white" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col mt-8 md:mt-0">
          <h3 className="text-center text-xl font-bold">Edit Profile</h3>
          <label>Nama</label>
          <TextField
            bgColor="white"
            rounded="lg"
            px={2}
            py={2}
            width="full"
            type="text"
          />
          <label>Username</label>
          <TextField
            bgColor="white"
            rounded="lg"
            px={2}
            py={2}
            width="full"
            type="email"
          />
          <label>Email</label>
          <TextField
            bgColor="white"
            rounded="lg"
            px={2}
            py={2}
            width="full"
            type="email"
          />
          <label>Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full outline-none rounded-lg bg-white px-4 py-2 text-sm my-4"
          >
            <option value="MALE" className="bg-white">
              Pria
            </option>
            <option value="FEMALE" className="bg-white">
              Wanita
            </option>
            <option value="OTHERS" className="bg-white">
              Lainnya
            </option>
          </select>
          <label>Bio</label>
          <TextArea rounded = 'lg' height = '28'/>
          <div className="grid place-items-center mt-4">
            <Button
              text="Update Informasi"
              bgColor="semi-gray"
              color="white"
              px={6}
            />
          </div>
        </div>
      </div>
    </PageWithSidebar>
  );
};

export default EditProfile;
