import { authorRouter } from './../routes/author';
import { Connection } from 'typeorm';
import { getConnection } from './../db/index';
// Node Framework.
import express from "express";
// Middlewares
import morgan from "morgan";
import cors from "cors";
// Routers
import { userRouter } from "../routes/user";
import { postRouter } from "../routes/posts";
//
export class Server {
	// Es una variable de tipo express.application.
	public app: express.Application;
	//
	private userroutes: userRouter;
	//
   private postsroutes: postRouter;
   //
   private authorroutes: authorRouter;
   //
   private connection: Connection;

	constructor() {
		//
		getConnection().then(conn => {
			//
			this.connection = conn;
			//
			this.app = express();
			//
			this.configSettings();
			//
			this.middlewares();
			//
         this.routes();
         //
         this.start();
		});
	}

	// Conexion a la base de datos.
	configSettings = () => {
		// Settings.
		this.app.set("port", process.env.PORT || 5000);
		//
		this.userroutes = new userRouter(this.connection);
		//
      this.postsroutes = new postRouter(this.connection);
      //
      this.authorroutes = new authorRouter(this.connection);
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
      //
      this.app.use(this.userroutes.router);
      //
      this.app.use(this.postsroutes.router);
      //
      this.app.use(this.authorroutes.router);
   };

   start = () => {
		// Inicializando el servidor.
		this.app.listen(this.app.get("port"), () => {
			// Success Server Message.
			console.log(`Server on port ${this.app.get("port")}`);
		});
	}
}
