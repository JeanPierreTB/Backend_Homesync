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

  @Column()
  reservacionId: number; 

  @Column()
  pagoId: number;

  constructor(id: number, tipo: number, descripcion: string, estado: number,reservacionId:number,pagoId:number) {
    this.id = id;
    this.tipo=tipo;
    this.descripcion=descripcion;
    this.estado=estado;
    this.reservacionId=reservacionId;
    this.pagoId=pagoId;
  }
}
