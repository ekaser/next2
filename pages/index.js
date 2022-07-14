import styles from '../styles/Home.module.css'
import { toast } from 'react-hot-toast'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
    <Head>
      <title>My Page</title>
    </Head> 
    <button className='btn-green' onClick={() => toast.success("Yay Toast!")}>Click for Toast</button>
    </div>
  )
}
