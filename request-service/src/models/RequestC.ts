import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class RequestC {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  tipo?:number;

  @Column('text')
  descripcion?:string;

  @Column()
  estado?:number

  @Column()
  reservacionId?: number; 

  @Column()
  pagoId?: number;

  constructor(init: Partial<RequestC>) {
    Object.assign(this, init);
  }
}
