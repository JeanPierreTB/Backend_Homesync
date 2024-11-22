import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Capital {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  gasto?:number

  @Column()
  piso?:number

  @Column()
  ingreso?:number

  constructor(init: Partial<Capital>) {
    Object.assign(this, init);
  }
}
