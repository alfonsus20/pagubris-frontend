import React, { useEffect, useState } from "react";
import TextField from "../form/TextField";
import Feed from "./Feed";

import { useDispatch, useSelector } from "react-redux";
import { listThreads } from "../../actions/threadActions";

const FeedPanel = () => {
  const dispatch = useDispatch();
  const { threads, loading } = useSelector((state) => state.listThreads);

  useEffect(() => {
    dispatch(listThreads());
  }, [dispatch]);

  return (
    <>
      <div>
        <TextField
          placeholder="Lihat bagaimana cara ..."
          width="full"
          bgColor="light-gray"
          rounded="md"
        />
      </div>
      <div className="blur">
        {loading
          ? "Loading ...."
          : threads.map((thread, id) => {
              return (
                <Feed
                  key={id}
                  creator={thread.creator}
                  content={thread.content}
                  contentId={thread.id}
                />
              );
            })}
      </div>
    </>
  );
};

export default FeedPanel;
