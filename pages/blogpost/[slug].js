import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import styles from '../../styles/Blogpost.module.css'
const slug  = () => {
  const [blog, setBlog] = useState();
  const router = useRouter();
    useEffect(() => {
      if (!router.isReady) return;
      
      const {slug} = router.query;
       fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
         .then((a) => {
           return a.json();
         })
         .then((parsed) => {
           setBlog(parsed);
         });
     }, [router.isReady])
   
  return (
    <div className={styles.container}>
      <main className=' flex flex-col gap-8 row-start-2 items-center pb-40 pt-10 justify-items-center'>
        <h1>
          {blog && blog.title}
        </h1>
        <hr/>
        <div className={styles.content}>
          <p>{blog && blog.content}</p>
       </div>
      </main>
    </div>
  )
}

export default slug;
