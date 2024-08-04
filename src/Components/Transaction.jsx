
import { ListItemText, ListItem, styled, ListItemIcon } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const List = styled(ListItem)`
    display: flex;
    marginTop: 10px;
    border: 1px solid #F6F6F6;
`;

const Transaction = ({transaction, deleteTransaction}) => {
    let color = ''
    if(transaction.transactiontype === 'Credit') {
        color = 'Green';
    }
    else if(transaction.transactiontype === 'Debit') {
        color = 'Red';
    }
     

    return (
        <List style={{background: `${color}`, color: '#fff'}}>
            <ListItemIcon>
                <DeleteIcon onClick={() => deleteTransaction(transaction.id)} />
            </ListItemIcon>
            <ListItemText primary={transaction.date} />
            <ListItemText primary={transaction.text.toUpperCase()} />
            <ListItemText primary={transaction.amount} />
        </List>
    )
}

export default Transaction;