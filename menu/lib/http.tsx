import axios from 'axios';

const api = axios.create( {
  baseURL: 'http://localhost:3333',
  //baseURL: process.env.NEXT_PUBLIC_WP_URL + 'wp-json/jwt-auth/v1',
  /*auth: {
      username: 'apiki',
      password: 'apiki2028'
  },*/
  headers: {
      'Access-Control-Allow-Origin': '*',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'X-Auth': 'token',
   },
} );

api.interceptors.request.use( config => {
  //console.log( config );
  return config;
} );

export default api;