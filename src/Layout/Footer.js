import React from 'react';
import bagBlack from '../assets/images/bag-black.png';


function Footer() {
  return (
    <div>
      <footer>
        <nav className="bg-black border-b border-[#F1EAD1] px-4 lg:px-6 py-4">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-[1700px]">
            <div></div>
            <div className="flex items-center lg:order-2 gap-2">
              <p
                href="#"
                className="flex text-white hover:bg-black font-normal text-lg px-4 lg:px-8 py-2 lg:py-2.5 duration-75 gap-3 century-gothic"
              >
                Total:  £60.00
              </p>
              <a
                href="#"
                className="bg-white flex gap-2 text-black hover:bg-[#0085FF] font-normal text-lg px-4 lg:px-12 py-2 lg:py-2.5 duration-75"
              >
                <img
                  src={bagBlack}
                  className="object-contain filter-[brightness(0%)] century-gothic font-bold"
                  alt="inner-logo"
                />
                Checkout
              </a>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  )
}

export default Footer;
