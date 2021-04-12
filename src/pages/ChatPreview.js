import React from "react";
import ChatList from "../components/chat/ChatList";
import PageWithSidebar from "../components/PageWithSidebar";

const ChatPreview = () => {
  return (
    <PageWithSidebar>
      <ChatList />
    </PageWithSidebar>
  );
};

export default ChatPreview;