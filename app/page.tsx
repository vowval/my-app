import Image from "next/image";
import { client } from "../utils/sanity/client"


type Post = {
  _id: string
  title?: string
  slug?: {
    current: string
  }
}

export async function PostIndex() {
  const posts = await client.fetch<Post[]>(`*[_type == "news"]`)

  return (
    <ul>
      {posts.map((post) => (
        <li key={post._id}>
          <a href={post?.slug.current}>{post?.title}</a>
        </li>
      ))}
    </ul>
  )
}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p>This my App</p>
      </div>
    </main>
  );
}
