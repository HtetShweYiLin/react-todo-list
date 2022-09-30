import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/RootState';
import { counterSlice } from '../state/counterSlice';
import { ReactComponent as ArrowDown } from '../../../assets/icons/arrow-down.svg';
import '../styles/counter.css';

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

  const increase = () => dispatch(counterSlice.actions.increase());
  const decrease = () => dispatch(counterSlice.actions.decrease());

  return (
    <div className="counter">
      <div onClick={increase}>
        +
      </div>
      <div className='count'>
        {count}
      </div>
      <div onClick={decrease}>
        -
      </div>
    </div>
  );
};