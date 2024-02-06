
import { Request, Response } from "express";

export const CategoryController={
    getCategorysAll:async(req:Request,res:Response)=>{
       try{
        res.json('usuarios')
       }catch(e){

       }
    },
    getCategoryId:async(req:Request,res:Response)=>{
        try{
         res.json('usuarios')
        }catch(e){
 
        }
     },
    createCategory:async(req:Request,res:Response)=>{
        try{
         res.json('usuarios')
        }catch(e){
 
        }
     },

     updateCategory:async(req:Request,res:Response)=>{
        try{
         res.json('usuarios')
        }catch(e){
 
        }
     },
     deleteCategory:async(req:Request,res:Response)=>{
        try{
         res.json('usuarios')
        }catch(e){
 
        }
     }
}