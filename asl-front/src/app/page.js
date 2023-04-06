
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import '../app/globals.css'
import '98.css'
import Loading from './loading'
import { Suspense } from 'react'


export default function Home() {
  return (
    <main className={styles.main}>
      <Suspense fallback={<Loading />}>
        This is loaded now.
      </Suspense>
    </main>
  )
}
