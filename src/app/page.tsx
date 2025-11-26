export default function Home() {
  {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-black dark:to-gray-900 flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl" />
        </div>
        
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Hello,my name is Jack.
        </h1>
        
        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
          a person study code for beggin<br/>
          这是我亲手搭建的第一个网站<br/>
          未来我要用代码改变世界
        </p>

        <div className="flex justify-center gap-8 text-lg">
          <a href="https://github.com/你的GitHub名" className="hover:text-blue-600 transition">GitHub</a>
          <a href="mailto:你的邮箱@gmail.com" className="hover:text-blue-600 transition">Email</a>
          <a href="https://twitter.com/xxx" className="hover:text-blue-600 transition">Twitter</a>
        </div>

        <p className="mt-16 text-sm text-gray-500">
          © 2025 {new Date().getFullYear()} [你的名字]. Built with Next.js
        </p>
      </div>
    </main>
  );
}}