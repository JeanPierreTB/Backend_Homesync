import { Table, Column, Model, DataType, ForeignKey } from "sequelize-typescript";
import Usuario from './Usuario';


@Table({ tableName: "Solicitudes" })

export class Solicitudes extends Model {

    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id!: number;

    @Column({ type: DataType.DATE, allowNull: false })
    fecha!: Date;

    @Column({ type: DataType.STRING, allowNull: false })
    descripcion!: string;

    @Column({ type: DataType.STRING, allowNull: false })
    tipo!:string;

    @ForeignKey(() => Usuario)
    @Column({ type: DataType.INTEGER })
    usuarioId!: number;

   
}

export default Solicitudes;



