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
        <div className="filters">
            <div>
                <label>Category:</label>
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
            </div>
            <div>
                <label>Brand:</label>
                <input
                    type="text"
                    placeholder="Brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                />
            </div>
            <div>
                <label>Min Price:</label>
                <input
                    type="number"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
            </div>
            <div>
                <label>Max Price:</label>
                <input
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
            </div>
            <button onClick={handleFilter}>Apply Filters</button>
        </div>
    );
};

Filters.propTypes = {
    setFilter: PropTypes.func.isRequired,
};

export default Filters;
