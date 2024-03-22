function Search(props) {
  const handleSearchChange = (event) => {
    const value = event.target.value;
    props.setSearch(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={props.search}
          type="search"
          name="search"
          placeholder="What emoji are you looking for ?"
          onChange={handleSearchChange}
        />
      </form>
    </>
  );
}

export default Search;
