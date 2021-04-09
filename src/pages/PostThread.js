import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import TextArea from "../components/form/TextArea";
import PageWithSidebar from "../components/PageWithSidebar";
import { useDispatch, useSelector } from "react-redux";
import { postThread } from "../actions/threadActions";
import { useHistory } from "react-router-dom";

const PostThread = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.postThread);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postThread(content));
  };

  useEffect(() => {
    if (success) {
      history.push("/linimasa");
    }
  }, [success, dispatch, history]);

  return (
    <PageWithSidebar>
      <h2 className="text-2xl font-bold">Hal apa yang ingin kamu tanyakan ?</h2>
      <form onSubmit={handleSubmit}>
        <TextArea
          width="full"
          height="56"
          shadow="xl"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          text="Unggah"
          type="submit"
          bgColor="semi-gray"
          color="white"
          additional="ml-auto"
        />
      </form>
    </PageWithSidebar>
  );
};

export default PostThread;
