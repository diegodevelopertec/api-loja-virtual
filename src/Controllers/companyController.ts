
import { Request, Response } from "express";

export const CompanyController={
    getCompanysAll:async(req:Request,res:Response)=>{
       try{
        res.json('usuarios')
       }catch(e){

       }
    },
    getCompanyId:async(req:Request,res:Response)=>{
        try{
         res.json('usuarios')
        }catch(e){
 
        }
     },
    createCompany:async(req:Request,res:Response)=>{
        try{
         res.json('usuarios')
        }catch(e){
 
        }
     },

     updateCompany:async(req:Request,res:Response)=>{
        try{
         res.json('usuarios')
        }catch(e){
 
        }
     },
     deleteCompany:async(req:Request,res:Response)=>{
        try{
         res.json('usuarios')
        }catch(e){
 
        }
     }
}