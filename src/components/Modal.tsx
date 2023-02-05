import { css } from '@emotion/react';
import { useAppDispatch } from '../app/hooks';
import { clearCart } from '../features/cart/Cartslice';
import { closeModal } from '../features/modal/ModalSlice';

export const Modal = () => {
  const dispatch = useAppDispatch();
  return (
    <aside css={styles.modalContainer}>
      <div css={styles.modal}>
        <h4>買い物かごを全て空にしますか？</h4>
        <div css={styles.buttonContainer}>
          <button
            className='btn'
            css={styles.buttonConfirm}
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            OK
          </button>
          <button
            className='btn'
            css={styles.buttonClear}
            onClick={() => dispatch(closeModal())}
          >
            やめとく
          </button>
        </div>
      </div>
    </aside>
  );
};

const styles = {
  modalContainer: css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  modal: css`
    background: var(--color-white);
    width: 80vw;
    max-width: 400px;
    border-radius: var(--radius);
    padding: 2rem 1rem;
    text-align: center;
    h4 {
      margin-bottom: 0;
      line-height: 1.5;
    }
  `,
  buttonContainer: css`
    display: flex;
    justify-content: space-around;
  `,
  buttonConfirm: css`
    margin-top: 1rem;
    background: transparent;
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-primary);
    border-radius: var(--radius);
    color: var(--color-primary);
  `,
  buttonClear: css`
    margin-top: 1rem;
    background: transparent;
    padding: 0.5rem 1rem;
    color: var(--color-red-dark);
    border: 1px solid var(--color-red-dark);
    border-radius: var(--radius);
    &:hover {
      background: var(--color-red-light);
      border-color: var(--color-red-light);
    }
  `,
};
