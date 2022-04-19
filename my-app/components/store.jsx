import { Button } from '@mui/material'
import { ethers } from 'ethers'
import React from 'react'
import abi from '../abi/Box.json'
import { useWeb3React } from '@web3-react/core';

function Store({ val }) {
  const { accounts,library } = useWeb3React();
    const onClick = async() => {
      const contract = new ethers.Contract('0x55b44F845BED28f34196d24F58aC095e5A933355', abi, library)
      const signer = contract.connect(library.getSigner());
      await signer.store(val)
    }

  return (
    <Button variant="contained" onClick={onClick}>Store</Button>
  )
}

export default Store