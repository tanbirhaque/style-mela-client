import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#f5f5f5] mt-5">
      {/* footer */}
      <footer className="p-5 md:px-10 md:py-20">
        <div className="flex flex-col md:flex-row">
          <div className="mb-6 md:mb-0 w-1/3">
            <Link href="/" className="flex items-center">
              <span className="text-center text-4xl font-semibold">
                Style Mela
              </span>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-around text-[#000000] w-2/3">
            <div className=" max-w-56">
              <h2 className="mb-6 text-sm md:text-xl font-bold">Visit Link</h2>
              <ul className="font-medium space-y-4">
                <li>
                  <Link href="/privacy" className="hover:text-[#fa8c16]">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-[#fa8c16]">
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" max-w-56">
              <h2 className="mb-6 text-sm md:text-xl  font-bold">Company</h2>
              <ul className="font-medium space-y-2">
                <li>
                  <Link href="/" className="hover:text-[#fa8c16]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#fa8c16]">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#fa8c16]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" max-w-56">
              <h2 className="mb-6 text-sm md:text-xl  font-bold">Contact</h2>
              <p>+99 (0) 101 0000 888 Info@yourdomain.com</p>
            </div>
            <div className=" max-w-56">
              <h2 className="mb-6 text-sm md:text-xl  font-bold">Address</h2>
              <p>
                Patricia Amedee 4401 Waldeck Street Grapevine Nashville, Tx
                76051
              </p>
            </div>
          </div>
        </div>
      </footer>
      <hr className="border-[#abafc7] mx-10" />
      {/* small footer */}
      <footer className="rounded-lg shadow text-[#000000]">
        <div className="w-full p-5 md:px-10 md:py-7 md:flex md:items-center md:justify-between">
          <span className="font-medium sm:text-center">
            © 2024 Style Mela. All Rights Reserved.
          </span>
          {/* icon div */}
          <ul className="flex gap-5 text-xl items-center mt-3 font-medium">
            <li className=" hover:text-[#fa8c16] cursor-pointer">
              <FaInstagram />
            </li>
            <li className=" hover:text-[#fa8c16] cursor-pointer">
              <FaLinkedinIn />
            </li>
            <li className=" hover:text-[#fa8c16] cursor-pointer">
              <FaFacebookF />
            </li>
            <li className=" hover:text-[#fa8c16] cursor-pointer">
              <FaTwitter />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
