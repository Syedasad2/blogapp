import React, { useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(2);

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`);
    setCount(count + 2);
    let data = await d.json();
    setBlogs(data);
  };

  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center pb-40 pt-10 justify-items-center">
        <InfiniteScroll
          dataLength={blogs.length}
          next={fetchData}
          hasMore={props.allCount !== blogs.length}
          loader={<div className={styles.loader}>Loading...</div>}
          endMessage={
            <p className={styles.endMessage}>
              <b>Yay! You have seen it all</b>
            </p>
          }>
          <h1 className={styles.blogTitle}>Our Blogs</h1>
          {blogs.map((blogitem) => {
            return (
              <div key={blogitem.title} className={styles.blogItem}>
                <Link href={`/blogpost/${blogitem.slug}`}>
                  <h3>{blogitem.title}</h3>
                </Link>
                <p className={styles.blogItemp}>
                  {blogitem.metadesc.substr(0, 150)}...
                </p>
                <Link href={`/blogpost/${blogitem.slug}`}>
                  <button>Read more</button>
                </Link>
              </div>
            );
          })}
        </InfiniteScroll>
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let allCount = data.length;
  let allBlogs = [];

  for (let index = 0; index < 2; index++) {
    const item = data[index];
    let myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }

  return {
    props: { allBlogs, allCount },
  };
}

export default Blog;
