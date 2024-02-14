import Image from "next/image";
import { client } from "../utils/sanity/client"


type Post = {
  _id: string
  title?: string
  slug?: {
    current: string
  }
}
export async function getStaticProps() {
  return await client.fetch<Post[]>(`*[_type == "news"]`)
}


export async function HomePage(props) {
  const {posts} = props

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

export default HomePage