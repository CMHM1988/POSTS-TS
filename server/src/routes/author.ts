import { authorController } from "../controller/author";
import { Connection } from "typeorm";
// Importando herramientas de express.
import { Router } from "express";
export class authorRouter {
	// Inicializando variables de tipo global dentro de la instancia.
	public router: Router;
	public authorAPI: authorController;
	// Inicializando la instancia.
	constructor(conn: Connection) {
		//
		this.router = Router();
		//
		this.authorAPI = new authorController(conn);
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
		this.router.get("/author", this.authorAPI.getAllAuthors);
		//
		this.router.get("/author/:id", this.authorAPI.getAuthorbyId);
	};

	//
	postRoutes = () => {
		//
		this.router.post("/author", this.authorAPI.saveAuthor);
	};

	//
	putRoutes = () => {
		//
		this.router.put("/author/:id", this.authorAPI.updateAuthor);
	};

	//
	deleteRoutes = () => {
		//
		this.router.delete("/author/:id", this.authorAPI.deleteAuthor);
	};
}
