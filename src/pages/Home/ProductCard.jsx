import { GiPriceTag } from "react-icons/gi";
import { TbCategory } from "react-icons/tb";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import { PiBrandy } from "react-icons/pi";

import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
    const { name, image, brand, description, price, category, ratings, createdAt } = product
    return (
        <div>
            <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img
                        className="h-60 w-full"
                        src={image}
                        alt="ui/ux review check"
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                    <button
                        className="!absolute top-4 right-4 h-12 text-2xl w-24 select-none rounded-full text-center align-middle font-sans font-medium uppercase text-white transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true"
                    >
                        <span className="flex justify-around items-center"><GiPriceTag></GiPriceTag><span>{price}</span></span>
                    </button>
                </div>
                <div className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                        <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {name}
                        </h5>
                        <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="-mt-0.5 h-5 w-5 text-yellow-700"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            {ratings}
                        </p>
                    </div>
                    <p className="block font-sans text-base border-t-2 font-light leading-relaxed text-gray-700 antialiased">
                        {description}
                    </p>
                    <div className=" items-center text-sm justify-between flex mt-2">
                        <h4 className="flex gap-1 items-center"> <TbCategory></TbCategory>Category: {category}</h4>
                        <h4 className="flex gap-1 items-center"> <PiBrandy></PiBrandy> Brand: {brand}</h4>


                    </div>
                    <div className=" items-center text-sm justify-between flex mt-2">
                        <h4 className="flex gap-1 items-center"><MdOutlineDateRange> </MdOutlineDateRange> Date: {`${createdAt?.slice(0, 10)}`}</h4>
                        <h4 className="flex gap-1 items-center"><IoMdTimer> </IoMdTimer> Time:{`${createdAt?.slice(11, createdAt?.length)}`}</h4>
                    </div>
                </div>
                <div className="p-6 pt-3">
                    <button
                        className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        Reserve
                    </button>
                </div>
            </div>
        </div>
    );
};


ProductCard.propTypes = {
    product: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        ratings: PropTypes.number.isRequired,
        createdAt: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
    }).isRequired,

}

export default ProductCard;
