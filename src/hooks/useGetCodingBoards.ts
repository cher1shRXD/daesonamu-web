import { useState } from "react";
import instance from "../libs/axios/customAxios";
import { Board } from "../interfaces/board";

const useGetCodingBoards = () => {
  const [error, setError] = useState();

  const getCodingBoards = async (): Promise<Board[]> => {
    try {
      const res = await instance.get("boards/coding");
      return res.data;
    } catch (err: any) {
      setError(err);
      throw err;
    } finally {
    }
  };
  return { getCodingBoards, error };
};

export default useGetCodingBoards;
