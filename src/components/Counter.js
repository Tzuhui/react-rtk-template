import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../slice/counterSlice';
import Button from '@mui/material/Button';

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <Button variant="contained" onClick={() => dispatch(increment())}>Increment</Button>
        <span>{count}</span>
        <Button variant="contained" onClick={() => dispatch(decrement())}>Decrement</Button>
      </div>
    </div>
  )
}

export default Counter;