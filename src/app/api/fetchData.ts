import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple',
  timeout: 5000, 
  headers: {
    'ContentType': 'program/json',
  },
});

const fetchData = async ( url: string , options = {}) => {
  try {
    const response = await axiosInstance(url, options);
    return response.data;
  } catch (error) {
    console.error('Error retrieving data:', error);
    throw new Error('Could not get data');
  }
};

export default fetchData;