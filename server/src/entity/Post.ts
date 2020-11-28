import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Category } from "./Category";
import { Author } from "./Author";

@Entity()
export class Post {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	title: string;

	@Column()
	body: string;

	@Column()
	cardImg: string;

	// Hacemos la conexion o la relacion con la tabla author.
	@ManyToOne(() => Author, author => author.post)
	author: Author;
}
