import React from "react";
import Answer from "../components/Answer";
import foto from "../assets/pictures/marsyalina.svg";
import PageWithSidebar from "../components/PageWithSidebar";

const ViewAnswer = () => {
  return (
    <PageWithSidebar>
      <h2 className="text-2xl font-bold">Lihat tanggapan</h2>
      <div className="blur">
        <Answer image={foto} />
        <Answer image={foto} />
        <Answer image={foto} />
        <Answer image={foto} />
        <Answer image={foto} />
      </div>
    </PageWithSidebar>
  );
};

export default ViewAnswer;
