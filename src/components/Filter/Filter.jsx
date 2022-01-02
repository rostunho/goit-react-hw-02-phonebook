import PropTypes from 'prop-types';

function Filter({ filter, handleFilter, placeholder }) {
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={handleFilter}
      placeholder={placeholder}
    />
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;
