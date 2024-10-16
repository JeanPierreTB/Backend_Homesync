import { Table, Column, Model, DataType, HasOne, HasMany } from "sequelize-typescript";

@Table({ tableName: "Usuario" })

export class Usuario extends Model {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id!: number;

    @Column({ type: DataType.STRING, allowNull: false })
    nombre!: string;

    @Column({ type: DataType.STRING, allowNull: false })
    contrasena!: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    dni!: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    ntelefono!: number;


    @Column({ type: DataType.STRING, defaultValue: 'https://static.vecteezy.com/system/resources/previews/027/728/804/non_2x/faceless-businessman-user-profile-icon-business-leader-profile-picture-portrait-user-member-people-icon-in-flat-style-circle-button-with-avatar-photo-silhouette-free-png.png' })
    foto!: string;

    @Column({ type: DataType.STRING, defaultValue: 'Cliente' })
    rol!: string;

   

   
}

export default Usuario;