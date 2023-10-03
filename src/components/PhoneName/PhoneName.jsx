import css from './PhoneName.module.css';

export const PhoneName = ({ name, number, onSubmit, onChange }) => {
  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={onSubmit} className={css.form}>
        <label>
          <span className={css.title}>Name</span>
          <input
            className={css.input}
            onChange={onChange}
            value={name}
            name="name"
            type="text"
            required
            placeholder="Enter name"
          />
          <span className={css.title}>Number</span>
          <input
            className={css.input}
            onChange={onChange}
            value={number}
            type="tel"
            name="number"
            required
            placeholder="Number"
            minLength="12"
            maxLength="12"
          />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
