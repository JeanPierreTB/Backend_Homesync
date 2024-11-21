import { Column, Entity } from 'typeorm';
import { User } from './User';

@Entity()
export class Proveedor extends User {
  @Column({type:'integer',nullable:true})
  id_solicitud_admin: number | null;

  constructor(usuario: string,correo: string,contrasena: string,telefono: number,foto: string,id_solicitud_admin:number | null) {
    super(usuario,correo,contrasena,telefono,foto);
    this.id_solicitud_admin=id_solicitud_admin;
  }
}
