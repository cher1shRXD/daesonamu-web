import { useState } from "react";
import instance from "../libs/axios/customAxios";
import { Board } from "../interfaces/board";

const useGetRankBoards = () => {
  const [error, setError] = useState();

  const getRankBoards = async (): Promise<Board[]> => {
    try {
      const res = await instance.get("boards/rank");
      return res.data;
    } catch (err: any) {
      setError(err);
      throw err;
    } finally {
    }
  };
  return { getRankBoards, error };
};

export default useGetRankBoards;
