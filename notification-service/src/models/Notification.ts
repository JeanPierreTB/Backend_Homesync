import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  titulo?:string;

  @Column()
  descripcion?:string;



  @Column()
  tipo?:number;




  constructor(init: Partial<Notification>) {
    Object.assign(this, init);
  }
}
