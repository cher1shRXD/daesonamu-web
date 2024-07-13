import { useState } from "react";
import instance from "../libs/axios/customAxios";
import { Board } from "../interfaces/board";

const useGetFreeBoards = () => {
  const [error, setError] = useState();

  const getFreeBoards = async (): Promise<Board[]> => {
    try {
      const res = await instance.get("boards/free");
      return res.data;
    } catch (err: any) {
      setError(err);
      throw err;
    } finally {
    }
  };
  return { getFreeBoards, error };
};

export default useGetFreeBoards;
