import Contact from 'components/Contact/Contact';

function ContactList({ filteredContacts }) {
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact name={name} number={number} />
          {/* {name}: {number} */}
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
