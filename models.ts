import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
}
//
//@Entity()
//export class Email {
//  @PrimaryGeneratedColumn()
//  id!: number;
//
//  @Column()
//  email!: string;
//}
//
//@Entity()
//export class Food {
//  @PrimaryGeneratedColumn()
//  id!: number;
//
//  @Column()
//  name!: string
//}
//
