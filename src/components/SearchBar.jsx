const SearchBar = ({ onSearch }) => {
    const handleChange = (e) => {
      onSearch(e.target.value);
    };
  
    return (
      <input type="text" placeholder="Search your Recent Transaction" onChange={handleChange} />
    );
  };
  export default SearchBar