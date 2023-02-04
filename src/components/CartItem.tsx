import { css } from '@emotion/react';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { removeItem, increase, decrease } from '../features/cart/Cartslice';
import { MinusIcon, PlusIcon } from '../HeroIcons';
import { cartItem } from '../types/type';

export const CartItem: FC<cartItem> = (props) => {
  const { id, title, img, price, amount } = props;
  const dispatch = useAppDispatch();
  return (
    <article css={styles.cartItem}>
      <img src={img} alt='' />
      <div>
        <h4>{title}</h4>
        <h4 css={styles.itemPrice}>{price}円</h4>
        <button
          css={styles.buttonRemove}
          onClick={() => dispatch(removeItem(id))}
        >
          削除
        </button>
      </div>
      <div>
        <button
          css={styles.buttonAmount}
          onClick={() => dispatch(increase(id))}
        >
          <PlusIcon />
        </button>
        <p css={styles.amount}>{amount}</p>
        <button
          css={styles.buttonAmount}
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease(id));
          }}
        >
          <MinusIcon />
        </button>
      </div>
    </article>
  );
};

const styles = {
  cartItem: css`
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    grid-column-gap: 1.6rem;
    margin: 1.5rem 0;
    img {
      width: 12rem;
      height: 7rem;
      object-fit: cover;
    }
    h4 {
      margin-bottom: 0.5rem;
      font-weight: 500;
      letter-spacing: 1.2px;
    }
  `,
  itemPrice: css`
    color: var(--color-grey-5);
  `,
  buttonRemove: css`
    color: var(--color-primary);
    letter-spacing: var(--spacing);
    cursor: pointer;
    font-size: 0.85rem;
    background: transparent;
    border: none;
    margin-top: 0.375rem;
    transition: var(--transition);
    &:hover {
      color: var(--color-primary-light);
    }
  `,
  buttonAmount: css`
    width: 24px;
    background: transparent;
    border: none;
    cursor: pointer;
    svg {
      color: var(--color-primary);
    }
    &:hover svg {
      color: var(--color-grey-5);
    }
  `,
  amount: css`
    text-align: center;
    margin-bottom: 0;
    font-size: 1.25rem;
    line-height: 1;
    margin-bottom: 6px;
  `,
};
