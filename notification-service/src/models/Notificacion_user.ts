import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Notification_user {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  id_user?:string;

  @Column()
  id_notificacion?:number


  constructor(init: Partial<Notification_user>) {
    Object.assign(this, init);
  }
}
