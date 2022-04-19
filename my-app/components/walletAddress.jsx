import { useWeb3React } from '@web3-react/core'
import React from 'react'

export default function WalletAddress() {
    const {account } = useWeb3React();
  return (
      <div>{account}</div>
  )
}
