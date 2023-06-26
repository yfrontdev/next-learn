import Link from "next/link"

const Blog = () => {
  return (
    <>
      <div>Blog</div>
      <ul>
        <li>
          <Link href={`/blog/${1}`}>1 POST</Link>
        </li>
        <li>
          <Link href={`/blog/${2}`}>2 POST</Link>
        </li>
      </ul>
    </>
  )
}

export default Blog