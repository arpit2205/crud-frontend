import axiosInstance from ".";

export const getAllEmployees = async () => {
  const response = await axiosInstance.get("/employees");
  return response.data;
};

export const addEmployee = async (data) => {
  const response = await axiosInstance.post("/employees/add", data);
  return response.data;
};
