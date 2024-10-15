import { DeleteTodo } from "@/action/delete-todo";
import { TodoItem } from "@/components/todo";
import Image from "next/image";
import Link from "next/link";
import { db } from "@/lib/db";

export default async function Home() {
    const posts = await db.post.findMany({})
    const deletePost = async (id: number) => {
        DeleteTodo(id)
    };

    return (
        <main className="p-[2vh]">
            <div className="w-full flex justify-end">
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
            <div>
                <div className="flex justify-between my-5">
                    <h1 className="text-2xl">Todolist</h1>
                    <Link href="/create">
                        <button className="bg-purple-500 p-1 rounded-lg text-white">
                            Create
                        </button>
                    </Link>
                </div>
                <div className="w-full h-[1px] bg-gray-400"></div>
                {posts.map((post) => (
                    <TodoItem post={post} key={post.id} />
                ))}
            </div>
            <h2>test</h2>
        </main>
    );
}
