import React from "react";
import foto from "../../assets/pictures/marsyalina.svg";
import ChatBox from "./ChatBox";

const ChatContainer = () => {
  return (
    <div className="bg-light-blue p-4 overflow-auto h-full">
      <ChatBox
        name="Femi"
        image={foto}
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
        assumenda voluptatum deserunt a quia, ipsum unde esse provident beatae
        enim sequi, doloribus repudiandae maxime.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
        assumenda voluptatum deserunt a quia, ipsum unde esse provident beatae
        enim sequi, doloribus repudiandae maxime."
        receiver={true}
      />{" "}
      <ChatBox
        name="Femi"
        image={foto}
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
      assumenda voluptatum dpsum unde esse provident beatae
      enim sequi, doloribus repudiandae maxime."
        receiver={false}
      />
      <ChatBox
        name="Femi"
        image={foto}
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
        assumenda voluptatum deserunt a quia, ipsum unde esse provident beatae
        enim sequi, doloribus repudiandae maxime.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
        assumenda voluptatum deserunt a quia, ipsum unde esse provident beatae
        enim sequi, doloribus repudiandae maxime."
        receiver={true}
      />{" "}
      <ChatBox
        name="Femi"
        image={foto}
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
      assumenda voluptatum dpsum unde esse provident beatae
      enim sequi, doloribus repudiandae maxime."
        receiver={false}
      />
    </div>
  );
};

export default ChatContainer;
