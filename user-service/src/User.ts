import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ default: true })
  isActive: boolean;

  constructor(id: number, name: string, email: string, isActive: boolean = true) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.isActive = isActive;
  }
}
