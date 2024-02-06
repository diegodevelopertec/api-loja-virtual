
import { Request, Response } from "express";

export const ProductController={
    getProductsAll:async(req:Request,res:Response)=>{
       try{
        res.json('usuarios')
       }catch(e){

       }
    },
    getProductId:async(req:Request,res:Response)=>{
        try{
         res.json('usuarios')
        }catch(e){
 
        }
     },
    createProduct:async(req:Request,res:Response)=>{
        try{
         res.json('usuarios')
        }catch(e){
 
        }
     },

     updateProduct:async(req:Request,res:Response)=>{
        try{
         res.json('usuarios')
        }catch(e){
 
        }
     },
     deleteProduct:async(req:Request,res:Response)=>{
        try{
         res.json('usuarios')
        }catch(e){
 
        }
     }
}