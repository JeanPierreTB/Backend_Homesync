import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Request_admin {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('date')
  fecha:string;

  @Column('decimal')
  precio:number

  @Column()
  tipo_pago:number

  @Column()
  estado:number

  @Column('text')
  descripcion:string

  @Column()
  SolicitudId: number; 

  @Column()
  AdministradorId: number;

  constructor(fecha:string,precio:number,tipo_pago:number,estado:number,descripcion:string,id_solicitud:number,id_administrador:number ) {
    this.fecha=fecha;
    this.precio=precio;
    this.tipo_pago=tipo_pago;
    this.estado=estado;
    this.descripcion=descripcion;
    this.SolicitudId=id_solicitud;
    this.AdministradorId=id_administrador
   
  }
}
