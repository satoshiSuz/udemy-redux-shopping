import { css } from '@emotion/react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { CartItem } from './CartItem';
import { openModal } from '../features/modal/ModalSlice';

export const CartContainer = () => {
  const { amount, cartItems, total } = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();
  if (amount < 1) {
    return (
      <section css={styles.cart}>
        <header>
          <h2>買い物かご</h2>
          <h4 css={styles.cartEmpty}>何も入っていません・・・😿</h4>
        </header>
      </section>
    );
  }
  return (
    <section css={styles.cart}>
      <header>
        <h2>買い物かご</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div css={styles.cartTotal}>
          <h4>
            合計<span>{total}円</span>
          </h4>
        </div>
        <button
          className='btn'
          css={styles.buttonClear}
          onClick={() => dispatch(openModal())}
        >
          全削除
        </button>
      </footer>
    </section>
  );
};

const styles = {
  cart: css`
    min-height: calc(100vh - 120px);
    width: 90vw;
    margin: 0 auto;
    margin-top: 40px;
    padding: 1.5rem 0;
    max-width: var(--fixed-width);
    h2 {
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 3rem;
    }
    footer {
      margin-top: 4rem;
      text-align: center;
    }
    hr {
      background: var(--color-primary);
      border-color: transparent;
      border-width: 0.25px;
    }
  `,
  cartEmpty: css`
    text-transform: lowercase;
    color: var(--color-grey-5);
    margin-top: 1rem;
    text-align: center;
  `,
  cartTotal: css`
    h4 {
      text-transform: capitalize;
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
    }
  `,
  buttonClear: css`
    background: transparent;
    padding: 0.5rem 1rem;
    color: var(--color-red-dark);
    border: 1px solid var(--color-red-dark);
    margin-top: 2.25rem;
    border-radius: var(--radius);
    &:hover {
      background: var(--color-red-light);
      color: var(--color-red-dark);
      border-color: var(--color-red-light);
    }
  `,
  buttonConfirm: css`
    background: transparent;
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-primary);
    margin-top: 2.25rem;
    border-radius: var(--radius);
    color: var(--color-primary);
  `,
};
