import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Inquilin {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  descripcion?:string;

  @Column()
  video?:string;

  @Column()
  userid?:number;

 

  constructor(init: Partial<Inquilin>) {
    Object.assign(this, init);
  }
}
