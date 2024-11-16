import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Request {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Request: string;

  @Column()
  Request1: string;

  @Column({ default: true })
  isActive: boolean;

  constructor(id: number, Request: string, Request1: string, isActive: boolean = true) {
    this.id = id;
    this.Request = Request;
    this.Request1 = Request1;
    this.isActive = isActive;
  }
}
