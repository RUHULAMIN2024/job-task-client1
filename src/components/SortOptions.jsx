import PropTypes from 'prop-types';

import  { useState } from 'react';

const SortOptions = ({ setSort }) => {
    const [sortField, setSortField] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    const handleSort = () => {
        setSort({ sortField, sortOrder });
    };

    return (
        <div className="flex border shadow-lg  my-5 justify-center gap-5 items-end p-5">
            <div>
                <label>Sort By:</label>
                <select className='input-md	input-secondary w-full max-w-xs mr-5' value={sortField} onChange={(e) => setSortField(e.target.value)}>
                    <option value="">Select</option>
                    <option value="price">Price</option>
                    <option value="createdAt">Date Added</option>
                </select>
            </div>
            <div>
                <label>Order:</label>
                <select className='input-md	input-secondary w-full max-w-xs mr-5' value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                    <option value="">Select</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
            <button className='btn-md btn-secondary btn' onClick={handleSort}>Sort</button>
        </div>
    );
};


SortOptions.propTypes = {
    setSort: PropTypes.func.isRequired,
};
export default SortOptions;
