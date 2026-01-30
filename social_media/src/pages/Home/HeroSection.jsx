import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <p className="text-green-600 font-medium mb-3">
            🚀 10-Minute Local Delivery
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
            Groceries delivered <br /> faster than you expect
          </h1>

          <p className="text-slate-600 mb-8 max-w-md">
            Daily essentials from trusted local stores in 📍 Lakhanmajra.
          </p>

          <Link
            to="/products"
            className="inline-block bg-green-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-green-700 transition"
          >
            Shop Now
          </Link>
        </div>

        <div className="hidden md:block">
          <div className="h-80 rounded-3xl bg-gradient-to-br from-green-100 to-green-200"></div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
