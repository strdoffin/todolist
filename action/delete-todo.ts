'use server'
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export const DeleteTodo = async(id:number)=>{
    await db.post.delete({
        where : {id}
    })
    revalidatePath('/');
    redirect('/')
}
