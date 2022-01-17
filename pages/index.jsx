import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from './main'

// Heart of the Nextjs.
export default function Home() {
  return (
    <div className={styles.container}>
      <Main/>
    </div>
  )
}
