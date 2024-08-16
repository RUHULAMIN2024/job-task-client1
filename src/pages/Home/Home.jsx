import { useEffect, useState } from "react";
import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";
import ProductCard from "./ProductCard";
import Container from "../../components/Shared/Container";
import SearchBar from "../../components/SearchBar";
import Filters from "../../components/Filters";
import SortOptions from "../../components/SortOptions";
import PropTypes from 'prop-types';



const Home = () => {
    const [products, setproducts] = useState([])
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState({});
    const [sort, setSort] = useState({});
    console.log(filter,)

    const [itemPerPage, setItemPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState();
    const pageCount = Math.ceil(count / itemPerPage);
    const pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }


    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${currentPage}&size=${itemPerPage}&search=${search}&filter=${JSON.stringify(filter)}&sort=${JSON.stringify(sort)} `)
            .then(res => res.json())
            .then(data => {
                setproducts(data?.data)
                setCount(data.count)
            })
    }, [currentPage, itemPerPage, search, filter, sort])
    

    const handleItemPerPage = (e) => {
        setItemPerPage(parseInt(e.target.value))
        setCurrentPage(1)
    }

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }

    const handleNext = () => {
        if (currentPage < pageCount) setCurrentPage(currentPage + 1)
    }

    return (
        <div>
            <Navbar></Navbar>

            <div className='pt-32 min-h-[calc(100vh-68px)]'>
                <div className="text-lg py-3">
                    <Container>
                        <SearchBar setSearch={setSearch} />
                        <Filters setFilter={setFilter} />
                        <SortOptions setSort={setSort} />
                    </Container>
                </div>
                <Container>
                    <div className="grid gap-8 justify-between items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            products?.map(product => (
                                <ProductCard key={product._id} product={product}></ProductCard>
                            ))
                        }
                    </div>
                    <div className="overflow-x-auto">
                        <ul className="flex items-center my-5 gap-2 justify-center">
                            <li className='cursor-pointer px-3 py-2 text-gray-700 hover:text-gray-900' onClick={handlePrev}>Prev</li>
                            {pages.map(page => (
                                <li onClick={() => setCurrentPage(page)} key={page} className={`cursor-pointer px-3 py-2 text-gray-700 hover:text-gray-900 ${page === currentPage ? 'border-b-2 border-blue-500' : ''}`}>
                                    {page}
                                </li>
                            ))}
                            <li className='cursor-pointer px-3 py-2 text-gray-700 hover:text-gray-900' onClick={handleNext}>Next</li>
                            <li>
                                <select onChange={handleItemPerPage} name={itemPerPage} id="">
                                    <option value="5">9</option>
                                    <option value="10">12</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;

Home.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    count: PropTypes.number,
    itemPerPage: PropTypes.number,
    currentPage: PropTypes.number,
    pageCount: PropTypes.number,
    pages: PropTypes.arrayOf(PropTypes.number),
    handleItemPerPage: PropTypes.func,
    handlePrev: PropTypes.func,
    handleNext: PropTypes.func,
}