import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  monto:number;

  @Column('date')
  fecha_pago:string;


  constructor(id: number,monto: number, fecha_pago:string) {
    this.id = id;
    this.monto=monto;
    this.fecha_pago=fecha_pago;
  }
}
