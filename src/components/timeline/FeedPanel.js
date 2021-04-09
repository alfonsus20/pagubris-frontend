import React from "react";
import TextField from "../form/TextField";
import Feed from "./Feed";

const FeedPanel = ({ search, loading, threads }) => {

  return (
    <>
      {search && (
        <div>
          <TextField
            placeholder="Lihat bagaimana cara ..."
            width="full"
            bgColor="light-gray"
            rounded="md"
          />
        </div>
      )}
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

FeedPanel.defaultProps = {
  search: true,
};

export default FeedPanel;
