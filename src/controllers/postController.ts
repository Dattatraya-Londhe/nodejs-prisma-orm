//import { json } from "body-parser";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
    // Check incoming query type
    console.log("param.model -  "+params.model+ "    params.action -"+params.action);
    //console.log("param.agrs - " +params.args['data']);
    if (params.model == 'Post') {
      if (params.action == 'delete') {
        // Delete queries
        // Change action to an update
        params.action = 'update'
        params.args['data'] = { deleted: true }
      }
      
      if (params.action == 'deleteMany') {
        // Delete many queries
        params.action = 'updateMany'
        if (params.args.data != undefined) {
          params.args.data['deleted'] = true
        } else {
          params.args['data'] = { deleted: true }
        }
      }
    }
    console.log("********************************");
    console.log("param.model -    "+params.model+ "     params.action -"+params.action);
    //console.log("param.agrs -" +params.args.data);
    return next(params)
  })


export const getPost = async (_req: Request, res: Response) => {
    try {
        const users = await prisma.post.findMany({
            // include:{         //To retrieve Auther information
            //     author :true
            // }
            // where :{     // to retrieve based on condition
            //     deleted : true,
            //     id : 2
            // }
            
            where:{
                deleted : false
            }
        });
        res.json({ users });
    } catch (error) {
        console.log("Error in getting post data");
        throw error;
    }
}

export const createPost = async (req: Request, res: Response) => {
    //res.send("create request called");

    try {
        const postInformation = req.body;
        console.log(postInformation);
        const post = await prisma.post.create({
            data: {
                title: postInformation.title,
                authorId: postInformation.authorId
            },
        });
        //console.log(user);
        res.json({ post });
    } catch (error) {
        console.log("Error in Creating Post");
        throw error;
    }
};


export const updatePost = async (req: Request, res: Response) => {
    //res.send("update request .....");
    try {
        const id = +req.params["id"];
        const updateInformation = req.body;
        const post = await prisma.post.update({
            where: {
                id: id,
            },
            data: {
                title: updateInformation.title,
                authorId: updateInformation.authorId
            },
        });
        res.json({ post });
    } catch (error) {
        //   console.log("Error in updated Post");
        //   throw error;
        res.json({ "Message": "Error in Updating post" });
    }
};

export const deletePost = async (req: Request, res: Response) => {
    //res.send("delete request .....");
    try {
        const id = +req.params["id"];
        const post = await prisma.post.delete({
            where: {
                id: id,
            },

        });
        res.json({ post });
    } catch (error) { }
};