import { Request, Response } from "express";

export const UserController={
    getUserAll:async(req:Request,res:Response)=>{
       try{
        res.json('usuarios')
       }catch(e){

       }
    },
    getUserId:async(req:Request,res:Response)=>{
      try{
       res.json('usuarios')
      }catch(e){

      }
   },
    createUser:async(req:Request,res:Response)=>{
        try{
         res.json('usuarios')
        }catch(e){
 
        }
     },
     loginUser:async(req:Request,res:Response)=>{
        try{
         res.json('usuarios')
        }catch(e){
 
        }
     },
     updateUser:async(req:Request,res:Response)=>{
        try{
         res.json('usuarios')
        }catch(e){
 
        }
     },
     deleteUser:async(req:Request,res:Response)=>{
        try{
         res.json('usuarios')
        }catch(e){
 
        }
     }
}