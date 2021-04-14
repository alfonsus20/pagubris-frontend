import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import TextArea from "../components/form/TextArea";
import PageWithSidebar from "../components/PageWithSidebar";
import { useDispatch, useSelector } from "react-redux";
import { postThread, listCategories } from "../actions/threadActions";
import { useHistory } from "react-router-dom";

const PostThread = () => {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Elektronik");

  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.postThread);
  const { categories,loading } = useSelector((state) => state.categories);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    let { id } = categories.find((x) => x.name === category);
    dispatch(postThread({ content, id }));
  };

  useEffect(() => {
    if (success) {
      history.push("/linimasa");
    }
    if (categories && categories.length === 0) {
      dispatch(listCategories());
    }
  }, [success, dispatch, history, categories]);

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
          required
        />
        <h3 className="text-xl font-bold mt-4">Pilih Kategori : </h3>
        {!loading ? (
          <select
            className="w-full py-4 shadow-xl outline-none px-4"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {categories.map((category) => (
              <option value={category.name} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        ) : (
          "Loading..."
        )}
        <Button
          text="Unggah"
          type="submit"
          bgColor="semi-gray"
          color="white"
          additional="ml-auto mt-6 "
        />
      </form>
    </PageWithSidebar>
  );
};

export default PostThread;