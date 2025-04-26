import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen`}
    >
      <style jsx>
        {`
          h2 {
            font-size: 40px;
            font-family:sans;
            font-weigth:bold;
          }
            h3{
            font-size: 28px;
            font-weigth:bold}
            p{
            font-size:15px
            }
        `}
      </style>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start pb-40 pt-10">
        <h1 className={"font-bold"}>Hunting Coders</h1>
        <div className={styles.imagewrap}>
          <img src="/home.jpeg"  alt="homeimage"   className={styles.myImg}  width={275} height={183}/>
        </div>

        <p className={"font-mono"}>blog app for coders</p>
        <div className="font-mono">
          <h2>Popular Blogs:</h2>
          <div className="blog-item">
            <h3>how to learn JS</h3>
            <p>JS is language use to design logic for web</p>
          </div>
          <div className="blog-item">
            <h3>how to learn JS</h3>
            <p>JS is language use to design logic for web</p>
          </div>
          <div className="blog-item">
            <h3>how to learn JS</h3>
            <p>JS is language use to design logic for web</p>
          </div>
        </div>
      </main>
    </div>
  );
}
