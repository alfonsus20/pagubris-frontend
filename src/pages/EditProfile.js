import React, { useEffect, useState } from "react";
import PageWithSidebar from "../components/PageWithSidebar";
import { getUserInfo, editProfile, getUserProfile } from "../actions/userActions";
import nopic from "../assets/pictures/nopic.jpeg";
import Button from "../components/Button";
import TextField from "../components/form/TextField";
import TextArea from "../components/form/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { EDIT_PROFILE_RESET } from "../constants/userConstants";

const EditProfile = () => {
  const dispatch = useDispatch();
  const { userData, loading } = useSelector((state) => state.userInfo);
  const { error, success } = useSelector((state) => state.userEditProfile);
  const { userProfile, loading: loadingUserProfile } = useSelector((state) => state.getUserProfile);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const notyf = new Notyf({
    position: { x: "right", y: "bottom" },
    duration: 3000,
  });

  useEffect(() => {
    if (error) {
      for (let e in error) {
        notyf.error(error[e][0]);
      }
    } else if (success) {
      notyf.success("Profile updated");
    } else {
      if (!userData || Object.keys(userData).length < 5) {
        dispatch(getUserInfo());
      } else {
        setName(userData.name);
        setGender(userData.gender);
        setUsername(userData.username);
        setEmail(userData.email);
        setBio(userData.bio);
        dispatch(getUserProfile(userData.id));
      }
    }
  }, [userData, dispatch, error, success]);

  useEffect(() => {
    return () => dispatch({ type: EDIT_PROFILE_RESET });
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProfile({ email, name, username, gender, bio }));
  };

  return (
    <PageWithSidebar>
      <div className="flex flex-col md:flex-row bg-light-blue px-4 py-8 md:space-x-8">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h3 className=" text-xl font-bold">Profile Kamu</h3>
          <img
            src={nopic}
            alt="foto-profile"
            className="w-40 h-40 rounded-full my-4"
          />
          <p className="text-center font-bold">{!loading ? userData.name : 'Loading...'}</p>
          <div className="flex flex-row text-sm text-center space-x-12 my-4">
            <div className="flex flex-col">
              <strong>{!loadingUserProfile && userProfile ? userProfile.following_count : "Loading..."}</strong>
              mengikuti
            </div>
            <div className="flex flex-col">
              <strong>{!loadingUserProfile && userProfile ? userProfile.followers_count : "Loading..."}</strong>
              diikuti
            </div>
            <div className="flex flex-col">
              <strong>15</strong>
              total bantu
            </div>
          </div>
          <Button text="Ganti Foto" bgColor="semi-gray" color="white" />
          <Button text="Hapus" bgColor="white" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 flex flex-col mt-8 md:mt-0"
        >
          <h3 className="text-center text-xl font-bold">Edit Profile</h3>
          <label>Nama</label>
          <TextField
            bgColor="white"
            rounded="lg"
            px={2}
            py={2}
            width="full"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Username</label>
          <TextField
            bgColor="white"
            rounded="lg"
            px={2}
            py={2}
            width="full"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <TextField
            bgColor="white"
            rounded="lg"
            px={2}
            py={2}
            width="full"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <TextArea
            rounded="lg"
            height="28"
            value={bio}
            px={4}
            onChange={(e) => setBio(e.target.value)}
          />
          <div className="grid place-items-center mt-4">
            <Button
              text="Update Informasi"
              bgColor="semi-gray"
              color="white"
              type="submit"
              px={6}
            />
          </div>
        </form>
      </div>
    </PageWithSidebar>
  );
};

export default EditProfile;
