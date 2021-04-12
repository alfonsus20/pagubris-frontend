import React, { useState } from "react";
import TextField from "../form/TextField";
import { Link } from "react-router-dom";
import Container from "../Container";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions/userActions";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("MALE");
  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.userSignUp);

  const errors = [];

  if (error) {
    for (let i in error) {
      errors.push(error[i][0]);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signup({
        email,
        username,
        name,
        gender,
        password,
        password_confirmation: confirmPassword,
      })
    );
  };

  return (
    <Container center additional="">
      <div className="w-full md:w-128 rounded-2xl blur mt-16 md:mt-0">
        <div className="flex justify-around px-12 py-4 text-xl border-b-4 border-white">
          <Link to="/signup" className="font-extrabold">
            Buat
          </Link>
          <Link to="/login">Masuk</Link>
        </div>
        <form className="px-4 md:px-12 py-8" onSubmit={handleSubmit}>
          <label htmlFor="username">Nama</label>
          <TextField
            width="full"
            bgColor="gray"
            type="text"
            rounded="full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="username">Username</label>
          <TextField
            width="full"
            bgColor="gray"
            type="text"
            rounded="full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="username">Email</label>
          <TextField
            width="full"
            bgColor="gray"
            type="email"
            rounded="full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="username">Gender</label>
          <br />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full outline-none rounded-full bg-gray px-4 py-2 text-sm my-4"
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
          <label htmlFor="username">Password</label>
          <TextField
            width="full"
            bgColor="gray"
            type="password"
            rounded="full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="username">Konfirmasi Password</label>
          <TextField
            width="full"
            bgColor="gray"
            type="password"
            rounded="full"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && errors.map((err) => <p className="text-red">{err}</p>)}
          <div className="flex justify-center mt-8">
            <Button
              text="Buat Akun"
              type="submit"
              bgColor="semi-gray"
              color="white"
            />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
