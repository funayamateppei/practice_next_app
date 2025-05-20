// components/ApiFetcher.tsx
"use client" // このコンポーネントはクライアントサイドで動作します

import React, { useState, useEffect } from "react"

export default function ApiFetcher() {
  const [apiMessage, setApiMessage] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        // 作成したAPI Routeを呼び出す
        const res = await fetch("/api/hello?name=クライアントから")
        if (!res.ok) {
          throw new Error(`HTTPエラー! ステータス: ${res.status}`)
        }
        const data = await res.json()
        setApiMessage(data.message)
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message)
        } else {
          setError("不明なエラーが発生しました")
        }
      } finally {
        setLoading(false)
      }
    }
    fetchApiData()
  }, []) // コンポーネントがマウントされた時に一度だけ実行

  if (loading)
    return (
      <p style={{ marginTop: "20px", padding: "10px", border: "1px solid #ddd", backgroundColor: "#f9f9f9", borderRadius: "5px" }}>
        APIメッセージを読み込み中...
      </p>
    )
  if (error)
    return (
      <p style={{ marginTop: "20px", padding: "10px", border: "1px solid red", backgroundColor: "#ffecec", color: "red", borderRadius: "5px" }}>
        APIエラー: {error}
      </p>
    )

  return (
    <p style={{ marginTop: "20px", padding: "10px", border: "1px solid #ddd", backgroundColor: "#f9f9f9", borderRadius: "5px" }}>
      APIからのメッセージ: <strong style={{ color: "#333" }}>{apiMessage}</strong>
    </p>
  )
}
