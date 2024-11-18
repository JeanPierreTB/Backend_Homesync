import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

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

  constructor(id: number,usuario: string,correo: string,contrasena: string,telefono: number,foto: string) {
    this.id = id;
    this.usuario = usuario;
    this.correo = correo;
    this.contrasena = contrasena;
    this.telefono = telefono;
    this.foto = foto;
  }
}
