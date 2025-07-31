import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json()

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 })
    }

    // 使用 OpenAI 模型生成文本
    const { text } = await generateText({
      model: openai("gpt-4o"), // 您可以根据需要更换为其他模型，如 groq('llama3-8b-8192')
      prompt: prompt,
      system:
        "你是一个专业的AI体育教学助手，专注于提供体育训练、健康、运动科学和营养方面的建议。请用中文回答，并保持专业、简洁和有帮助的语气。",
    })

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error("Error generating text:", error)
    return NextResponse.json({ error: "Failed to generate text" }, { status: 500 })
  }
}
