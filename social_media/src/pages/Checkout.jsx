import React, { useState } from "react";

const Checkout = () => {
  // dummy cart data (baad me context se aayega)
  const totalPrice = 899;
  const cartCount = 3;

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    house: "",
    area: "",
    city: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!address.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!/^[0-9]{10}$/.test(address.phone)) {
      newErrors.phone = "Enter valid 10 digit mobile number";
    }

    if (!address.house.trim()) {
      newErrors.house = "House / Flat is required";
    }

    if (!address.area.trim()) {
      newErrors.area = "Area is required";
    }

    if (!address.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!/^[0-9]{6}$/.test(address.pincode)) {
      newErrors.pincode = "Enter valid 6 digit pincode";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (!validate()) return;

    alert("🎉 Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-5">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>

        {/* ADDRESS FORM */}
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 rounded"
            value={address.name}
            onChange={(e) =>
              setAddress({ ...address, name: e.target.value })
            }
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full border p-2 rounded"
            value={address.phone}
            onChange={(e) =>
              setAddress({ ...address, phone: e.target.value })
            }
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}

          <input
            type="text"
            placeholder="House / Flat"
            className="w-full border p-2 rounded"
            value={address.house}
            onChange={(e) =>
              setAddress({ ...address, house: e.target.value })
            }
          />
          {errors.house && (
            <p className="text-red-500 text-sm">{errors.house}</p>
          )}

          <input
            type="text"
            placeholder="Area / Landmark"
            className="w-full border p-2 rounded"
            value={address.area}
            onChange={(e) =>
              setAddress({ ...address, area: e.target.value })
            }
          />
          {errors.area && (
            <p className="text-red-500 text-sm">{errors.area}</p>
          )}

          <input
            type="text"
            placeholder="City"
            className="w-full border p-2 rounded"
            value={address.city}
            onChange={(e) =>
              setAddress({ ...address, city: e.target.value })
            }
          />
          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city}</p>
          )}

          <input
            type="number"
            placeholder="Pincode"
            className="w-full border p-2 rounded"
            value={address.pincode}
            onChange={(e) =>
              setAddress({ ...address, pincode: e.target.value })
            }
          />
          {errors.pincode && (
            <p className="text-red-500 text-sm">{errors.pincode}</p>
          )}
        </div>

        {/* ORDER SUMMARY */}
        <div className="mt-5 border-t pt-4">
          <p className="flex justify-between">
            <span>Items</span>
            <span>{cartCount}</span>
          </p>
          <p className="flex justify-between font-bold">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </p>
        </div>

        {/* PLACE ORDER */}
        <button
          onClick={handlePlaceOrder}
          className="w-full mt-5 bg-green-600 text-white py-2 rounded-lg text-lg hover:bg-green-700"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;