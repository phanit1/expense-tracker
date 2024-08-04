import { useState } from 'react';
import { Typography, Box, TextField, Button, Select, styled, MenuItem, InputLabel } from '@mui/material';

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    & > h5, & > div, & > button {
        margin-top: 0px, 
    }
`;

const StyledButton = styled(Button)`
    background: #445A6F;
    color: #fff;
`;

const NewTransaction = ({ addTransaction }) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();
    const [date, setDate] = useState('');
    const [transactiontype, setTransactionType] = useState('');

    const newTransaction = e => {
        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            date: date,
            transactiontype: transactiontype,
            amount: amount
        }
        if(transaction.transactiontype === 'Credit') {
            transaction.amount = +amount;
        }
        else if(transaction.transactiontype === 'Debit') {
            transaction.amount = -amount;
        }
        addTransaction(transaction);
        setText('');
        setAmount();
        setTransactionType('');
        setDate('');
    }

    return (
        <Container>
            <Typography variant="h5">New Transaction</Typography>
            <TextField value={text} label="Enter Expense" onChange={(e) => setText(e.target.value)} /><br />
            <TextField type="date" value={date} onChange={(e) => setDate(e.target.value)} /><br />
            <TextField type="number" value={amount} label="Enter Amount" onChange={(e) => setAmount(e.target.value)} /><br />
            <InputLabel id="demo-simple-select-label">TransactionType</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={transactiontype}
                label="Enter Type of Transaction"
                onChange={(e) => setTransactionType(e.target.value)}
            >
                <MenuItem value={"Credit"}>Credit</MenuItem>
                <MenuItem value={"Debit"}>Debit</MenuItem>
            </Select><br />
            <StyledButton variant="contained" onClick={newTransaction}>Add Transaction</StyledButton>
        </Container>
    )
}

export default NewTransaction;