import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ConnectWallet from '../components/connectWallet';
import ContractGrid from '../components/contractGrid';
import { useWeb3React } from '@web3-react/core';

export default function Home() {
  const {active} = useWeb3React()
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to gasfree dApp
        </h1>
        <ConnectWallet />
      {active &&   <ContractGrid />}
      </main>

    </div>
  )
}