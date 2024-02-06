
import { Request, Response } from "express";

export const CartController={
    getCart:async(req:Request,res:Response)=>{
       try{
        res.json('usuarios')
       }catch(e){

       }
    },
    getProductIdCart:async(req:Request,res:Response)=>{
        try{
         res.json('usuarios')
        }catch(e){
 
        }
     },
    addProductCart:async(req:Request,res:Response)=>{
        try{
         res.json('usuarios')
        }catch(e){
 
        }
     },
     deleteProductCart:async(req:Request,res:Response)=>{
        try{
         res.json('usuarios')
        }catch(e){
 
        }
     }
}