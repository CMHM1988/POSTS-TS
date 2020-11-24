//
import { Request, Response } from "express";
// Conexion a la base de datos.
import { Connection } from "typeorm";

export const getAllAuthors = (req: Request, res: Response) => {
	return res.json({
		msg: `All Authors!`
	});
};
