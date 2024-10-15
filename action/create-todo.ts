'use server'
import { db } from "@/lib/db"
import { redirect } from "next/navigation"

export const CreateTodo = async(prevState: any, formData: FormData) =>{
    const title = formData.get('title') as string
    const content = formData.get('content') as string
    console.log(title,content);
    // try {
        const newPost = await db.post.create({
          data: {
            title,
            content,
          },
        })
        redirect('/')
        return {success: 'CreateTodo Success'}
    //   } catch (error) {
    //     return {message: 'Could not CreateTodo'}
    //   }
    
}