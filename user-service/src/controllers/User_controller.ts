import { AppDataSource } from "../database";
import { User } from "../models/User";



export const crear_usuario=async(Tipoclass:any,data:User)=>{
    const {usuario,correo,contrasena,telefono}=data;
    const userRepository=AppDataSource.getRepository(Tipoclass);
    const userclass= new Tipoclass({usuario,correo,contrasena,telefono});
    const response=await userRepository.save(userclass);
    return response;

}

export const actualizar_contrasena=async(Tipoclass:any,data:User)=>{
    const {correo,contrasena}=data;
    const userRepository=AppDataSource.getRepository(Tipoclass);
    const userclass=await userRepository.findOne({where:{correo}});
    if(!userclass){
        return null;
    }

    userclass.contrasena=contrasena;
    const response=await userRepository.save(userclass);
    return response;

}


export const iniciar_sesion = async (Tipoclass: any, data: User) => {
    const { usuario, contrasena } = data;
    const userRepository = AppDataSource.getRepository(Tipoclass);

    const user = await userRepository.findOne({
        where: {
            usuario: usuario,
            contrasena: contrasena
        }
    });
    
    if (!user) {
        return null; 
    }

    return user;
};
