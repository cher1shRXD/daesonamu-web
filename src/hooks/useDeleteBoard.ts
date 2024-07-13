import instance from "../libs/axios/customAxios";
import { Board } from "../interfaces/board";

const useDeleteBoard = () => {

  const deleteBoard = async (id: number): Promise<Board> => {
    try {
      const res = await instance.delete(`boards/${id}`);
      return res.data;
    } catch (err: any) {
      throw err;
    }
  };
  return { deleteBoard };
};

export default useDeleteBoard;
