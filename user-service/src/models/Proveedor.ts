import { Column, Entity } from 'typeorm';
import { User } from './User';

@Entity()
export class Proveedor extends User {
  @Column({ type: 'integer', nullable: true })
  id_solicitud_admin?: number | null;

  constructor(init: Partial<User>, id_solicitud_admin = null) {
    super(init);  
    this.id_solicitud_admin = id_solicitud_admin;
  }
}
