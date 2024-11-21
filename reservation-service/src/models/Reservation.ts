import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('date')
  fecha_inicio?: string;

  @Column('date')
  fecha_fin?: string;

  @Column()
  clienteId?: number; 

  @Column()
  departamentoId?: number; 

  constructor(init: Partial<Reservation>) {
    Object.assign(this, init);
  }
}
