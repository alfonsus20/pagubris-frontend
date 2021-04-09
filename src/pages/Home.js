import React from "react";
import handshake from "../assets/pictures/handshake.png";
import fotolisa from "../assets/pictures/foto-lisa.png";
import fitur from "../assets/pictures/fitur.png";
import Button from "../components/Button";
import Container from "../components/Container";
import { TAGS_DUMMY } from "../utils/constants";
import Tag from "../components/Tag";
import Footer from "../components/Footer";
import Overlay from "../components/Overlay";

const Home = () => {
  return (
    <div className="relative">
      <Overlay />
      <div>
        <Container padding="0% 7% 6% 7%" additional="flex-col-reverse">
          <div className="w-full lg:w-1/2 h-auto flex flex-col justify-center mt-0 lg:mt-32">
            <h1 className="text-5xl font-bold">Pagubris Media Berbagi</h1>
            <p className="my-8 text-2xl">
              Ngebantu orang bukan hanya memberikan uang atau barang tapi
              ngebantu orang juga bisa dengan memberikan solusi atas keahlian
              yang kamu miliki, karena semuanya bisa, dan semuanya punya
              solusinya
            </p>
            <div>
              <Button
                text="Daftar"
                color="white"
                id="daftar"
                link="/signup"
                style={{
                  background:
                    "linear-gradient(180deg, #7868E6 -30.77%, #B8B5FF 69.23%)",
                  boxShadow: "0px 40px 40px rgba(109, 193, 215, 0.8)",
                }}
                additional="w-32"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-auto ">
            <img
              src={handshake}
              className="w-10/12 mx-auto lg:mr-0 mt-32"
              alt="handshake"
            />
          </div>
        </Container>
        <Container center direction="col">
          <h2 className="text-4xl text-center font-extrabold mb-4">
            Fitur Andalan
          </h2>
          <img
            src={fitur}
            alt="fitur"
            className="w-full lg:w-8/12 h-auto mx-auto my-8"
          />
          <p className="text-2xl text-justify lg:text-center w-full lg:w-10/12 lg:w-8/12">
            Semakin banyak membantu, orang juga semakin tau kok tentang keahlian
            yang ada pada dirimu, kompleks atau ngga bukan jadi parameternya
            tapi bagaimana kamu bisa berguna untuk orang disekitarmu
          </p>
        </Container>
        <Container center direction="col" additional="overflow-hidden">
          <h2 className="text-4xl text-center mb-4 font-extrabold">Sorotan</h2>
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col md:flex-row w-full lg:w-8/12 shadow-2xl rounded-xl py-6 px-8">
              <div className="w-full lg:w-6/12 flex items-center">
                <img src={fotolisa} alt="Foto Lisa" className="w-full m-auto" />
              </div>
              <div className="w-full lg:w-6/12 text-justify">
                <h4 className="text-2xl font-bold mt-4 lg:mt-0">Lisa Anisah</h4>
                <p className="my-4 lg:my-4 text-xl">
                  Aku adalah seorang ibu rumah tangga yang hobi dalam dunia
                  otomotif, sebenarnya tuntutan kehidupan ku dalam keluarga
                  nomor 1, akan tetapi interest ku dalam dunia otomotif sudah ku
                  geluti selama dibangku perkuliahan, apa yang aku dapatkan
                  tentang otomotif tidak serta merta aku gunakan untuk diriku
                  sendiri.
                </p>
                <div className="flex space-x-4 mt-4">
                  <Button text="Donasi" bgColor="purple" color="white" />
                  <Button
                    text="Penyelesaian"
                    bgColor="semi-gray"
                    color="white"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full lg:w-4/12">
              <div className="text-center text-white rounded-t-full bg-gray py-4 w-44 mt-8 lg:mt-0">
                Tagar
              </div>
              <div className="flex flex-wrap justify-between items-start rounded-xl py-4 px-8 bg-light-gray w-96">
                {TAGS_DUMMY.map((tag, id) => {
                  return <Tag key={id} text={tag} />;
                })}
              </div>
            </div>
          </div>
          <div className="bg-gray w-72 h-72 rounded-full absolute -z-10 -right-12 -bottom-8 hidden md:block"></div>
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
