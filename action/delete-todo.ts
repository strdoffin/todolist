'use server'
import { db } from "@/lib/db"
import { redirect } from "next/navigation"


export const DeleteTodo = async(id:number)=>{
    await db.post.delete({
        where : {id}
    })
    redirect('/')
}
