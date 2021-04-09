import React from "react";
import PageWithSidebar from "../components/PageWithSidebar";
import SpotlightComponent from "../components/SpotlightComponent";
import fotolisa from "../assets/pictures/foto-lisa.png";

const Spotlight = () => {
  const data = [
    {
      nama: "Lisa Blackpink",
      image: fotolisa,
      content: "Memasak adalah keahlianku",
    },
    {
      nama: "Lisa Jaksel",
      image: fotolisa,
      content: "Menjahit adalah keahlianku",
    },
    {
      nama: "Lisa Meda",
      image: fotolisa,
      content: "Servis galon",
    },
  ];

  return (
    <PageWithSidebar>
      {data.map((x, idx) => {
        return (
          <SpotlightComponent
            key={idx}
            content={x.content}
            name={x.nama}
            image={x.image}
          />
        );
      })}
    </PageWithSidebar>
  );
};

export default Spotlight;
