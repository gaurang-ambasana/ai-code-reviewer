import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { code } = await req.json();
  if (!code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama3-70b-8192",
          messages: [
            {
              role: "system",
              content:
                "You are a senior engineering manager. Please review the code for bugs, style issues, and improvements. Format your response using Markdown, including code blocks, bullet points, and headings where appropriate.",
            },
            {
              role: "user",
              content: `Review this code and give super critical feedback with Software Engineering best practices:\n\n${code}`,
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();

      return NextResponse.json(
        { error: error.error || "API request failed" },
        { status: response.status }
      );
    }

    const data = await response.json();
    const review = data.choices[0].message.content;

    return NextResponse.json({ review });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error", details: (err as Error).message },
      { status: 500 }
    );
  }
}
