import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="max-w-[1600px] mx-auto py-5 text-[#000000] flex justify-between flex-col md:flex-row gap-3 md:gap-0">
        <div className="flex gap-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            className="hover:fill-[#fa8c16] "
          >
            <g transform="translate(0)">
              <path d="M42.187,25a1.953,1.953,0,0,1-1.953,1.953H18.511a50.6,50.6,0,0,0,2.4,12.31,1.953,1.953,0,1,1-3.729,1.162A54.107,54.107,0,0,1,14.6,26.953H9.766a1.953,1.953,0,0,1,0-3.906H14.6A53.857,53.857,0,0,1,17.194,9.572a1.953,1.953,0,1,1,3.727,1.168,50.359,50.359,0,0,0-2.411,12.307H31.494a48.772,48.772,0,0,0-2.3-12.307,1.953,1.953,0,1,1,3.727-1.168,52.467,52.467,0,0,1,2.487,13.475h4.829A1.953,1.953,0,0,1,42.187,25Zm.49-17.678A25,25,0,0,0,7.322,42.678,24.837,24.837,0,0,0,25,50c.357,0,.718-.008,1.074-.023a1.953,1.953,0,0,0-.165-3.9c-.3.013-.607.019-.909.019A21.094,21.094,0,1,1,46.094,25,1.953,1.953,0,0,0,50,25,24.837,24.837,0,0,0,42.678,7.322Z" />
              <path
                d="M330.96,312.571a1.953,1.953,0,0,0-2.762,0l-2.98,2.98-9.238-1.76a1.953,1.953,0,0,0-1.185,3.692l5.808,2.683-4.4,4.4-.865-.865a1.953,1.953,0,0,0-2.762,2.762l4.492,4.492a1.953,1.953,0,0,0,2.762-2.762l-.865-.865,4.4-4.4,2.683,5.808a1.953,1.953,0,0,0,3.692-1.185l-1.76-9.238,2.98-2.98a1.953,1.953,0,0,0,0-2.762Z"
                transform="translate(-281.532 -281.53)"
              />
            </g>
          </svg>

          <div className="flex flex-col gap-1.5">
            <p className="text-xl font-semibold">Free Shipping</p>
            <p className=" text-[#3d3d3d]">Capped at $39 per order</p>
          </div>
        </div>
        <div className="flex gap-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="47.168"
            viewBox="0 0 50 47.168"
            className="hover:fill-[#fa8c16]"
          >
            <path
              d="M38.281,53.953H23.438a1.953,1.953,0,0,1,0-3.906H38.281a7.821,7.821,0,0,0,7.813-7.812V26.219a7.821,7.821,0,0,0-7.812-7.812H11.719a7.821,7.821,0,0,0-7.812,7.813V41.258a.978.978,0,0,0,.977.977h5.859a1.953,1.953,0,0,1,0,3.906H4.883A4.888,4.888,0,0,1,0,41.258V26.219A11.732,11.732,0,0,1,11.719,14.5H38.281A11.732,11.732,0,0,1,50,26.219V42.234A11.732,11.732,0,0,1,38.281,53.953ZM17.578,52a1.953,1.953,0,0,0-1.953-1.953H1.953a1.953,1.953,0,0,0,0,3.906H15.625A1.953,1.953,0,0,0,17.578,52Zm5.859,7.717a1.953,1.953,0,0,0-1.953-1.953H1.953a1.953,1.953,0,0,0,0,3.906H21.484A1.953,1.953,0,0,0,23.438,59.715Zm9.375-25.488A7.813,7.813,0,1,0,25,42.039,7.821,7.821,0,0,0,32.813,34.227Zm-3.906,0A3.906,3.906,0,1,1,25,30.32,3.911,3.911,0,0,1,28.906,34.227Zm13.379-6.543a1.953,1.953,0,0,0-1.953-1.953,1.467,1.467,0,0,1-1.465-1.465,1.953,1.953,0,0,0-3.906,0,5.377,5.377,0,0,0,5.371,5.371A1.953,1.953,0,0,0,42.285,27.684ZM15.234,24.461a1.953,1.953,0,0,0-3.906,0,1.467,1.467,0,0,1-1.465,1.465,1.953,1.953,0,0,0,0,3.906A5.377,5.377,0,0,0,15.234,24.461ZM38.867,44.188a1.467,1.467,0,0,1,1.465-1.465,1.953,1.953,0,0,0,0-3.906,5.377,5.377,0,0,0-5.371,5.371,1.953,1.953,0,0,0,3.906,0Z"
              transform="translate(0 -14.5)"
            />
          </svg>
          <div className="flex flex-col gap-1.5">
            <p className="text-xl font-semibold">Secure Payments</p>
            <p className=" text-[#3d3d3d]">Up to 12 months installments</p>
          </div>
        </div>
        <div className="flex gap-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="50"
            viewBox="0 0 41 50"
            className="hover:fill-[#fa8c16]"
          >
            <path
              d="M73.4,50H55.6A11.675,11.675,0,0,1,44,38.281V11.719A11.675,11.675,0,0,1,55.6,0H73.4A11.675,11.675,0,0,1,85,11.719V38.281A11.675,11.675,0,0,1,73.4,50ZM55.6,3.906a7.783,7.783,0,0,0-7.736,7.812V38.281A7.783,7.783,0,0,0,55.6,46.094H73.4a7.783,7.783,0,0,0,7.736-7.812V11.719A7.783,7.783,0,0,0,73.4,3.906ZM77.167,17.969a1.944,1.944,0,0,0-1.934-1.953H71.946a2.919,2.919,0,0,1-2.9-2.93V9.766a1.934,1.934,0,1,0-3.868,0v3.32a6.81,6.81,0,0,0,6.769,6.836h3.288A1.944,1.944,0,0,0,77.167,17.969ZM66.932,36l7.643-7.767a1.967,1.967,0,0,0-.009-2.762,1.921,1.921,0,0,0-2.735.009l-7.644,7.769a2.108,2.108,0,0,1-3.024,0l-3.7-3.771a1.921,1.921,0,0,0-2.735-.012,1.967,1.967,0,0,0-.012,2.762L58.416,36a5.949,5.949,0,0,0,8.516,0Z"
              transform="translate(-44)"
            />
          </svg>
          <div className="flex flex-col gap-1.5">
            <p className="text-xl font-semibold">14-Day Returns</p>
            <p className=" text-[#3d3d3d]">Shop with confidence</p>
          </div>
        </div>
        <div className="flex gap-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="48.541"
            viewBox="0 0 50 48.541"
            className="hover:fill-[#fa8c16]"
          >
            <g transform="translate(-0.001 -7.791)">
              <path
                d="M25,38.656a13.953,13.953,0,0,1-6.6-1.663L3.494,29a6.615,6.615,0,0,1,.034-11.681l14.943-7.9a13.956,13.956,0,0,1,13.06,0l14.943,7.9A6.615,6.615,0,0,1,46.508,29l-14.906,8A13.955,13.955,0,0,1,25,38.656ZM25,11.7a10.054,10.054,0,0,0-4.7,1.169L5.354,20.77a2.708,2.708,0,0,0-.014,4.786l14.906,8a10.037,10.037,0,0,0,9.51,0l14.906-8a2.708,2.708,0,0,0-.014-4.786L29.7,12.866A10.055,10.055,0,0,0,25,11.7Zm-5.617-.558h0ZM31.6,54.668l17.368-9.316a1.953,1.953,0,0,0-1.846-3.442L29.756,51.226a10.041,10.041,0,0,1-9.518,0L2.87,42a1.953,1.953,0,1,0-1.831,3.45L18.4,54.668a13.935,13.935,0,0,0,13.2,0Zm0-8.789,17.368-9.316a1.953,1.953,0,0,0-1.846-3.442L29.756,42.437a10.041,10.041,0,0,1-9.518,0L2.87,33.215a1.953,1.953,0,1,0-1.831,3.45L18.4,45.879a13.935,13.935,0,0,0,13.2,0Z"
                transform="translate(0)"
              />
            </g>
          </svg>
          <div className="flex flex-col gap-1.5">
            <p className="text-xl font-semibold">Free Fabric Swatches</p>
            <p className=" text-[#3d3d3d]">Delivered to your door</p>
          </div>
        </div>
      </div>
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
                <h2 className="mb-6 text-sm md:text-xl font-bold">
                  Visit Link
                </h2>
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
    </>
  );
};

export default Footer;
