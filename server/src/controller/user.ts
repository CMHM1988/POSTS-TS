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
	getAllUsers = async (req: Request, res: Response): Promise<Array<IUser>> => {
		//
		return await this.connection.manager.find(User);
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
