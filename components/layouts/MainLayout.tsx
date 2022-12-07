import { FC } from "react"
import Head from 'next/head'
import styles from './MainLayout.module.css'
import { Navbar } from '../Navbar'


interface Props {
  children: React.ReactNode;
}

export const MainLayout: FC<Props>  = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Diegotronics</title>
        <meta name="Diegotronics" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar/>

      <main className={styles.main}>
        
        { children }
      
      </main>
    </div>
  )
}
