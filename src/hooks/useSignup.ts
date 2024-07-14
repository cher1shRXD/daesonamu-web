import axios from "axios";
import { useState } from "react";

const useSignup = () => {
  const [loading, setLoading] = useState<boolean>();

  const signup = async (
    studentId: string,
    username: string,
    password: string,
  ): Promise<void> => {
    try {
      setLoading(true);
      const res = await axios.post(
        'https://api-daesonamu.p-e.kr/auth/signup',
        {
          studentId,
          username,
          password,
        }
      );
      return res.data;
    } catch (err: any) {
      throw err;
    } finally {
      setLoading(false);
    }
  };
  return { signup, loading };
};
export default useSignup;
