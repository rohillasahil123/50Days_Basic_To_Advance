import react from "react"   

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="max-w-7xl mx-auto px-4 py-16 grid gap-10 md:grid-cols-3">

                {/* Brand */}
                <div>
                    <h3 className="text-white text-2xl font-bold mb-3">
                        LaxmanjaraMart
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Fast delivery of daily essentials from trusted local stores.
                    </p>
                    <p className="mt-3 text-sm">📍 Laxmanjara</p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-4 text-slate-400 text-xl">
                        <a href="#" className="hover:text-white transition-colors">📘</a>
                        <a href="#" className="hover:text-white transition-colors">📸</a>
                        <a href="#" className="hover:text-white transition-colors">💬</a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer transition-colors">Home</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Shop</li>
                        <li className="hover:text-white cursor-pointer transition-colors">My Orders</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                    </ul>
                </div>

                {/* Contact / Support */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Support</h4>
                    <p className="text-sm flex items-center gap-2">
                        📞 <span>+91 9XXXXXXXXX</span>
                    </p>
                    <p className="text-sm mt-2 flex items-center gap-2">
                        ⏱️ <span>7 AM – 10 PM</span>
                    </p>
                    <p className="text-sm mt-4 text-slate-400">
                        Need help? <a href="#" className="hover:text-white underline">Contact us</a>
                    </p>
                </div>

            </div>

            <div className="border-t border-slate-700 py-4 text-center text-sm text-slate-400">
                © {new Date().getFullYear()} LaxmanjaraMart. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;