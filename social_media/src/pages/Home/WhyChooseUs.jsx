const WhyChooseUs = () => {
  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-2">🚀 Fast Delivery</h3>
          <p className="text-sm text-gray-600">
            Super quick local delivery
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-2">💰 Best Prices</h3>
          <p className="text-sm text-gray-600">
            Affordable local pricing
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-2">🏠 Local Stores</h3>
          <p className="text-sm text-gray-600">
            Support nearby shops
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
