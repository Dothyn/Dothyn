//动态路由文章详细页
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  params: { slug: string };
}

export default function BlogPost({ params }: Props) {
  const { slug } = params;
  const postPath = path.join(process.cwd(), "posts", `${slug}.md`);
  const content = fs.readFileSync(postPath, "utf-8");

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-black dark:to-gray-900 px-6 pt-20">
      <section className="max-w-3xl mx-auto p-6 bg-white/80 dark:bg-black/40 rounded-xl shadow-lg prose dark:prose-invert">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </section>
    </main>
  );
}