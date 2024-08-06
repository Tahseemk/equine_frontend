
import React, { useContext } from "react";
import { logout } from "../redux/reducers/authSlice";
import { useDispatch } from "react-redux";
import innerLogo from '../assets/images/inner--logo.png';
import addImg from '../assets/images/add.png';
import logOut from '../assets/images/logout.png';
import cartImg from '../assets/images/shopping-bag.png';
import { AppContext } from "../context/AppContext";



function Header() {
  const dispatch = useDispatch();
  const { setCartVisible, cartVisible } = useContext(AppContext)

  console.log("cartVisible", cartVisible)

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <header className="">
      <div className="flex lg:flex-row justify-between max-w-[1920px] xl:ml-auto items-center lg:items-stretch ">
        <div className="flex flex-wrap justify-start gap-4 xl:py-5 py-4 xl:pl-20 bg--gray pl-4 pr-4 flex-1">
          <a href="#" className="flex items-center min-w-[120px]">
            <img
              src={innerLogo}
              className=" "
              alt="inner-logo"
            />
          </a>
        </div>
        <div className="bg-[white] xl:w-[600px] w-auto xl:px-12 px-5 xl:py-5 py-2 lg:border-b lg:bottom-1 lg:border-x-zinc-600">
          <div className="flex items-center justify-center lg:order-2 gap-2 lg:gap-5 bg-[#fff]">
            <a
              href="#"
              className="flex bg-[#0085FF] text-white hover:bg-black font-normal text-lg px-4 lg:px-8 py-2 lg:py-4 duration-75 gap-3 century-gothic"
            >
              <img
                src={addImg}
                className="object-contain"
                alt="inner-logo"
              />
              <span className="hidden md:block"> Add customer </span>
            </a>
            <a
              onClick={handleLogout}
              href="#"
              className="flex gap-3 text-white bg-black hover:bg-[#0085FF] font-normal text-lg px-4 lg:px-12 py-2 lg:py-4 duration-75 century-gothic"
            >
              <img
                src={logOut}
                className="object-contain"
                alt="inner-logo"
              />
              <span className="hidden md:block">logout</span>
            </a>
            <a
              onClick={() => setCartVisible(!cartVisible)}
              href="#"
              className="xl:hidden gap-3 flex  text-white bg-[#6aae46] hover:bg-[#0085FF] font-normal text-lg px-4 lg:px-12 py-2 lg:py-4 duration-75 century-gothic"
            >
              <img
                src={cartImg}
                className="object-contain"
                alt="inner-logo"
              />
              <span className="hidden md:block">Cart</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
