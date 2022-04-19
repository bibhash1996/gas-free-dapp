import React from 'react'
import Button from '@mui/material/Button';
import { useWeb3React } from '@web3-react/core';
import {InjectedConnector } from '@web3-react/injected-connector';

const injected = new InjectedConnector({ supportedChainIds: [ 80001] });

export default function MetamaskButton() {
  const {active,activate,deactivate } = useWeb3React(); 
  console.log(active)

  const handleClick = () => {
    if (active) {
      deactivate();
      return;
    }
    activate(injected);
  }
    return (
      <Button variant="contained" onClick={handleClick}>{
      active ? "Disconnect" : "Connect"
      }</Button>
    )
}
