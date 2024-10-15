'use server'
import { db } from "@/lib/db"
 
export const FetchTodo = async (id: number) => {
    const result = await db.post.findUnique({
      where: { id }
    });
    // console.log(result)
    return result;
  };