import { hash } from "bcrypt";
import { User } from "../entity/User";
import { Request, Response } from "express";
import { Connection } from "typeorm";
//
export class userController {
	//
	private readonly SALT_ROUNDS = 10;
	//
	private connection: Connection;
	//
	constructor(conn: Connection) {
		//
		this.connection = conn;
	}
	//
	getAllUsers = async (req: Request, res: Response): Promise<Response> => {
		//
		const results = await this.connection.manager.find(User);
		//
		return res.json(results);
	};

	//
	getUserbyId = async (req: Request, res: Response): Promise<Response> => {
		//
		const results = await this.getUser(req.params.id);
		//
		return res.json(results);
	};

	//
	saveUser = async (req: Request, res: Response): Promise<Response> => {
		//
		const password = await hash(req.body.password, this.SALT_ROUNDS);
		// Asignamos la nueva contraseña cifrada.
		req.body.password = password;
		//
      const results = await this.connection.manager.save(User, req.body);
      //
      return res.json(results);
	};

	//
	updateUser = async (req: Request, res: Response): Promise<Response> => {
		//
		let currentUser = await this.getUser(req.params.id);
		//
		Object.keys(req.body).forEach(key => req.body[key] === undefined && delete req.body[key]);
		// si se ha enviado nuevo password, debe cifrarse
		if (req.body.hasOwnProperty("password")) {
         // Cifrando password.
			req.body.password = await hash(req.body.password, this.SALT_ROUNDS);
		}
      currentUser = { ...currentUser, ...req.body };
      //
      const results = await this.connection.manager.save(User, currentUser);
      //
      return res.json(results);
	};

	//
	deleteUser = async (req: Request, res: Response): Promise<Response> => {
		//
		let currentUser = await this.getUser(req.params.id);
		//
      const results = await this.connection.manager.remove(User, currentUser);
      //
      return res.json(results);
   };

   /* Helpers --------------------------------------------------------------- */
   getUser = async (id: String) => {
      //
      return await this.connection.manager.findOne(User, {
			where: {
				id
			}
		});
   }
}
