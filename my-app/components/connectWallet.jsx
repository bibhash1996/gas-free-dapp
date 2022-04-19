import React from 'react'

import MetamaskButton from './metamaskButton';
import { Grid } from '@mui/material';
import WalletAddress from './walletAddress';

function ConnectWallet() {
  return (
  <Grid container alignItems={'center'} justifyContent={"space-between"}>
          <Grid item>
            <MetamaskButton />
          </Grid>
             <Grid item>
           <WalletAddress/>
          </Grid>
        </Grid>
  )
}

export default ConnectWallet