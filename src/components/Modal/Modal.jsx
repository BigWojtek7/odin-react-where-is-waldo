import { useRef, useEffect } from 'react';
import styles from './Modal.module.css';
import Form from './Form';
function Modal({ time }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    dialogRef.current.showModal();
  }, []);

  return (
    <dialog ref={dialogRef} className={styles.modal}>
      <h1>You won!</h1>
      <p>Your time: {time} </p>
      <Form time={time} />
    </dialog>
  );
}
export default Modal;
