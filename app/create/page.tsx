"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { CreateTodo } from "@/action/create-todo";

import { useFormState } from 'react-dom'
const initialState = {
  success: false,
  message: null,
}




export default function CreatePost() {
    // @ts-ignore
    const [state, formAction] = useFormState(CreateTodo, initialState)
    return (
        <div className="p-[2vh]">
            <div className="w-full flex justify-between">
                <Link href={'/'}><FontAwesomeIcon icon={faChevronLeft} className="text-4xl" /></Link>
                <div className="rounded-full w-16 h-16 border-2 flex ">
                    <Image
                        className="rounded-full"
                        src="/next.svg"
                        alt="profile_pic"
                        width={64}
                        height={64}
                    />
                </div>
            </div>
            <div className="">
                <div className="flex justify-between my-5">
                    <h1 className="text-2xl">Create Todo</h1>
                </div>
                <div className="w-full h-[1px] bg-gray-400"></div>
                <form action={formAction}>
                    <div className="px-[5vh]">
                        <h2 className="text-xl mt-10">Title</h2>
                        <input name="title" type="text" required className="w-full border-2 rounded-lg p-2" />
                        <h2 className="text-xl mt-10">content</h2>
                        <textarea name="content" className="mt-1 w-full h-48 border-2 rounded-lg p-2"></textarea>
                        <div className="w-full flex justify-end">
                        <button type="submit" className="mt-5 bg-purple-500 p-1 rounded-lg text-white">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
