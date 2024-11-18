import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Request {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo:number;

  @Column('text')
  descripcion:string;

  @Column()
  estado:number

  constructor(id: number, tipo: number, descripcion: string, estado: number) {
    this.id = id;
    this.tipo=tipo;
    this.descripcion=descripcion;
    this.estado=estado;
  }
}
