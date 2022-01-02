import PropTypes from 'prop-types';

function Contact({ name, number }) {
  return (
    <div>
      <p>
        {name}
        <span>: {number}</span>
      </p>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
