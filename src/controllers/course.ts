import {Request, Response } from "express";
import { Logger } from "../logger"
import { CourseModel } from "../model/course";
import {CustomError} from "../utils"
const log = new Logger();

type coursePayload = {
    name?:string;
    description?: string;
    price?: number;
    is_active?: boolean;
    is_deleted?: boolean;
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

export const getCourse = async (req:Request,res: Response) => {
    try{
        log.info('This is request');
        
        const response = await CourseModel.find();

        log.info("This is response",response);

        if(!response){
            return res.json(new CustomError("No courses found", 400))
        }

        return res.status(200).json({data:response, message:"all course data"})


    }catch(error){
        log.info('Error:',error);
        return res.json(new CustomError("No courses found", 400))
    }
}

export const updateCourse = async (req:Request,res: Response) => {
      try{
        log.info('This is request in update course');
        const {course_id,name, price, is_active, is_deleted, description} = await req.body;

        log.info('This is request in update course',{course_id,name, price});

        let updateObj: coursePayload  = {}

        if(!course_id ){
            return res.json(new CustomError("Payload is wrong", 400))
        }
    
        if(name && name.trim() != ""){
            updateObj.name = name;
        }
        
        if(name && name.trim() != ""){
            updateObj.name = name;
        } 
        
        if(price && typeof price === "number"){
            updateObj.price = price;
        } 
        
        if(description && description.trim() != ""){
            updateObj.description = description;
        }

        if(typeof is_active === "boolean"){
            updateObj.is_active = is_active;
        }

        if(typeof is_deleted === "boolean"){
                    updateObj.is_deleted = is_deleted;
            }

        const keys = Object.keys(updateObj);
        
        if(keys.length === 0){
            return res.json(new CustomError("Alteast onepayload is required", 400))
        }

        const response = await CourseModel.findOneAndUpdate(
            {_id: course_id},
            {$set: updateObj},
            {new:true});
        log.info('This is request in update course',response);
            
        if(!response){
            return res.json(new CustomError("course not found", 404))
        }

        return res.status(202).json({data:response, message:"all course data"})


    }catch(error){
        log.info('Error in update course',error);
        return res.json(new CustomError("Error in updating the course", 400))
    }
}

export const deleteCourse = async (req:Request,res: Response) => {
    try{
        log.info('This is request',req);

    }catch(error){
        log.info('Error:',error);
        
    }
}

