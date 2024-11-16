import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pago: string;

  @Column()
  user: string;

  @Column({ default: true })
  isActive: boolean;

  constructor(id: number, pago: string, user: string, isActive: boolean = true) {
    this.id = id;
    this.pago = pago;
    this.user = user;
    this.isActive = isActive;
  }
}
