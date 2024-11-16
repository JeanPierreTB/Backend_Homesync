import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reservation_des: string;

  @Column()
  hotmail: string;

  @Column({ default: true })
  isActive: boolean;

  constructor(id: number, reservation_des: string, hotmail: string, isActive: boolean = true) {
    this.id = id;
    this.reservation_des = reservation_des;
    this.hotmail = hotmail;
    this.isActive = isActive;
  }
}
