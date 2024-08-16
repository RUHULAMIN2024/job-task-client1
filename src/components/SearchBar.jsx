import { useState } from 'react';
import PropTypes from 'prop-types';


const SearchBar = ({ setSearch }) => {
    const [keyword, setKeyword] = useState('');

    const handleSearch = () => {
        setSearch(keyword);
    };

    return (
        <div className="flex bg-base-200 justify-center items-center p-3 shadow-lg  border my-5 text-blue-600">
            <input
            className='input	input-secondary w-full max-w-xs mr-5'
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