export const Contacts = ({ contacts }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <form>
        <input type="text" />
      </form>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        ))}
      </ul>
    </div>
  );
};
