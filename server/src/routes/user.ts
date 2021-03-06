import { Connection } from "typeorm";
import { userController } from "../controller/user";
// Importando herramientas de express.
import { Router } from "express";
export class userRouter {
	// Inicializando variables de tipo global dentro de la instancia.
	public router: Router;
	public userAPI: userController;
	// Inicializando la instancia.
	constructor(conn: Connection) {
		//
		this.router = Router();
		//
		this.userAPI = new userController(conn);
		//
		this.configureRoutes();
	}
	//
	configureRoutes = () => {
		//
		this.getRoutes();
		//
		this.postRoutes();
		//
		this.putRoutes();
		//
		this.deleteRoutes();
	};
	//
	getRoutes = () => {
		//
		this.router.get("/users", this.userAPI.getAllUsers);
		//
		this.router.get("/users/:id", this.userAPI.getUserbyId);
	};

	//
	postRoutes = () => {
		//
		this.router.post("/users", this.userAPI.saveUser);
	};

	//
	putRoutes = () => {
		//
		this.router.put("/users/:id", this.userAPI.updateUser);
	};

	//
	deleteRoutes = () => {
		//
		this.router.delete("/users/:id", this.userAPI.deleteUser);
	};
}