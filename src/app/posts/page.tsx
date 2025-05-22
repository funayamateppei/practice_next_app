// src/app/posts/page.tsx
import Link from "next/link"

interface Post {
  id: number
  title: string
  body: string
}

// このコンポーネントはサーバーコンポーネントとして動作します。
// fetch APIはデフォルトでビルド時にデータをキャッシュしようとします。
// そのため、これはSSGに相当するレンダリングになります。
export default async function PostsPage() {
  // コンソールにログが出力されるのは、開発サーバーがリクエストを処理するたびに
  // コンポーネントがサーバー側でレンダリングされるためです。
  // 本番ビルド(npm run build)後、サーバーを起動(npm start)してアクセスすると
  // このログは一度しか出力されず、キャッシュされたHTMLが配信されることを確認できます。
  console.log("--- サーバー側で PostsPage がレンダリングされました ---")

  // デフォルトのfetch挙動 (cache: 'force-cache') により、データはキャッシュされる
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
  const posts: Post[] = await res.json()

  return (
    <div style={{padding: "20px", fontFamily: "sans-serif"}}>
      <h1>ブログ記事一覧 (SSG相当)</h1>
      <p>このページは**ビルド時**にデータがフェッチされ、静的なHTMLとして生成されます。</p>
      <p>リロードしても、基本的にはサーバー側でのデータフェッチは再実行されません。</p>
      <ul style={{listStyle: "none", padding: 0}}>
        {posts.map((post) => (
          <li key={post.id} style={{marginBottom: "20px", border: "1px solid #ccc", padding: "10px", borderRadius: "5px"}}>
            <h2>{post.title}</h2>
            <p>{post.body.substring(0, 100)}...</p>
            {/* 動的ルーティングへのリンクは次で扱います */}
            {/* <Link href={`/posts/${post.id}`}>Read More</Link> */}
          </li>
        ))}
      </ul>
      <Link href="/">ホームへ戻る</Link>
    </div>
  )
}
