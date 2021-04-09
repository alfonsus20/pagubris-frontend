import React, { useState } from "react";
import TextField from "../form/TextField";
import { Link } from "react-router-dom";
import Container from "../Container";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
import Overlay from "../Overlay";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.userLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className = 'relative'>
      <Overlay/>
      <Container center additional="h-screen">
        <div className="w-full md:w-128 rounded-2xl blur">
          <div className="flex justify-around px-12 py-4 text-xl border-b-4 border-white">
            <Link to="/signup">Buat</Link>
            <Link to="/login" className="font-extrabold">
              Masuk
            </Link>
          </div>
          <form className="px-4 md:px-12 py-8" onSubmit={handleSubmit}>
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
            <p className="text-red">
              {error && "Incorrect username or password"}
            </p>
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
    </div>
  );
};

export default Login;
