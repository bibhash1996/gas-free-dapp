import React, { useEffect, useState } from 'react'
import { ethers,BigNumber}  from 'ethers'
import MetamaskButton from './metamaskButton';
import { Grid, TextField } from '@mui/material';
import WalletAddress from './walletAddress';
import abi from '../abi/Box.json'
import { useWeb3React } from '@web3-react/core';
import Store from './store';

function ContractGrid() {
    const [val, setVal] = useState(0)
    const { accounts,library } = useWeb3React();

    useEffect(() => {
        (async () => { 
        const contract = new ethers.Contract('0x55b44F845BED28f34196d24F58aC095e5A933355',abi,library)
        const smartContractValue = await contract.retrieve();
            setVal(BigNumber.from(smartContractValue).toNumber());
        })();
    },[])

  return (
   <Grid container alignItems={'center'} justifyContent={"space-between"}>
          <Grid item>
              <TextField placeholder={val.toString()}
                  value={val}
                  onChange={(e) => {
                      setVal(e.target.value)
                  }}
              />
          </Grid>
             <Grid item>
              <Store val={val}/>
          </Grid>
        </Grid>
  )
}

export default ContractGrid