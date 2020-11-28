// Importamos nuestra instancia de axios configurada a nuestra conveniencia.
import axiosInstance from "Helpers/axios";
// Return current posts.
export const fetchPosts = () => axiosInstance().get("/posts");
