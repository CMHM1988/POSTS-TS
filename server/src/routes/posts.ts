import { Connection } from "typeorm";
import { postController } from "../controller/posts";
// Importando herramientas de express.
import { Router } from "express";
export class postRouter {
	// Inicializando variables de tipo global dentro de la instancia.
	public router: Router;
	public postAPI: postController;
	// Inicializando la instancia.
	constructor(conn: Connection) {
		//
		this.router = Router();
		//
		this.postAPI = new postController(conn);
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
		this.router.get("/posts", this.postAPI.getAllPosts);
		//
		this.router.get("/posts/:id", this.postAPI.getPostbyId);
	};

	//
	postRoutes = () => {
		//
		this.router.post("/posts", this.postAPI.savePost);
	};

	//
	putRoutes = () => {
		//
		this.router.put("/posts/:id", this.postAPI.updatePost);
	};

	//
	deleteRoutes = () => {
		//
		this.router.delete("/posts/:id", this.postAPI.deletePost);
	};
}
