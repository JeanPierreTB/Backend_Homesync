import { Entity, PrimaryGeneratedColumn, Column, TableInheritance } from 'typeorm';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  usuario: string;

  @Column()
  correo: string;

  @Column()
  contrasena: string;

  @Column()
  telefono: number;

  @Column('text')
  foto: string;

  // No es necesario incluir 'id' en el constructor, ya que es autoincrementado por TypeORM.
  constructor(usuario: string, correo: string, contrasena: string, telefono: number, foto: string) {
    this.usuario = usuario;
    this.correo = correo;
    this.contrasena = contrasena;
    this.telefono = telefono;
    this.foto = foto;
  }
}
