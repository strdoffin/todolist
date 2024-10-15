'use server'
import { db } from "@/lib/db"
import { redirect } from "next/navigation"
 
export const EditTodo = async(id:number) =>[
    redirect(`/edit/${id}`)
    
]