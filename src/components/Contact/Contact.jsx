import PropTypes from 'prop-types';
import { CgProfile } from 'react-icons/cg';

function Contact({ name, number, id, deleteContact }) {
  return (
    <div>
      <CgProfile size="25px" />
      <p>
        {name}
        <span>: {number}</span>
      </p>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
