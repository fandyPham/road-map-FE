import { instance } from "./axios";

const loginWithGoogle = async (data: any) => {
  const response = await instance.post(`/auth/google-login`, data);
  return response;
};

export default { loginWithGoogle };
