import styles from './Form.module.css';
function Form({ time }) {
  return (
    <form action="/" className={styles.modalForm}>
      <label htmlFor="username">Username: </label>
      <input type="username" name="username" id="username" />
      <button>Submit</button>
    </form>
  );
}
export default Form;
