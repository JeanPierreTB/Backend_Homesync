import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Request_admin {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('date')
  fecha?:string;

  @Column('decimal')
  precio?:number

  @Column()
  tipo_pago?:number

  @Column()
  estado?:boolean

  @Column('text')
  descripcion?:string

  @Column()
  SolicitudId?: number; 

  @Column()
  AdministradorId?: number;

  constructor(init: Partial<Request_admin>) {
    Object.assign(this, init);
  }
}
