import React from 'react';

const ProductCard: React.FC = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 w-[300px] border">
            <img src="https://www.sowfresh.in/cdn/shop/products/coldpressedcoconutoil_1000ML_JAR_Front_1000x1000.jpg?v=1638624667" alt="Product Image" className="w-full mb-4" />
            <h2 className="text-xl font-bold mb-2">Product Title</h2>
            <div className="flex items-center mb-2">
                <span className="text-yellow-400 mr-1">⭐</span>
                <span className="text-yellow-400 mr-1">⭐</span>
                <span className="text-yellow-400 mr-1">⭐</span>
                <span className="text-yellow-400 mr-1">⭐</span>
                <span className="text-yellow-400">⭐</span>
            </div>
            <p className="text-gray-600 mb-2">$19.99</p>
            <div className="flex items-center mb-2">
                <label htmlFor="quantity" className="mr-2">Quantity:</label>
                <select id="quantity" className="border border-gray-300 rounded-md p-1">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Add to Cart</button>
        </div>
    );
};

export default ProductCard;
