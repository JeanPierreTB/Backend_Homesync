import { Table, Column, Model, DataType, ForeignKey } from "sequelize-typescript";
import Usuario from './Usuario';


@Table({ tableName: "Reservas" })

export class Reservas extends Model {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id!: number;

    @Column({ type: DataType.STRING, allowNull: false })
    des!: string;

    @Column({ type: DataType.FLOAT, allowNull: false })
    precio!: number;

    @Column({ type: DataType.STRING, defaultValue: 'https://static.vecteezy.com/system/resources/previews/027/728/804/non_2x/faceless-businessman-user-profile-icon-business-leader-profile-picture-portrait-user-member-people-icon-in-flat-style-circle-button-with-avatar-photo-silhouette-free-png.png' })
    foto!: string;


    @ForeignKey(() => Usuario)
    @Column({ type: DataType.INTEGER })
    usuarioId!: number;



   
}

export default Reservas;