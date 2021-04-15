import React, { useState, useEffect } from "react";
import PageWithSidebar from "../components/PageWithSidebar";
import lulus from "../assets/pictures/lulus.png";
import TextArea from "../components/form/TextArea";
import Button from "../components/Button";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { answerThread } from "../actions/threadActions";
import { ANSWER_THREAD_RESET } from "../constants/threadConstants";
import pagubris from "../api/pagubris";
import { getToken } from "../actions/userActions";

const PostAnswer = () => {
  const { threadId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.answerThread);
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState([]);
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(answerThread({ content, id : threadId }));
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
          Authorization : getToken()
        },
      };
      const { data } = await pagubris.post("/api/upload", formData, config);
      setImages([...images, data]);
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  useEffect(() => {
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
          <div>
            <img src={lulus} alt = 'foto-jawaban' className="w-full h-auto my-4" />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row flex-wrap mt-4">
            <div className="w-full md:w-8/12">
              <h3 className="font-bold text-xl mb-2">Deskripsi</h3>
              <TextArea
                width="full"
                bgColor="white"
                height="40"
                placeholder="Tuliskan solusi Anda secara lebih terperinci"
                onChange={(e) => setContent(e.target.value)}
                value={content}
              />
            </div>
            <div className="w-full md:w-4/12">
              <h3 className="font-bold text-xl mb-2">Tools</h3>
              <TextArea
                width="full"
                bgColor="white"
                height="40"
                placeholder="Tuliskan tools yang digunakan. Pisahkan dengan tanda koma"
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
