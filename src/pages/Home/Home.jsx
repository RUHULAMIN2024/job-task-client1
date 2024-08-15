import { useEffect, useState } from "react";
import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";
import ProductCard from "./ProductCard";
import Container from "../../components/Shared/Container";

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.data)
            })
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div className='pt-28 min-h-[calc(100vh-68px)]'>
                <Container>
                    <div className="grid gap-8 justify-between items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            products.map(product => (
                                <ProductCard key={product._id} product={product}></ProductCard>
                            ))
                        }
                    </div>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;