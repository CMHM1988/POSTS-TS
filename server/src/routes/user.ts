import { getAllUsers } from './../controllers/users';
// Importando herramientas de express.
import { Router } from "express";

// Generando router desde la biblioteca de express.
const userRouter = Router();

/* Build Routes */
userRouter.get('/users', getAllUsers);

// Exportando routers.
export default userRouter;