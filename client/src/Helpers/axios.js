import axios from "axios";


export default (history = null) => {
   // Header del llamado.
   let headers = {};

   if (localStorage.token) {
      // Almacenamos el token.
      headers.Authorization = `${localStorage.token}`;
   }

   // Creamos una nueva instancia de axios con los datos principales para las llamadas ala api.
   const axiosInstance = axios.create({
      // eslint-disable-next-line no-undef
      baseURL: process.env.REACT_APP_API_URL,
      headers
   });

   axiosInstance.interceptors.response.use(
      // Determinamos el error
      (response) =>
         new Promise((resolve) => {
            resolve(response);
         }),
      (error) => {
         //
         if (!error.response) {
            return new Promise((resolve, reject) => {
               reject(error);
            });
         }
         //
         if (error.response.status === 403) {
            //
            localStorage.removeItem("token");
            //
            if (history) {
               //
               history.push("/auth/login");
            } else {
               //
               window.location = "/auth/login";
            }
         } else {
            //
            return new Promise((resolve, reject) => {
               reject(error);
            });
         }
      }
   );
   // Retornamos la instancia.
   return axiosInstance;
};
