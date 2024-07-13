import { useState } from "react";
import instance from "../libs/axios/customAxios";
import { Board } from "../interfaces/board";

const useGetBoardDetail = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState<boolean>();

  const getBoardDetail = async (id:number): Promise<Board> => {
    try {
      setLoading(true);
      const res = await instance.get(`boards/${id}`);
      return res.data;
    } catch (err: any) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };
  return { getBoardDetail, loading, error };
};

export default useGetBoardDetail;
