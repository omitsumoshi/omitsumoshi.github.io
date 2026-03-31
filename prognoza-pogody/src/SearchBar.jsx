const SearchBar = (props) => {

    const handleChange = (e) => {
        const target= e.target.value;
        props.setCity(target);

    }
    return (
        <input type="text" onChange={handleChange}/>
        
    )
}

export default SearchBar