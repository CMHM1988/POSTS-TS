import { createConnection } from "typeorm";

export const getConnection = async () => {
	const connection = await createConnection({
		type: "mongodb",
		url: process.env.URL || "mongodb://localhost:27017/posts-ts",
		synchronize: true,
		logging: true,
		entities: [
			`
         ${__dirname}/../entity/*
      `
		]
   });
   //
	return connection;
};
