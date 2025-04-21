import React from 'react'
import { useRouter } from 'next/router';
import styles from '../../styles/Blogpost.module.css'
const slug  = () => {
    const router = useRouter();
    const {slug} = router.query;
  return (
    <div className={styles.container}>
      <main className=' flex flex-col gap-8 row-start-2 items-center pb-40 pt-10 justify-items-center'>
        <h1>
          Title of the Page{slug}
        </h1>
        <hr/>
        <div className={styles.content}>
          <p> Learn modern JavaScript (ES2015+) from scratch, and practice in an intuitive environment. The challenges are inspired by real-world projects to make sure that you're learning the best practices, one step at a time. Try the first 77 lessons, challenges, projects (first 7 chapters) & flashcards for free. You can upgrade to a Pro account with a one-time payment that gives you access for 5 years.</p>
       </div>
      </main>
    </div>
  )
}

export default slug;
