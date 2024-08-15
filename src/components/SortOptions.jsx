import  { useState } from 'react';

const SortOptions = ({ setSort }) => {
    const [sortField, setSortField] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    const handleSort = () => {
        setSort({ sortField, sortOrder });
    };

    return (
        <div className="sort-options">
            <div>
                <label>Sort By:</label>
                <select value={sortField} onChange={(e) => setSortField(e.target.value)}>
                    <option value="">Select</option>
                    <option value="price">Price</option>
                    <option value="createdAt">Date Added</option>
                </select>
            </div>
            <div>
                <label>Order:</label>
                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                    <option value="">Select</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
            <button onClick={handleSort}>Sort</button>
        </div>
    );
};

export default SortOptions;
