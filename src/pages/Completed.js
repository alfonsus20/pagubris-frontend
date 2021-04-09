import React, { useEffect} from "react";
import PageWithSidebar from "../components/PageWithSidebar";
import FeedPanel from "../components/timeline/FeedPanel";
import { useDispatch, useSelector } from "react-redux";
import { listThreads } from "../actions/threadActions";

const Completed = () => {
  const dispatch = useDispatch();
  const { threads, loading } = useSelector((state) => state.listThreads);

  useEffect(() => {
    dispatch(listThreads());
  }, [dispatch]);

  return (
    <PageWithSidebar>
      <div className="flex flex-row text-center bg-purple text-white py-4 rounded-xl">
        <div className="w-1/2">
          <p>Kamu telah membantu sebanyak</p>
          <p>78 orang</p>
        </div>
        <div className="w-1/2">
          <p>Rata-rata rating atas solusimu</p>
          <p><i className='fas fa-star'></i> 3,5</p>
        </div>
      </div>
      <FeedPanel search={false} loading={loading} threads={threads} />
    </PageWithSidebar>
  );
};

export default Completed;
