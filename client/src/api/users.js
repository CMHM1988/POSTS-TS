// Importamos nuestra instancia de axios configurada a nuestra conveniencia.
import axiosInstance from "Helpers/axios";

// Return current users.
export const fetchUsers = () => axiosInstance().get("/users");
