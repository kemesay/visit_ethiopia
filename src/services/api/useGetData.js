import { useQuery } from "react-query";
import axios from "axios";
import { configHeader } from "../../constants";

const fetchData = async (endpoint, token) => {
  try {
    const response = await axios.get(endpoint, configHeader);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch data from the ${endpoint}.`);
  }
};

const useGetData = (endpoint, token) => {
  return useQuery([endpoint, token], () => fetchData(endpoint, configHeader));
};
export { fetchData };
export default useGetData;
