import { Column, Entity } from 'typeorm';
import { User } from './User';

@Entity()
export class Proveedor extends User {
  @Column()
  id_solicitud_admin: number;

  constructor(id: number,usuario: string,correo: string,contrasena: string,telefono: number,foto: string,id_solicitud_admin:number) {
    super(id,usuario,correo,contrasena,telefono,foto);
    this.id_solicitud_admin=id_solicitud_admin;
  }
}
