import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Departamento {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  imagen?:string;

  @Column('decimal')
  precio?:number;

  @Column()
  descripcion?:string;

  @Column()
  piso?:number;

  @Column()
  aforo?:number;

  @Column()
  habitaciones?:number;


  constructor(init: Partial<Departamento>) {
    Object.assign(this, init);
  }
}