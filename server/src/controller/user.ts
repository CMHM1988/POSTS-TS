import { User } from "../entity/User";
import { Request, Response } from "express";
import { Connection, getRepository } from "typeorm";
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
		const results = await getRepository(User).find();
		//
		return res.json(results);
	};

	//
	getUserbyId = async (req: Request, res: Response): Promise<Response> => {
		//
		const results = await getRepository(User).findOne(req.params.id);
		//
		return res.json(results);
	};
}

interface IUser {
	id?: number;
	name?: string;
	lastName?: string;
	email: string;
	password: string;
	isAdmin?: boolean;
}
