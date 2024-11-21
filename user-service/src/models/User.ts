import { Entity, PrimaryGeneratedColumn, Column, TableInheritance } from 'typeorm';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  usuario?: string;

  @Column()
  correo?: string;

  @Column()
  contrasena?: string;

  @Column()
  telefono?: number;

  @Column('text',{nullable:true})
  foto?: string;

  constructor(init: Partial<User>) {
    Object.assign(this, init);
  }
}
