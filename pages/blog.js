import React, { useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);

  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center pb-40 pt-10 justify-items-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Our Blogs</h1>
        {blogs.map((blogitem) => {
          return (
            <div key={blogitem.title} className={styles.blogItem}>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <h3>{blogitem.title}</h3>
              </Link>
              <p className={styles.blogItemp}>
                {blogitem.metadesc.substr(0, 150)}...
              </p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let allBlogs = [];

  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    let myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }

  return {
    props: { allBlogs },
  };
}

export default Blog;
