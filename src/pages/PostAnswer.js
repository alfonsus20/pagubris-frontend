import React, { useState, useEffect } from "react";
import PageWithSidebar from "../components/PageWithSidebar";
import TextArea from "../components/form/TextArea";
import TextField from "../components/form/TextField";
import Button from "../components/Button";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { answerThread, getThreadDetail } from "../actions/threadActions";
import { ANSWER_THREAD_RESET } from "../constants/threadConstants";
import pagubris from "../api/pagubris";
import { getToken } from "../actions/userActions";

const PostAnswer = () => {
  const { threadId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.answerThread);
  const { threadData } = useSelector((state) => state.getThreadDetail);
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState([]);
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      answerThread({
        content,
        id: threadId,
        images,
        category_id: threadData.category_id,
      })
    );
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: getToken(),
        },
      };
      const { data } = await pagubris.post("/feeds/image", formData, config);
      setImages([...images, data.id]);
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  useEffect(() => {
    dispatch(getThreadDetail(threadId));
    if (success) {
      history.push(`/thread/${threadId}/answers`);
    }
    dispatch({ type: ANSWER_THREAD_RESET });
  }, [success, dispatch, history, threadId]);

  return (
    <PageWithSidebar>
      <div className="p-8 bg-white rounded-xl">
        <div>
          <h3 className="font-bold text-xl">Upload Solusi</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <TextField type="file" onChange={uploadFileHandler} required />
          {uploading && <p className="text-md">"Uploading ..."</p>}
          <ul className="list-disc w-full ml-4">
            {images.map((image) => (
              <li key={image}>{image}</li>
            ))}
          </ul>
          <div className="flex flex-row flex-wrap mt-4">
            <div className="w-full">
              <h3 className="font-bold text-xl mb-2">Deskripsi</h3>
              <TextArea
                width="full"
                bgColor="white"
                height="40"
                placeholder="Tuliskan solusi Anda secara lebih terperinci"
                onChange={(e) => setContent(e.target.value)}
                value={content}
                required
              />
            </div>
          </div>
          <Button
            text="Unggah"
            type="submit"
            bgColor="semi-purple hover:bg-purple"
            color="white"
            additional="ml-auto"
          />
        </form>
      </div>
    </PageWithSidebar>
  );
};

export default PostAnswer;
