import { useState } from 'react';
import PropTypes from 'prop-types';


const SearchBar = ({ setSearch }) => {
    const [keyword, setKeyword] = useState('');

    const handleSearch = () => {
        setSearch(keyword);
    };

    return (
        <div className="flex bg-base-100 justify-center items-center p-3 shadow-lg  border my-5 text-blue-600">
            <input
            className='input	border-pink-500 w-full max-w-xs mr-5'
                type="text"
                placeholder="Search products..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button className='btn-md bg-pink-500 btn' onClick={handleSearch}>Search</button>
        </div>
    );
};


export default SearchBar;

SearchBar.propTypes = {
    setSearch: PropTypes.func.isRequired,
};