import { useState } from "react";
import { User } from "../interfaces/user";
import instance from "../libs/axios/customAxios";
import { AxiosError } from "axios";

const useGetUser = () => {

  const [error,setError] = useState<AxiosError>();
  const [loading, setLoading] = useState<boolean>();

  const getUser = async (): Promise<User | null> => {
    try {
      setLoading(true);
      const res = await instance.get('/auth/me');
      if(res === undefined) {
        return null;
      }
      return res.data;
    } catch (err: any) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };
  return { getUser, error, loading }
}

export default useGetUser