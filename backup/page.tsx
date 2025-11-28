import fs from "fs";
import path from "path";
import Link from "next/link";

const postsDirectory = path.join(process.cwd(), "posts");

export default function BlogList() {
  const markdownFiles = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"));

  // 生成文章列表数据
  const posts = markdownFiles.map((file) => {
    const slug = file.replace(".md", "");
    const content = fs.readFileSync(path.join(postsDirectory, file), "utf-8");
    const firstLine = content.split("\n")[0]; // 取第一行作为标题或摘要
    return { slug, title: firstLine };
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-black dark:to-gray-900 px-6 pt-20">
      <section className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          My Blog
        </h1>

        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="p-6 bg-white/80 dark:bg-black/40 rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {post.title}
              </h2>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                /blog/{post.slug}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}