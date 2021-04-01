import React, { useState } from "react";
import TextField from "../form/TextField";
import { Link } from "react-router-dom";
import Container from "../Container";
import Button from "../Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <Container center additional="bg-auth h-screen">
      <div className="w-128 rounded-2xl blur">
        <div className="flex justify-around px-12 py-4 text-xl border-b-4 border-white">
          <Link to="/signup">
            Buat
          </Link>
          <Link to="/login" className="font-extrabold">Masuk</Link>
        </div>
        <form className="px-12 py-8" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <TextField
            width="full"
            bgColor="gray"
            type="text"
            rounded="full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="username">Password</label>
          <TextField
            width="full"
            bgColor="gray"
            type="password"
            rounded="full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-center mt-8">
            <Button
              text="Masuk"
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

export default Login;