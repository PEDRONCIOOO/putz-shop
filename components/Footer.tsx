import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-10 mt-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Menu */}
        <div>
          <h3 className="text-xl font-bold uppercase">Menu</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link className="hover:underline" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/refer">
                Refer a Friend!
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/contact">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/faqs">
                FAQs
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/store-locator">
                Store Locator
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/affiliate">
                Affiliate Signup
              </Link>
            </li>
          </ul>
        </div>

        {/* Center Column - Legal */}
        <div>
          <h3 className="text-xl font-bold uppercase">Legal</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link className="hover:underline" href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/terms">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/shipping">
                Shipping & Return Policy
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/warranty">
                Warranty
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/cookies">
                Legal & Cookies
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/giveaway">
                Giveaway Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Column - Newsletter */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold uppercase">
            Tune in to our Emails!
          </h3>
          <div className="mt-4 flex items-center border border-gray-400 rounded-md overflow-hidden">
            <input
              className="w-full px-4 py-2 text-black focus:outline-none"
              placeholder="Email"
              type="email"
            />
            <button className="px-4 py-2 bg-gray-300 text-black hover:bg-gray-400 transition">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section - Powered by Pedro Trotta */}
      <div className="mt-8 flex items-center justify-center">
        <Link
          className="flex items-center gap-1 text-gray-400 hover:text-white transition"
          href="https://github.com/PEDRONCIOOO"
          title="Pedro Trotta Dev"
        >
          <span>Powered by</span>
          <p className="font-bold">Pedro Trotta</p>
        </Link>
      </div>
    </footer>
  );
};
