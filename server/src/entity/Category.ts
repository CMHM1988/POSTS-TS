import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Post } from "./Post";

@Entity()
export class Category {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	label: string;

	@Column()
	description: string;

	@Column()
	slug: string;

	// Hacemos la conexion o la relacion con la tabla Post.
	@ManyToOne(() => Post, post => post.category)
	post: Post;
}
