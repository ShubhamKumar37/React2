import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, multiplyByTwo } from './redux/counter/counterSlice';

function App() {

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <>
    <div>
      The value of Count is {count}
      <div>
        <button onClick={() => dispatch(decrement())} className='scale-125 mr-[2rem]'>-</button>
        <button onClick={() => dispatch(increment())} className='scale-125 mr-[2rem]'>+</button>
        <button onClick={() => dispatch(multiplyByTwo())} className='scale-125 mr-[2rem]'>*</button>
      </div>
    </div>
    </>
  );
}

export default App;
