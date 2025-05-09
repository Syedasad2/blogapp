import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen bg-gray-50">
      <style jsx>{`
        h2 {
          font-size: 36px;
          font-family: 'Helvetica Neue', sans-serif;
          font-weight: bold;
        }
        h3 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 8px;
        }
        p {
          font-size: 16px;
          color: #555;
        }
      `}</style>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start pb-40 pt-10">
        <div className={styles.imagewrap}>
          <img
            src="/home.jpeg"
            alt="homeimage"
            className="rounded-xl shadow-lg"
            width={300}
            height={200}
          />
        </div>

        <h1 className="font-bold text-5xl text-gray-800 text-center">Hunting Coders</h1>
        <p className="font-mono text-lg text-center text-gray-600">A clean and modern blog app for developers.</p>

        <div className="font-mono w-full max-w-2xl mt-8">
          <h2 className="text-gray-800 mb-6">🔥 Popular Blogs:</h2>

          {/* Blog Cards */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
              <h3 className="text-gray-900">How to Learn JavaScript</h3>
              <p className="text-gray-600 mt-2">JavaScript is a language used to design logic for the web.</p>
              <Link href="/blog">
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Read more</button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
              <h3 className="text-gray-900">Mastering React.js</h3>
              <p className="text-gray-600 mt-2">React is a powerful library for building modern web apps.</p>
              <Link href="/blog">
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Read more</button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
              <h3 className="text-gray-900">Backend with Node.js</h3>
              <p className="text-gray-600 mt-2">Node allows you to write server-side code using JavaScript.</p>
              <Link href="/blog">
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Read more</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
