// components/Greeting.tsx
// デフォルトがサーバーコンポーネントなので、'use client' は不要
import React from "react"

interface GreetingProps {
  name: string
  message?: string
}

const Greeting: React.FC<GreetingProps> = ({name, message}) => {
  return (
    <div style={{border: "1px solid #ccc", padding: "10px", margin: "10px 0", borderRadius: "5px"}}>
      <h2>
        {message ? message : "こんにちは"}, {name}さん！
      </h2>
      <p>Next.js App Router アプリへようこそ。</p>
      <small>(これはサーバーコンポーネントです)</small>
    </div>
  )
}

export default Greeting
