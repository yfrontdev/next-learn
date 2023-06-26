import Link from "next/link"

const Header = () => {
  return <header>
    <Link href="/">Home</Link>
    <Link href="/blog">Blog</Link>
    <Link href="/about_us">About</Link>
  </header>
}

export { Header }