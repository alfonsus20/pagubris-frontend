import React, { useEffect } from "react";
import PageWithSidebar from "../components/PageWithSidebar";
import FeedPanel from "../components/timeline/FeedPanel";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listThreads } from "../actions/threadActions";

const Timeline = () => {
  const dispatch = useDispatch();
  const { threads, loading } = useSelector((state) => state.listThreads);

  useEffect(() => {
    dispatch(listThreads());
  }, [dispatch]);
  return (
    <>
      <PageWithSidebar>
        <FeedPanel threads={threads} loading={loading} search={true} />
        <Link
          to="/post-thread"
          className="fixed right-8 bottom-12 p-4 bg-purple text-white rounded-full text-xl w-16 h-16 grid place-items-center cursor-pointer"
        >
          <i className="fas fa-comment-alt "></i>
        </Link>
      </PageWithSidebar>
    </>
  );
};

export default Timeline;
