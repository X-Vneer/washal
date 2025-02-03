import axios from 'axios';

//washalApi
export const washalApi = axios.create({
  // baseURL: 'https://api.example.com/',  // Set base URL for all requests
  timeout: 10000,                         // Set timeout for requests (milliseconds)
  headers: {                              // Set default headers
    'Content-Type': 'application/json'
  }
});

const fourSeasonsHotelApi = axios.create({
  // baseURL: 'https://api.example.com/',  // Set base URL for all requests
  timeout: 10000,                         // Set timeout for requests (milliseconds)
  headers: {                              // Set default headers
    'Content-Type': 'application/json'
  }
});

export default fourSeasonsHotelApi

