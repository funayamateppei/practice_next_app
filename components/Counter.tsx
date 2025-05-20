// components/Counter.tsx
"use client" // クライアントコンポーネントであることを明示する

import React, { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ border: "1px solid #0070f3", padding: "15px", margin: "20px 0", borderRadius: "8px" }}>
      <p style={{ fontSize: "1.2em", fontWeight: "bold" }}>現在のカウント: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "8px 15px",
          fontSize: "1em",
          cursor: "pointer",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        カウントアップ
      </button>
      <p style={{ fontSize: "0.8em", color: "#555", marginTop: "10px" }}>
        ↑このボタンはクライアントサイドでのインタラクションを必要とするため、
        <code style={{ backgroundColor: "#fff", padding: "2px 4px", borderRadius: "3px" }}>use client</code> ディレクティブが必要です。
      </p>
    </div>
  )
}
