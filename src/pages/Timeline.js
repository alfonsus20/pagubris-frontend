import React from "react";
import Container from "../components/Container";
import PageWithSidebar from "../components/PageWithSidebar";
import Sidebar from "../components/Sidebar";
import FeedPanel from "../components/timeline/FeedPanel";
import { Link } from "react-router-dom";

const Timeline = () => {
  return (
    <>
      <PageWithSidebar>
        <FeedPanel />
        <Link to='/post-thread' className="fixed right-8 bottom-12 p-4 bg-purple text-white rounded-full text-md lg:w-16 lg:h-16 grid place-items-center cursor-pointer lg:text-xl">
          <i class="fas fa-comment-alt "></i>
        </Link>
      </PageWithSidebar>
    </>
  );
};

export default Timeline;
