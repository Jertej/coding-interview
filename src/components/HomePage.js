import * as React from 'react';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import {decrement, increment} from '../redux/counterSlice';


export default function HomePage() {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <Box
        >
            <h1>Testing component</h1>

            <div>
                <button
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <span>{count}</span>
                <button
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
            </div>
        </Box>
    );
}
