import axiosInstance from "@/utils/axios-instance";

export const resetpassword = async ({ email, password }) => {
  return await axiosInstance.post("/resetpassword", {
    email,
    password,
  });
};
