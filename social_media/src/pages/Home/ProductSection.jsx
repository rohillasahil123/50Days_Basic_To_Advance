import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import products from "../../data/products";


const ProductSection = () => {

const { addToCart } = useContext(CartContext);


  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Popular Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item) => (
          <div key={item.id} className="border rounded-xl p-4">
            <img src={item.image} alt="" className="mb-3 rounded" />
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-green-600 font-bold">₹{item.price}</p>
            <button className="mt-3 w-full bg-green-600 text-white py-2 rounded" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;