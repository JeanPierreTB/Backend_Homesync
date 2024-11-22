import { AppDataSource } from "../database";
import { RequestC } from "../models/RequestC";
import { producer } from "../utils/kafkaClient";

export const crearequestservice=async(data:any)=>{
    const {tipo,descripcion,reservacionId}=data;
    const requestRepository=AppDataSource.getRepository(RequestC);
    const requestclass=new RequestC({tipo,descripcion,estado:2,reservacionId});
    await requestRepository.save(requestclass);
    
   await producer.connect();
   await producer.send({
    topic:"Request",
    messages:[
        {
            value:JSON.stringify({
                requestid:requestclass.id,
                tipo:tipo,
                descripcion:descripcion
            })
        }
    ]
   })

   await producer.disconnect();
   return requestclass;
}