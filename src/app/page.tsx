// src/app/page.tsx
import Link from "next/link"

export default function HomePage() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Next.js App Routerへようこそ！</h1>
      <p>これはルートページ (`/`) です。</p>
      <nav style={{ marginTop: "20px" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>
            <Link href="/about">Aboutページへ</Link>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Link href="/posts">ブログ記事一覧 (SSG相当)</Link>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Link href="/users">ユーザー一覧 (SSR)</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
