import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Ordering App</title>
        <meta name="description" content="Order fresh pizza directly to your place" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Homepage
    </div>
  )
}
