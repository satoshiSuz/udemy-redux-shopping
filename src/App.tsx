import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { CartContainer } from './components/CartContainer';
import { Modal } from './components/Modal';
import { Navbar } from './components/Navbar';
import { calculateTotals } from './features/cart/Cartslice';

function App() {
  const { cartItems } = useAppSelector((store) => store.cart);
  const { isOpen } = useAppSelector((store) => store.modal);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
