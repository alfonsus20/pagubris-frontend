import React from "react";
import PageWithSidebar from "../components/PageWithSidebar";
import foto from "../assets/pictures/nopic.jpeg";
import ChatContainer from "../components/chat/ChatContainer";
import TextArea from "../components/form/TextArea";

const ChatPanel = () => {
  return (
    <PageWithSidebar>
      <div className='flex flex-row items-center space-x-4 bg-light-gray p-2'>
        <img src={foto} className="w-16 h-16 rounded-full" alt="foto-profil" />
        <h2 className="text-xl font-bold">Marsyalina</h2>
      </div>
      <ChatContainer />
      <div className="bg-light-blue flex flex-row">
        <TextArea
          width="11/12"
          px={4}
          py={4}
          bgColor="white"
          rounded="lg"
          mx={4}
          my={4}
          placeholder="Tulis disini ..."
        />
        <div className="w-1/12 grid place-items-center">
          <div className="text-2xl bg-purple h-12 w-12 rounded-full text-white grid place-items-center">
            <i className="far fa-paper-plane"></i>
          </div>
        </div>
      </div>
    </PageWithSidebar>
  );
};

export default ChatPanel;
