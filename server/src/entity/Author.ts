import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Post } from "./Post";

@Entity()
export class Author {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	name: string;

	@Column()
	lastname: string;

	@Column()
	email: string;

	// Hacemos la conexion o la relacion con la tabla post.
	@OneToMany(() => Post, post => post.author)
	post: Array<Post>;
}
