import React, { useState } from "react";
import TextField from "../form/TextField";
import Feed from "./Feed";

const FeedPanel = ({ search, loading, threads }) => {
  const [keyword, setKeyword] = useState("");
  const foundThreads =
    threads &&
    threads.find((foundThread) =>
      foundThread.content.toLowerCase().includes(keyword.toLowerCase())
    );
  return (
    <>
      {search && (
        <div>
          <TextField
            placeholder="Lihat bagaimana cara ..."
            width="full"
            bgColor="light-gray"
            rounded="md"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
      )}
      <div className="blur">
        {loading
          ? "Loading ...."
          : foundThreads
          ? threads.map((thread) => {
              return (
                <Feed
                  key={thread.id}
                  creator={thread.creator}
                  content={thread.content}
                  threadId={thread.id}
                  visible={
                    thread.content.toLowerCase().includes(keyword.toLowerCase())
                      ? true
                      : false
                  }
                />
              );
            })
          : "Tidak ada data yang ditemukan"}
      </div>
    </>
  );
};

FeedPanel.defaultProps = {
  search: true,
};

export default FeedPanel;