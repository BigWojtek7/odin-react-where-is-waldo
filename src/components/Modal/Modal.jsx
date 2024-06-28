import { useRef, useEffect } from 'react';
import styles from './Modal.module.css';
function Modal() {
  const dialogRef = useRef(null);

  useEffect(() => {
    dialogRef.current.showModal();
  }, []);

  return (
    <dialog ref={dialogRef} className={styles.modal}>
      <h1>You won!</h1>
      <p>Your time: </p>
      <form action="/" className={styles.modalForm}>
        <label htmlFor="username">Username: </label>
        <input type="username" name="username" id="username" />
        <button>Submit</button>
      </form>
    </dialog>
  );
}
export default Modal;
