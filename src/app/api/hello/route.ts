// src/app/api/hello/route.ts
import { NextResponse } from "next/server"

// GETリクエストを処理するハンドラ関数
export async function GET(request: Request) {
  // RequestオブジェクトからURLのクエリパラメータを取得できます
  const { searchParams } = new URL(request.url)
  const name = searchParams.get("name") || "ゲスト" // nameクエリパラメータがなければ「ゲスト」

  // NextResponseを使用してJSONレスポンスを返します
  return NextResponse.json({ message: `こんにちは、${name}さん！ (Next.js API Route Handler)` })
}

// 他にもPOST, PUT, DELETEなどのHTTPメソッドに対応する関数を定義できます
// export async function POST(request: Request) { ... }
// export async function PUT(request: Request) { ... }
// export async function DELETE(request: Request) { ... }
