import Contact from 'components/Contact/Contact';
import PropTypes from 'prop-types';

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

ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
};

export default ContactList;
