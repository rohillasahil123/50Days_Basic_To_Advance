import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, increaseQty, decreaseQty } = useContext(CartContext);

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold mb-6">My Cart</h2>

            {cart.length === 0 ? (
                <p>Your cart is empty 🛒</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center border-b py-4"
                        >
                            <div>
                                <h3 className="font-semibold">{item.name}</h3>
                                <p>₹{item.price}</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => decreaseQty(item.id)}
                                    className="px-3 py-1 border rounded"
                                >
                                    -
                                </button>
                                <span>{item.qty}</span>
                                <button
                                    onClick={() => increaseQty(item.id)}
                                    className="px-3 py-1 border rounded"
                                >
                                    +
                                </button>
                            </div>

                            <p className="font-semibold">
                                ₹{item.price * item.qty}
                            </p>
                        </div>
                    ))}

                    <div className="text-right mt-6 text-xl font-bold">
                        Total: ₹{total}
                    </div>
                </>
            )}

            {cart.length > 0 && (
                <div className="flex justify-end mt-6">
                    <Link
                        to="/checkout"
                        className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                    >
                        Proceed to Checkout
                    </Link>
                </div>
            )}


        </div>
    );
};

export default Cart;