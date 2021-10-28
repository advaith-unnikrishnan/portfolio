import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Advaith | Home</title>
        <meta name="description" content="Personal portfolio of advaith" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.title}>
          Check out my blog <a href="https://blog.advaith.tech">here</a>
        </p>

      </main>
    </div>
  )
}
