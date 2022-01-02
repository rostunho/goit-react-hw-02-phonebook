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

export default Filter;
