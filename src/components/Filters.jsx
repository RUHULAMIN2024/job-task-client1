import { useState } from 'react';
import PropTypes from 'prop-types';

const Filters = ({ setFilter }) => {
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const handleFilter = () => {
        const filter = {};
        if (category) filter.category = category;
        if (brand) filter.brand = brand;
        if (minPrice) filter.minPrice = minPrice;
        if (maxPrice) filter.maxPrice = maxPrice;
        setFilter(filter);

    };

    return (
        <div className="grid bg-base-200 grid-cols-2 md:grid-cols-5 border shadow-lg justify-center gap-5 items-end p-3">
            <div>
                <label>Category:</label>
                <input
                className='input	input-secondary w-full max-w-xs mr-5'
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
            </div>
            <div>
                <label>Brand:</label>
                <input
                className='input	input-secondary w-full max-w-xs mr-5'
                    type="text"
                    placeholder="Brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                />
            </div>
            <div>
                <label>Min Price:</label>
                <input
                className='input	input-secondary w-full max-w-xs mr-5'
                    type="number"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
            </div>
            <div>
                <label>Max Price:</label>
                <input
                className='input	input-secondary w-full max-w-xs mr-5'
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
            </div>
            <button className='btn btn-md bg-secondary' onClick={handleFilter}>Apply Filters</button>
        </div>
    );
};

Filters.propTypes = {
    setFilter: PropTypes.func.isRequired,
};

export default Filters;
