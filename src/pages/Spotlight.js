import React, { useEffect } from "react";
import PageWithSidebar from "../components/PageWithSidebar";
import SpotlightComponent from "../components/SpotlightComponent";
// import fotolisa from "../assets/pictures/foto-lisa.png";
import { useDispatch, useSelector } from "react-redux";
import { listHighlights } from "../actions/userActions";

const Spotlight = () => {
  const dispatch = useDispatch();
  const { highlights, loading } = useSelector((state) => state.listHighlights);

  useEffect(() => {
    dispatch(listHighlights());
  }, []);

  // const data = [
  //   {
  //     nama: "Lisa Blackpink",
  //     image: fotolisa,
  //     content: "Memasak adalah keahlianku",
  //   },
  //   {
  //     nama: "Lisa Jaksel",
  //     image: fotolisa,
  //     content: "Menjahit adalah keahlianku",
  //   },
  //   {
  //     nama: "Lisa Meda",
  //     image: fotolisa,
  //     content: "Servis galon",
  //   },
  // ];

  return (
    <PageWithSidebar>
      {!loading
        ? highlights.map((highlight) => {
            return (
              <SpotlightComponent
                key={highlight.id}
                bio={highlight.bio}
                name={highlight.name}
                image={highlight.avatar}
              />
            );
          })
        : "Loading..."}
    </PageWithSidebar>
  );
};

export default Spotlight;
