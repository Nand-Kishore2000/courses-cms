import {Request, Response } from "express";
import { Logger } from "../logger"
import { CourseModel } from "../model/course";

const log = new Logger();

type coursePayload = {
    name:string;
    description: string;
    price: number;

}

export const createCourse = async (req:Request,res: Response) => {
    try{
        log.info('This is request');

        const { name, description, price }:coursePayload = await req.body;

        if(!name || !description || !price){
            log.warn('All data are required');
            res.status(400).send({error:true, message:"All fields are required!"});
        }

        const course = await CourseModel.create({
            name,
            description,
            price
        })

        if(!course){
            log.warn('Course not created');
            res.status(400).send({error:true, message:"Error in creating course"})
        }
        
        res.status(200).send({success:true, message:"New course created!", course})

    }catch(error){

        log.info('Error:',error);
        res.status(400).send({error:true, message:"Error in creating course"})
        
    }
}

export const updateCourse = async (req:Request,res: Response) => {
    try{
        log.info('This is request',req);

    }catch(error){
        log.info('Error:',error);
        
    }
}

export const deleteCourse = async (req:Request,res: Response) => {
    try{
        log.info('This is request',req);

    }catch(error){
        log.info('Error:',error);
        
    }
}

export const getCourse = async (req:Request,res: Response) => {
    try{
        log.info('This is request',req);

    }catch(error){
        log.info('Error:',error);
        
    }
}