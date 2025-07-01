# AI Code Reviewer

A web application that leverages AI to provide detailed code reviews. Built with Next.js, Tailwind CSS, and Groq's AI API, it offers an interactive code editor supporting multiple programming languages, enabling users to get insightful, markdown-formatted feedback on their code snippets.

---

## Features

- **Interactive code editor** with syntax highlighting powered by CodeMirror.
- **Multi-language support:** JavaScript, Python, Java, C++, Rust, Go, HTML, CSS, and more.
- **AI-powered code review:** Powered by Groq API's LLaMA 3 model for intelligent, context-aware code analysis.
- **Markdown formatted feedback:** Clean and readable review output with headings, bullet points, and code blocks.

<!-- ---

## Demo

Add your deployed app URL here if available. -->

---

## Tech Stack

- **Next.js** — React framework with API routes and server-side rendering.
- **Tailwind CSS** — Utility-first CSS framework for rapid UI development.
- **Codemirror** — React wrapper for the CodeMirror code editor.
- **Groq API** — AI model API for code understanding and review.
- **JavaScript / TypeScript** — Core languages.

---

## Getting Started

### Prerequisites

- Node.js 16+ and npm or yarn installed
- Groq API key (sign up at [https://groq.com](https://groq.com))

---

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gaurang-ambasana/ai-code-reviewer.git
   cd ai-code-reviewer
   ```

2. Install dependencies:

   ```bash
   yarn install
   # or
   npm install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root:

   ```
   GROQ_API_KEY=your_groq_api_key_here
   ```

4. Initialize Tailwind CSS (if not already):

   ```bash
   npx tailwindcss init -p
   ```

5. Run the development server:

   ```bash
   yarn dev
   # or
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Usage

- Paste or write code in the editor.
- Select the programming language from the dropdown.
- Click **Generate Review** to get an AI-powered markdown-formatted code review.

---

## Acknowledgments

- [Groq](https://groq.com) for the AI API.
- [Tailwind CSS](https://tailwindcss.com) for beautiful UI utilities.
- [CodeMirror](https://codemirror.net) for the powerful editor.

---
