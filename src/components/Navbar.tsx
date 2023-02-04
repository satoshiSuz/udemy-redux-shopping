import { css } from '@emotion/react';
import { useAppSelector } from '../app/hooks';
import { CartIcon } from '../HeroIcons';

export const Navbar = () => {
  const { amount } = useAppSelector((store) => store.cart);
  return (
    <nav css={styles.nav}>
      <div css={styles.wrapper}>
        <h3>Redux Shopping</h3>
        <div css={styles.container}>
          <CartIcon />
          <div css={styles.amountContainer}>
            <p css={styles.amountTotal}>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  wrapper: css`
    max-width: var(--fixed-width);
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      margin-bottom: 0;
      letter-spacing: 1px;
      color: var(--color-white);
    }
  `,
  nav: css`
    background: var(--color-primary);
    padding: 1.25rem 2rem;
    svg {
      width: 40px;
      color: var(--color-white);
    }
  `,
  container: css`
    display: block;
    position: relative;
  `,
  amountContainer: css`
    position: absolute;
    top: -0.6rem;
    right: -0.6rem;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background: var(--color-primary-light);
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  amountTotal: css`
    color: var(--color-white);
    margin-bottom: 0;
    font-size: 1.25rem;
  `,
};
