// src/app/users/page.tsx
import Link from "next/link"

interface User {
  id: number
  name: string
  email: string
}

// このコンポーネントはサーバーコンポーネントとして動作します。
// fetch APIにcache: 'no-store'を指定することで、リクエストごとにデータをフェッチします。
// そのため、これはSSRレンダリングになります。
export default async function UsersPage() {
  console.log("--- サーバー側で UsersPage がレンダリングされました ---")

  // リクエストごとにデータをフェッチするように指定
  const res = await fetch("https://jsonplaceholder.typicode.com/users?_limit=3", { cache: "no-store" })
  const users: User[] = await res.json()

  // サーバー側で取得した現在の時刻
  const timestamp = new Date().toLocaleString()

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>ユーザー一覧 (SSR)</h1>
      <p>このページは**リクエストごと**にサーバーサイドで動的に生成されています。</p>
      <p>
        最終レンダリング日時: <strong style={{ color: "#0070f3" }}>{timestamp}</strong>
      </p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "15px", border: "1px dashed #aaa", padding: "10px", borderRadius: "5px" }}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
      <Link href="/">ホームへ戻る</Link>
    </div>
  )
}
