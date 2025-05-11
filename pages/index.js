import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen bg-gray-50">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        {/* Hero Section */}
        <div className="flex justify-center w-full">
          <div className="relative w-full max-w-md lg:max-w-2xl">
            <img
              src="/home.jpg"
              alt="homeimage"
              className={styles.heroImage}
            />
          </div>
        </div>

        {/* Heading and Subheading */}
        <h1 className={styles.heading}>
          Welcome to Hunting Coders
        </h1>
        <p className={styles.subheading}>
          Your go-to place for learning and exploring web development concepts. Stay tuned for insightful blogs, tutorials, and more.
        </p>

        {/* Introduction Text */}
        <div className={styles.introductionContainer}>
          <h2 className={styles.introductionTitle}>
            Explore the world of web development!
          </h2>
          <p className={styles.introductionText}>
            At Hunting Coders, we dive deep into modern web technologies like JavaScript, React, Node.js, and more. Whether you're a beginner or an experienced developer, you'll find content tailored to help you grow your skills.
          </p>

          <Link href="/blog">
            <button className={styles.button}>
              Explore Our Blog
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
