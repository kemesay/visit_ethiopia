import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { configHeader } from "../../constants";

const putData = async (endpoint, token, data) => {
  try {
    const response = await axios.put(endpoint, data, configHeader);
    console.log("rrrrrr", response);
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw new Error(error);
  }
};

const usePutData = (endpoint, token) => {
  const queryClient = useQueryClient();
  const makeRequest = async (data) => {
    return await putData(endpoint, token, data);
  };

  return useMutation(makeRequest, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([endpoint, token]);
    },
  });
};

export default usePutData;
