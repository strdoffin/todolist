'use server'
import { db } from "@/lib/db"
import { redirect } from "next/navigation"

export const UpdateTodo = async(prevState: any, formData: FormData) =>{
    const id = parseInt(formData.get('id') as string, 10);
    const title = formData.get('title') as string
    const content = formData.get('content') as string
    console.log(title,content);
    const newPost = await db.post.update({
    where:{id},
    data: {
        title,
        content,
    },
    })
    redirect('/')
    return {success: 'CreateTodo Success'}
}