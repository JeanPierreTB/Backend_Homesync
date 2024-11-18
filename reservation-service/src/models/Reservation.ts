import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  fecha_inicio:string;

  @Column('date')
  fecha_fin: string;



  constructor(id: number,fecha_inicio: string, fecha_fin: string) {
    this.id = id;
    this.fecha_inicio=fecha_inicio;
    this.fecha_fin=fecha_fin;
  }
}
