import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Departamento {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  imagen:string;

  @Column('decimal')
  precio:number;

  @Column()
  descripcion:string;

  @Column()
  piso:number;

  @Column()
  aforo:number;

  @Column()
  habitaciones:number;


  constructor(imagen: string, precio:number,descripcion:string,piso:number,aforo:number,habitaciones:number) {
    this.imagen=imagen;
    this.precio=precio;
    this.descripcion=descripcion;
    this.piso=piso;
    this.aforo=aforo;
    this.habitaciones=habitaciones;
  }
}