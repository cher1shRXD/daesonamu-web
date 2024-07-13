import { useState } from "react";
import instance from "../libs/axios/customAxios";
import { Board } from "../interfaces/board";

const useGetShortsBoards = () => {
  const [error, setError] = useState();

  const getShortsBoards = async (): Promise<Board[]> => {
    try {
      const res = await instance.get("boards/shorts");
      return res.data;
    } catch (err: any) {
      setError(err);
      throw err;
    } finally {
    }
  };
  return { getShortsBoards, error };
};

export default useGetShortsBoards;
