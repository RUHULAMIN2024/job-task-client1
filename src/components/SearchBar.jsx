import { useState } from 'react';

const SearchBar = ({ setSearch }) => {
    const [keyword, setKeyword] = useState('');

    const handleSearch = () => {
        setSearch(keyword);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search products..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
