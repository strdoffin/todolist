import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    try {
      const posts = await prisma.post.findMany();
      return new Response(JSON.stringify(posts), { status: 200 });
    } catch (error) {
      console.error('Error fetching posts:', error);
      return new Response('Internal Server Error', { status: 500 });
    }
  }
  

export async function POST(req: Request) {
    try {
      const { title, content } = await req.json();
      const newPost = await prisma.post.create({
        data: {
          title,
          content,
        },
      });
      return new Response(JSON.stringify(newPost), { status: 200 });
    } catch (error) {
      console.error('Error creating post:', error); // Add a console log for debugging
      return new Response('Internal Server Error', { status: 500 });
    }
  }
  