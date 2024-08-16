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
        <div className="grid bg-base-100 grid-cols-2 md:grid-cols-5 border shadow-lg justify-center gap-5 items-end p-3">
            <div>
                <label>Category:</label>
                <select className=' select	border-pink-500 w-full max-w-xs mr-5' value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select</option>
                    <option value="electronics"> electronics</option>
                    <option value="computers"> computers</option>
                    <option value="footwear"> footwear</option>
                    <option value="gaming"> gaming</option>
                </select>
            </div>
            <div>
                <label>Brand:</label>
                <select className=' select	border-pink-500 w-full max-w-xs mr-5' value={brand} onChange={(e) => setBrand(e.target.value)}>
                    <option value="">Select</option>
                    <option value="Apple"> Apple</option>
                    <option value="Sony"> Sony </option>
                    <option value="Canon"> Canon </option>
                    <option value="HP"> HP </option>
                    <option value="Asus"> Asus </option>
                    <option value="Dell"> Dell</option>
                    <option value="Samsung"> Samsung</option>
                    <option value="Nike"> Nike</option>
                </select>
            </div>
            <div>
                <label>Min Price:</label>
                <input
                className='input	border-pink-500 w-full max-w-xs mr-5'
                    type="number"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
            </div>
            <div>
                <label>Max Price:</label>
                <input
                className='input	border-pink-500 w-full max-w-xs mr-5'
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
            </div>
            <button className='btn btn-md bg-pink-500' onClick={handleFilter}>Apply Filters</button>
        </div>
    );
};

Filters.propTypes = {
    setFilter: PropTypes.func.isRequired,
};

export default Filters;
