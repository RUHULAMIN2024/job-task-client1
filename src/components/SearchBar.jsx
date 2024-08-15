import { useState } from 'react';
import PropTypes from 'prop-types';


const SearchBar = ({ setSearch }) => {
    const [keyword, setKeyword] = useState('');

    const handleSearch = () => {
        setSearch(keyword);
    };

    return (
        <div className="flex justify-center items-center p-5 text-blue-600">
            <input
            className='input-md	input-secondary w-full max-w-xs mr-5'
                type="text"
                placeholder="Search products..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button className='btn-md btn-secondary btn' onClick={handleSearch}>Search</button>
        </div>
    );
};


export default SearchBar;

SearchBar.propTypes = {
    setSearch: PropTypes.func.isRequired,
};