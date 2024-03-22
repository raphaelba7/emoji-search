function Search(props) {
  const handleSearchChange = (event) => {
    const value = event.target.value;
    props.setSearch(value);
  };

  return (
    <>
      <input
        value={props.search}
        type="search"
        name="search"
        placeholder="What emoji are you looking for ?"
        onChange={handleSearchChange}
      />
    </>
  );
}

export default Search;
