import PropTypes from 'prop-types';

function Contact({ name, number, id, deleteContact }) {
  return (
    <div>
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
