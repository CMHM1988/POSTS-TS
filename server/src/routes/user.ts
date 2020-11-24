import { getConnection } from "./../db/index";
import { Connection } from "typeorm";
import { userController } from "../controller/user";
// Importando herramientas de express.
import { Router } from "express";
export class userRouter {
	// Inicializando variables de tipo global dentro de la instancia.
	public router: Router;
	public userAPI: userController;
	// Inicializando la instancia.
	constructor() {
		//
		this.router = Router();
		//
		getConnection().then(conn => {
			//
			this.userAPI = new userController(conn);
			//
			this.configureRoutes();
		});
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
	};

	//
	postRoutes = () => {};

	//
	putRoutes = () => {};

	//
	deleteRoutes = () => {};
}