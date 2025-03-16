'use client'

const { FormControl, InputLabel, MenuItem, Select, TextField, Fab, Chip, Stack } = require("@mui/material");
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import RemoveIcon from '@mui/icons-material/Remove';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';

const { useState } = require("react")

const currencies = ["SGD", "USD", "GBP", "EUR"];

const getAmountWeConvert = (sourceAmount, ourFee) => {
  return parseFloat(sourceAmount) - parseFloat(ourFee)
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: 'none'
}));
// this has to be a seperate component without states so that input box does not lose focus
const FormComponent = ({ states, handles }) => (
  <>
    <Stack sx={{ m: 2 }} spacing={5} direction="row">
      <Item>
        <TextField
          id="inputAmount"
          label="You send"
          variant="outlined"
          value={states.sourceAmount}
          onChange={handles.handleSetSourceAmount}
          type="number" /></Item>
      <Item>
        <FormControl>
          <InputLabel id="select-currency-label">Currency:</InputLabel>
          <Select
            labelId="select-currency-label"
            id="select"
            value={states.sourceCurrency}
            onChange={handles.handleSetSourceCurrency}
            label="Select an Option"
          >
            {currencies.map((c, index) => (
              <MenuItem key={index} value={c}>{c}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Item>
    </Stack><Stack sx={{ m: 2 }} spacing={5} direction="row">
      <Fab size="small" color="primary" aria-label="remove">
        <RemoveIcon></RemoveIcon>
      </Fab>
      <Item>
        {states.fee.toFixed(2) + " " + states.sourceCurrency}
      </Item>
      <Chip label="Transfer Fees" color="primary" />
    </Stack><Stack sx={{ m: 2 }} spacing={5} direction="row">
      <Fab size="small" color="primary" aria-label="remove">
        <DragHandleIcon></DragHandleIcon>
      </Fab>
      <Item>
        {getAmountWeConvert(states.sourceAmount, states.fee) + " " + states.sourceCurrency}
      </Item>
      <Chip label="Amount we'll convert" color="primary" />
    </Stack><Stack sx={{ m: 2 }} spacing={5} direction="row">
      <Fab size="small" color="primary" aria-label="remove">
        <CloseIcon></CloseIcon>
      </Fab>
      <Item>
        {states.rate}
      </Item>
      <Chip label="Rate" color="primary" />
    </Stack><Stack sx={{ m: 2 }} spacing={5} direction="row">
      <Item>
        <TextField
          disabled
          variant="outlined"
          label="Recipient gets"
          value={states.targetAmount}
          type="number" />
      </Item>
      <Item>
        <FormControl>
          <InputLabel id="select-currency-label">Select a currency:</InputLabel>
          <Select
            labelId="select-currency-label"
            id="select"
            value={states.targetCurrency}
            onChange={handles.handleSetTargetCurrency}
            label="Select an Option"
            defaultValue={currencies[0]}
          >
            {currencies.map((c, index) => (
              <MenuItem key={index} value={c}>{c}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Item>
    </Stack>
  </>
)
function Calculator() {
  const [sourceAmount, setSourceAmount] = useState(0);
  const [targetAmount, setTargetAmount] = useState(0);
  const [sourceCurrency, setSourceCurrency] = useState(currencies[0]);
  const [targetCurrency, setTargetCurrency] = useState(currencies[1]);
  const [rate, setRate] = useState(-1);
  const [fee, setFee] = useState(-1);

  const handleSetSourceAmount = async (event) => {
    setSourceAmount(event.target.value);
    await callCalculatorApi(event.target.value, sourceCurrency, targetCurrency);
  };

  const handleSetSourceCurrency = async (event) => {
    setSourceCurrency(event.target.value);
    await callCalculatorApi(sourceAmount, event.target.value, targetCurrency);
  };

  const handleSetTargetCurrency = async (event) => {
    setTargetCurrency(event.target.value);
    await callCalculatorApi(sourceAmount, sourceCurrency, event.target.value);
  };

  const callCalculatorApi = async (srcAmount, srcCurrency, trgCurrency) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ sourceAmount: srcAmount, sourceCurrency: srcCurrency, targetCurrency: trgCurrency })
    };
    try {
      const res = await fetch(`/api/calculator/`, requestOptions);
      const newData = await res.json();
      setRate(newData.rate);
      setTargetAmount(newData.targetAmount);
      setFee(newData.fee)
    } catch (err) {
      console.log("Error calling API");
    }
  }

  const props = {
    "states": { sourceAmount, sourceCurrency, targetAmount, targetCurrency, rate, fee },
    "handles": { handleSetSourceAmount, handleSetSourceCurrency, handleSetTargetCurrency }
  }

  return (
    <>
      <FormComponent {...props} />
    </>
  );
};
export default Calculator;
