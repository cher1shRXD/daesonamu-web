
import { useState } from "react";
import instance from "../libs/axios/customAxios";
import { Board } from "../interfaces/board";

const useGetAllBoards = () => {
  const [error, setError] = useState();

  const getAllBoards = async (): Promise<Board[]> => {
    try {
      const res = await instance.get("boards");
      return res.data;
    } catch (err: any) {
      setError(err);
      throw err;
    } finally {
    }
  };
  return { getAllBoards, error };
};

export default useGetAllBoards;