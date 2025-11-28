import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-black dark:to-gray-900 px-6 relative">

      {/* === 中心区域：LOGO 精准居中，文字上下包围 === */}
      <section className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center text-center">

          {/* LOGO 上方文字 */}
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white -mt-1">
              Dothyn — Creat What You Want!
            </h2>
          </div>

          {/* LOGO 正中 */}
          <div className="flex items-center justify-center">
            <Image
              src="/LOGO.png"
              width={200}
              height={200}
              alt="Centered LOGO"
              className="rounded-full ring-8 ring-white/10 shadow-2xl transform transition-transform duration-300 hover:scale-[1.03]"
              priority
            />
          </div>

          {/* LOGO 下方文字 */}
          <div className="mt-4">
            <p className="text-2xl font-semibold text-gray-900 dark:text-white -mt-1">
              D,1,2,3 — Everything.
            </p>

            <div className="mt-4 flex justify-center">
              <a
                href="https://github.com/Dothyn"
                className="text-sm font-medium px-5 py-2 rounded-full bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition shadow"
              >
                Visit My GitHub →
              </a>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}