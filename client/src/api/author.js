// Importamos nuestra instancia de axios configurada a nuestra conveniencia.
import axiosInstance from "Helpers/axios";

// Return current author.
export const feychAuthor = () => axiosInstance().get("/author");
