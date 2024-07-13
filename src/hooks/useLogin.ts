import axios from "axios";
import { useState } from "react";

const useLogin = () => {
  const [loading,setLoading] = useState<boolean>();

  const login = async ( studentId:string, password:string ) : Promise<{accessToken:string,refreshToken:string}> => {
    try {
      setLoading(true);
      const res = await axios.post(
        "http://api-daesonamu.kro.kr:8080/auth/login",
        {
          studentId,
          password,
        }
      );
      return res.data;
    } catch (err: any) {
      throw err;
    } finally {
      setLoading(false);
    }
  }
  return { login, loading }
}
export default useLogin;