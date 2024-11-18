import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  monto:number;

  @Column('date')
  fecha_pago:string;

  @Column()
  reservation_id:number;


  constructor(id: number,monto: number, fecha_pago:string,reservation_id:number) {
    this.id = id;
    this.monto=monto;
    this.fecha_pago=fecha_pago;
    this.reservation_id=reservation_id
  }
}
