import express from'express'
import dotenv from 'dotenv'
import Routes from './Routes'
dotenv.config()
const api=express()


api.use('/api',Routes)

api.listen(process.env.PORT)