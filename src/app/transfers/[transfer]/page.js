'use client'

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar'
import PaidIcon from '@mui/icons-material/Paid'
import { useParams } from 'next/navigation';

import ResponsiveAppBar from "@/components/ResponsiveAppBar";

export default function TransferPage() {

  const [transferDetailsJson, setTransferDetailsJson] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const params = useParams();
 
  React.useEffect(()=> {
  const transferDetailsResponse = async () => {
    try {
      const res = await fetch(`/api/transfers/${params.transfer}`);
      const data = await res.json();
      setTransferDetailsJson(data)
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
    transferDetailsResponse();
  }, []);
  
  const getConvertAmount = (sourceAmount, fee) => {
    return parseFloat(sourceAmount) - parseFloat(fee);
  }

  const transferDetails = () => (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5"  gutterBottom>
          You sent : {transferDetailsJson.sourceAmount} {transferDetailsJson.sourceCurrency}
        </Typography>
        <Typography variant="h5"  gutterBottom>
          {/* Task 2 TODO would be to display the fee by using the fee in the transferDetailsJson : */}
          Our Fee : {transferDetailsJson.fee} {transferDetailsJson.sourceCurrency}
        </Typography>
        <Typography variant="h5"  gutterBottom>
          Amount we'll convert : {getConvertAmount(transferDetailsJson.sourceAmount, transferDetailsJson.fee)} {transferDetailsJson.sourceCurrency}
        </Typography>
        <Typography variant="h5"  gutterBottom>
          Conversion Rate : {transferDetailsJson.conversionRate}
        </Typography>
        <Typography variant="h5"  gutterBottom>
          Funded by : {transferDetailsJson.paymentMode}
        </Typography>
      </CardContent>
    </React.Fragment>
  )
  
    return (
      loading ? <> </> : 
      <>
      <ResponsiveAppBar />
      <p></p>
      {/* <Container maxWidth={false}>
        <Chip label={`Transfer ${params.transfer}`} color="success" size="medium" ></Chip>
        <Card variant="outlined">{transferDetails()}</Card>
      </Container> */}

      <Container component="main" maxWidth="s">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <PaidIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          Transfer {params.transfer}
          </Typography>
          <br />
          <Typography variant="h4">
          {transferDetailsJson.targetAmount} {transferDetailsJson.targetCurrency}
          </Typography>
          <br />
          <Card variant="outlined">{transferDetails()}</Card>
        </Box>
      </Container>
      </>
 
    );
}