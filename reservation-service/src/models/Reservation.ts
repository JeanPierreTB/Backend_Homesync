import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  fecha_inicio: string;

  @Column('date')
  fecha_fin: string;

  @Column()
  clienteId: number; // Referencia al cliente por ID

  @Column()
  departamentoId: number; // Referencia al departamento por ID

  constructor(
    id: number,
    fecha_inicio: string,
    fecha_fin: string,
    clienteId: number,
    departamentoId: number
  ) {
    this.id = id;
    this.fecha_inicio = fecha_inicio;
    this.fecha_fin = fecha_fin;
    this.clienteId = clienteId;
    this.departamentoId = departamentoId;
  }
}
