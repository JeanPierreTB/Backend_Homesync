import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('decimal')
  monto?:number;

  @Column()
  pagado?:boolean;

  @Column('date',{nullable:true})
  fecha_pago?:string | null;

  @Column()
  reservation_id?:number;


  constructor(init: Partial<Payment>) {
    Object.assign(this, init);
  }
}
