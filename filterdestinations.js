import { useQuery } from 'react-query';
import axios from 'axios';
import { configHeader } from './src/constants';

const fetchData = async (endpoint, token) => {

 
  try {
    const response = await axios.get(endpoint, configHeader);

    const tourists = response.data
    var updatedTouristsData = [];
    tourists.forEach(tourist => {
      const updatedTouristData = tourist
      var destTitles = ""
      updatedTouristData.destinations.forEach(destination => {
        destTitles = destTitles + destination.destinationName + " ,"
      })
      tourist.destinations = destTitles
      updatedTouristsData.push(tourist)
    });
    return updatedTouristsData;
  } catch (error) {
    throw new Error(`Failed to fetch data from the ${endpoint}.`);
  }
};

const useGetData = (endpoint, token) => {
  return useQuery([endpoint, token], () => fetchData(endpoint, token));
};

export default useGetData;
