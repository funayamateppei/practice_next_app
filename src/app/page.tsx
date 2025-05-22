// src/app/page.tsx
import Link from "next/link"
import {ApiFetcher, Counter, Greeting} from "../../components"

export default function HomePage() {
  return (
    <div style={{padding: "20px", fontFamily: "sans-serif"}}>
      <h1>Next.js App Routerへようこそ！</h1>
      <p>これはルートページ (`/`) です。</p>

      <h2>コンポーネントのデモ</h2>
      {/* サーバーコンポーネントの利用 */}
      <Greeting name="Next.js 学習者" />
      <Greeting name="皆さん" message="頑張りましょう" />

      {/* クライアントコンポーネントの利用 */}
      <Counter />

      {/* APIからのメッセージを表示するコンポーネント */}
      <ApiFetcher />

      <nav style={{marginTop: "30px"}}>
        <ul style={{listStyle: "none", padding: 0}}>
          <li style={{marginBottom: "10px"}}>
            <Link href="/about">Aboutページへ</Link>
          </li>
          <li style={{marginBottom: "10px"}}>
            <Link href="/posts">ブログ記事一覧 (SSG相当)</Link>
          </li>
          <li style={{marginBottom: "10px"}}>
            <Link href="/users">ユーザー一覧 (SSR)</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
