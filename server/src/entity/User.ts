import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		nullable: true
	})
	name: string;

	@Column({
		nullable: true
	})
	lastname: string;

	@Column({
		unique: true
	})
	email: string;

	@Column()
	password: string;

	@Column({
		name: "is_admin", // La base de datos solo lo lee con _
		default: false // Si no proporcionan el dato, siempre se leera con false.
	})
	isAdmin: boolean;
}
