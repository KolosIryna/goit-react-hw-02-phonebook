export const PhoneName = ({ name, onSubmit, onChange }) => {
  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={onSubmit}>
        <label>
          <span>Name</span>
          <input
            onChange={onChange}
            value={name}
            name="name"
            type="text"
            required
            placeholder="Enter name"
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
      <h2>Contacts</h2>
    </div>
  );
};
