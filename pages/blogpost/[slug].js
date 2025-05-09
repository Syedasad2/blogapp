import React, { useEffect, useState } from "react";
import styles from "../../styles/Blogpost.module.css";
import * as fs from 'fs';

const Slug = (props) => {
  function createMarkup(c) {
    return { __html: c };
  }

  const [blog, setBlog] = useState(props.myBlog);

  return (
    <div className={`${styles.container} bg-gray-50 py-16`}>
      <main className="max-w-4xl mx-auto px-6 sm:px-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">{blog && blog.title}</h1>
        <hr className="border-t-2 border-gray-300 mb-8" />
        
        {blog && <div className="text-gray-700 leading-relaxed text-lg" dangerouslySetInnerHTML={createMarkup(blog.content)} />}
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'how-to-learn-flask' } },
      { params: { slug: 'how-to-learn-javascript' } },
      { params: { slug: 'how-to-learn-nextjs' } }
    ],
    fallback: true
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8');
  return {
    props: { myBlog: JSON.parse(myBlog) },
  };
}

export default Slug;
