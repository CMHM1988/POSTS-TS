import { Author } from "../entity/Author";
import { Request, Response } from "express";
import { Connection } from "typeorm";
//
export class authorController {
	//
	private connection: Connection;
	//
	constructor(conn: Connection) {
		//
		this.connection = conn;
	}
	//
	getAllAuthors = async (req: Request, res: Response): Promise<Response> => {
		//
		const results = await this.connection.manager.find(Author);
		//
		return res.json(results);
	};

	//
	getAuthorbyId = async (req: Request, res: Response): Promise<Response> => {
		//
		const results = await this.getAuthor(req.params.id);
		//
		return res.json(results);
	};

	//
	saveAuthor = async (req: Request, res: Response): Promise<Response> => {
		//
		const results = await this.connection.manager.save(Author, req.body);
		//
		return res.json(results);
	};

	//
	updateAuthor = async (req: Request, res: Response): Promise<Response> => {
		//
		let currentAuthor = await this.getAuthor(req.params.id);
		//
		Object.keys(req.body).forEach(key => req.body[key] === undefined && delete req.body[key]);
		//
		currentAuthor = { ...currentAuthor, ...req.body };
		//
		const results = await this.connection.manager.save(Author, currentAuthor);
		//
		return res.json(results);
	};

	//
	deleteAuthor = async (req: Request, res: Response): Promise<Response> => {
		//
		let currentAuthor = await this.getAuthor(req.params.id);
		//
		const results = await this.connection.manager.remove(Author, currentAuthor);
		//
		return res.json(results);
	};

	/* Helpers --------------------------------------------------------------- */
	getAuthor = async (id: String) => {
		//
		return await this.connection.manager.findOne(Author, {
			where: {
				id
			}
		});
	};
}
