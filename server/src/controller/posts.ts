import { Post } from "../entity/Post";
import { Request, Response } from "express";
import { Connection } from "typeorm";
//
export class postController {
	//
	private connection: Connection;
	//
	constructor(conn: Connection) {
		//
		this.connection = conn;
	}
	//
	getAllPosts = async (req: Request, res: Response): Promise<Response> => {
		//
		const results = await this.connection.manager.find(Post);
		//
		return res.json(results);
	};

	//
	getPostbyId = async (req: Request, res: Response): Promise<Response> => {
		//
		const results = await this.getPost(req.params.id);
		//
		return res.json(results);
	};

	//
	savePost = async (req: Request, res: Response): Promise<Response> => {
		//
		const results = await this.connection.manager.save(Post, req.body);
		//
		return res.json(results);
	};

	//
	updatePost = async (req: Request, res: Response): Promise<Response> => {
		//
		let currentPost = await this.getPost(req.params.id);
		//
		Object.keys(req.body).forEach(key => req.body[key] === undefined && delete req.body[key]);
		//
		currentPost = { ...currentPost, ...req.body };
		//
		const results = await this.connection.manager.save(Post, currentPost);
		//
		return res.json(results);
	};

	//
	deletePost = async (req: Request, res: Response): Promise<Response> => {
		//
		let currentPost = await this.getPost(req.params.id);
		//
		const results = await this.connection.manager.remove(Post, currentPost);
		//
		return res.json(results);
	};

	/* Helpers --------------------------------------------------------------- */
	getPost = async (id: String) => {
		//
		return await this.connection.manager.findOne(Post, {
			where: {
				id
			}
		});
	};
}
