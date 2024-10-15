"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { useFormState } from 'react-dom'
import { useEffect, useState } from "react";
import { FetchTodo } from "@/action/fetchTodo";
import { UpdateTodo } from "@/action/update-todo";

const initialState = {
  success: false,
  message: null,
}

const EditPostPage = ({ params }: { params: { id: string }}) => {
  const [todo , setTodo ] = useState({});
  // @ts-ignore
  const [state, formAction] = useFormState(UpdateTodo, initialState);
  const { id } = params;

  useEffect(() => {
    const fetchdata = async () => {
      const dataforfetch = await FetchTodo(Number(id));
      if (dataforfetch) {
        setTodo({
          id: dataforfetch.id,
          title: dataforfetch.title,
          content: dataforfetch.content
        });
      }
    }
    fetchdata();
  }, [id]);

  return (
    <div className="p-[2vh]">
      <div className="w-full flex justify-between">
        <Link href={'/'}><FontAwesomeIcon icon={faChevronLeft} className="text-4xl" /></Link>
        <div className="rounded-full w-16 h-16 border-2 flex">
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
          <h1 className="text-2xl">Edit Todo</h1>
        </div>
        <div className="w-full h-[1px] bg-gray-400"></div>
        <form action={formAction}>
          <div className="px-[5vh]">
            <input type="text" className="hidden" name="id" value={Number(id)} />
            <h2 className="text-xl mt-10">Title</h2>
            {/* @ts-ignore */}
            <input name="title" type="text" required className="w-full border-2 rounded-lg p-2" placeholder={todo.title || ''} />
            <h2 className="text-xl mt-10">Content</h2>
            {/* @ts-ignore */}
            <textarea name="content" className="mt-1 w-full h-48 border-2 rounded-lg p-2" placeholder={todo.content || ''}></textarea>
            <div className="w-full flex justify-end">
              <button type="submit" className="mt-5 bg-purple-500 p-1 rounded-lg text-white">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPostPage;
