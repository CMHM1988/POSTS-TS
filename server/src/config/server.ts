import { createConnection } from "typeorm";
// Node Framework.
import express from "express";

import { getConnection } from "../db";
import { Connection } from "typeorm";
// Middlewares
import morgan from "morgan";
import cors from "cors";
// Routers
import { userRouter } from "../routes/user";
//
export class Server {
	// Es una variable de tipo express.application.
	public app: express.Application;
	//
	private userroutes: userRouter;
	//
	public connection: Connection;

	constructor() {
		//
		this.app = express();
		//
		this.configSettings();
		//
		this.middlewares();
		//
		this.routes();
	}

	// Conexion a la base de datos.
	configSettings = () => {
		// Settings.
		this.app.set("port", process.env.PORT || 5000);
		//
		this.userroutes = new userRouter();
	};

	// Configuracion de middlewares
	middlewares = () => {
		//
		this.app.use(morgan("dev"));
		//
		this.app.use(cors());
		//
		this.app.use(
			express.urlencoded({
				extended: false
			})
		);
		//
		this.app.use(express.json());
	};

	// Conexion a la base de datos.
	routes = () => {
		this.app.use(this.userroutes.router);
		/* this.app.use(postsRouter);
		this.app.use(authorRouter); */
	};
}
