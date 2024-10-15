'use client'
import { DeleteTodo } from "@/action/delete-todo";
import { Post } from "@prisma/client"
import { useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { EditTodo } from "@/action/edit-todo";
export const TodoItem = ({post}:{post:Post}) => {
    const [isOpen , setOpen] = useState(false)
    const deletePost = async (id: number) => {
        DeleteTodo(id)
    };
    const editPost = async(id:number) =>{
        EditTodo(id)
    }

    return (
        <div className="border-2 rounded-xl my-2">
            <div className="p-[1vh] grid grid-cols-8">
                <div className="col-span-1">
                    <input
                        className="w-6 h-6"
                        type="checkbox"
                        name=""
                        id=""
                    />
                </div>
                <div className="col-span-3">
                    <h2>{post.title}</h2>
                </div>
                <div className="col-span-3 flex justify-center gap-5">
                    <button onClick={()=> editPost(post.id) } className="text-blue-500">edit</button>
                    <button onClick={() => deletePost(post.id)} className="text-red-500">delete</button>
                </div>
                <div className="flex justify-end col-span-1">
                    <button onClick={() => setOpen(!isOpen)}>
                        <FontAwesomeIcon
                            icon={
                                isOpen
                                    ? faChevronUp
                                    : faChevronDown
                            }
                        />
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="p-[1vh]">
                    <p>{post.content}</p>
                </div>
            )}
        </div>
    )
}