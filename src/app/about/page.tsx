// src/app/about/page.tsx
import Link from "next/link"

// このコンポーネントはデフォルトでサーバーコンポーネントとして動作します
export default function AboutPage() {
  return (
    <div style={{padding: "20px", fontFamily: "sans-serif"}}>
      <h1>About Us</h1>
      <p>このページはApp Routerのルーティングの仕組みを示しています。</p>
      <Link href="/">ホームへ戻る</Link>
    </div>
  )
}
