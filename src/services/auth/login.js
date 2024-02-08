import axiosInstance from "@/utils/axios-instance";

export const login = async ({ email, password }) => {
  return await axiosInstance.post("/login", {
    email,
    password,
  });
};