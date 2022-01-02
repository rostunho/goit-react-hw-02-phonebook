import PropTypes from 'prop-types';

function AppTitle({ title }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

AppTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AppTitle;
