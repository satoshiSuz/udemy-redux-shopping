import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { CartContainer } from './components/CartContainer';
import { Navbar } from './components/Navbar';
import { calculateTotals } from './features/cart/Cartslice';

function App() {
  const { cartItems } = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
