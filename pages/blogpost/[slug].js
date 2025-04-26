import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blogpost.module.css";
import * as fs from 'fs';
const Slug = (props) => {
  function createMarkup(c) {
    return {__html: c};
  }
  const [blog, setBlog] = useState(props.myBlog);
  // const router = useRouter();
  //   useEffect(() => {
  //     if (!router.isReady) return;

  //     const {slug} = router.query;
  //      fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //        .then((a) => {
  //          return a.json();
  //        })
  //        .then((parsed) => {
  //          setBlog(parsed);
  //        });
  //    }, [router.isReady])

  return (
    <div className={styles.container}>
      <main className=" flex flex-col gap-8 row-start-2 items-center pb-40 pt-10 justify-items-center">
        <h1>{blog && blog.title}</h1>
        <hr />{
          blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
        }
        {/* <div className={styles.content}>
          <p>{blog && blog.content}</p>
        </div> */}
      </main>
    </div>
  );
};
export async function getStaticPaths() {
  return{
    paths:[
      {params:{slug:'how-to-learn-flask'}},
      {params:{slug:'how-to-learn-javascript'}},
      {params:{slug:'how-to-learn-nextjs'}}
    ],
    fallback: true
  };
}
export async function getStaticProps(context) {
  const { slug } = context.params; 

    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8')
    return {
    props: { myBlog:JSON.parse(myBlog) },
    }
}

export default Slug;
