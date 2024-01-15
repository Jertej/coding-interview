import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { checkBracketsBalance } from '../utils';
import {Link} from 'react-router-dom';

export default function BracketsPage() {
    let [balanceResult, checkBalance] = useState('');
    let [bracketsText, changeBrackets] = useState('');

    const handleCheckBalance = (e) => {
        e.preventDefault();
        checkBalance(balanceResult = checkBracketsBalance(String(bracketsText)));
    }

    return (
        <Box>
            <h1>Brackets Task</h1>
            <form>
                <span>{balanceResult ? 'Brackets are balanced' : 'Balance problem'}</span>
                <div>
                    <br/>
                    <input type="text" onChange={(e) => changeBrackets(bracketsText = e.target.value)}/>
                    <button onClick={(e) => handleCheckBalance(e)}>
                        Check Brackets Balance
                    </button>
                </div>
            </form>
            <br/>
            <Link to="/">Go to the Christmas Tree task</Link>
        </Box>
    );
}
