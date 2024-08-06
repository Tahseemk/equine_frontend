import React, { useContext, useState } from "react";
import useAddToCart from "../../hooks/useAddToCart";
import useAsync from "./../../hooks/useAsync";
import ProductServices from "../../services/ProductServices";
import { AppContext } from "../../context/AppContext";
import { useSelector } from "react-redux";
import Loader from "../../components/preloader/Loader";
import cartBag from '../../assets/images/shopping-bag.png';
import sizeImg from '../../assets/images/side-img.png';
import CartItems from "../../components/cart/CartItems";



const Products = () => {
  const { handleAddItem } = useAddToCart();
  // const { data, loading, error } = useAsync(() => ProductServices.getAllProducts());
  const { setCustomerModal, setBillingAddress, attributeModal, setAttributeModal } = useContext(AppContext);
  const { customer } = useSelector((state) => state.app);
  const [product, setProduct] = useState("")


  const handleAddToCart = (product) => {
    const price = parseInt(product.share_price) || parseInt(product.regular_price) || parseInt(product.price) || 0
    const newItem = {
      id: product.id,
      title: product.title,
      image: product.imageUrl,
      price: price,
      age: product.age,
      race_type: product.raceType,
      trainer: product.trainer,
      location: product.location,
      gender: product.gender,
      sire : product.sire,
      dam : product.dam,
      dam_sire : product.dam_sire,
      quantity: 1,
    };
    handleAddItem(newItem);
  };

  const getPrice = (product) => {
    const price = product?.sale_price || product?.regular_price || product?.price
    return price
  }

  const dummyProducts = [
    {
      id: "40",
      bgColor: "bg-[#6aae46]",
      imageUrl: "https://equine-sales.com/assets/uploads/card-image/_600xAUTO_fit_center-center_90_none_ns/BALLYMAGROARTYBOY.png",
      flagUrl: "https://equine-sales.com/assets/uploads/flags/_250xAUTO_fit_center-center_90_none_ns/IRELAND.png",
      title: "Ballymagroarty Boy",
      share_price: "60",
      age: "11",
      raceType: "Jump",
      sire: "MILAN (GB)",
      dam: "GLAZED STORM (IRE)",
      dam_sire: "VINNIE ROE",
      trainer: "NIGEL HAWKE",
      location: "Tiverton",
      gender: "Gelding",
      description: "A true stalwart of the mud finishing half of his races in the top 3. Don't let the twilight years fool you."
    },
    {
      id: "50",
      bgColor: "bg-[#82c4d8]",
      imageUrl: "https://equine-sales.com/assets/uploads/card-image/_600xAUTO_fit_center-center_90_none_ns/BALLYMAGROARTYBOY.png",
      flagUrl: "https://equine-sales.com/assets/uploads/flags/_250xAUTO_fit_center-center_90_none_ns/IRELAND.png",
      title: "Ballymagroarty Boy",
      share_price: "80",
      age: "11",
      sire: "MILAN (GB)",
      dam: "GLAZED STORM (IRE)",
      dam_sire: "VINNIE ROE",
      raceType: "Jump",
      trainer: "NIGEL HAWKE",
      location: "Tiverton",
      gender: "Gelding",
      description: "A true stalwart of the mud finishing half of his races in the top 3. Don't let the twilight years fool you.",
    },
    {
      id: "60",
      bgColor: "bg-[#6aae46]",
      imageUrl: "https://equine-sales.com/assets/uploads/card-image/_600xAUTO_fit_center-center_90_none_ns/BALLYMAGROARTYBOY.png",
      flagUrl: "https://equine-sales.com/assets/uploads/flags/_250xAUTO_fit_center-center_90_none_ns/IRELAND.png",
      title: "Ballymagroarty Boy",
      share_price: "90",
      age: "11",
      sire: "MILAN (GB)",
      dam: "GLAZED STORM (IRE)",
      dam_sire: "VINNIE ROE",
      raceType: "Jump",
      trainer: "NIGEL HAWKE",
      location: "Tiverton",
      gender: "Gelding",
      description: "A true stalwart of the mud finishing half of his races in the top 3. Don't let the twilight years fool you.",
    }
  ]



  return (
    <>
      <main className="">
        <div className="flex lg:flex-row justify-between max-w-[1920px] xl:ml-auto overflow-hidden relative">
          <div className="flex flex-wrap justify-start gap-4  py-5 xl:pl-28 xl:pt-10 bg--gray pl-4 pr-4 flex-1">

            {dummyProducts.length > 0 && dummyProducts?.map((item, index) =>
              <div key={index + 1} className=" flex-1 min-w-[300px]">
                <a
                  href="#"
                  className={`relative block ${item.bgColor} border-8 border-black rounded-2xl rounded-b-none p-6 shadow-[0_0_10px_1px_rgba(0,0,0,0.75)] overflow-hidden`}
                >
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-black transform translate-x-1/4 rotate-45" />
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-black transform -translate-x-1/4 -rotate-45" />
                  <div className="relative border-2 border-black text-center overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transform scale-200"
                      style={{
                        backgroundImage: 'url("https://equine-sales.com/assets/images/card-background.png")',
                        zIndex: 1
                      }}
                    />
                    <div className="relative z-10 pt-2.5">
                      <h3 className="text-3xl font-bold text-black mb-0 century-gothic">equine</h3>
                      <div className="relative w-full pb-2.5">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="relative z-20 w-[calc(100%-40px)] mx-auto"
                        />
                        <img
                          src={item.flagUrl}
                          alt="flag"
                          className="absolute z-10 w-1/2 top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2"
                        />
                      </div>
                      <div className="bg-black px-2.5 py-4">
                        <p className="text-[#ca981f] uppercase font-bold text-[20px] mb-0 century-gothic">{item.title}</p>
                        <p class="text-white text-[15px] uppercase font-medium">Nonchalant</p>
                        <div className="flex flex-wrap justify-between pt-5">
                          <div>
                            <img
                              src="https://www.rp-assets.com/svg/b/1/9/254791b.svg"
                              alt="Trainer"
                              className="w-10 h-auto"
                            />
                          </div>
                          <div>
                            <p className="text-[#6aae46] text-[16px] lowercase century-gothic font-normal mb-1">Age</p>
                            <p className="text-white text-[15px] uppercase font-normal itc-american">{item.age}</p>
                          </div>
                          <div>
                            <p className="text-[#6aae46] text-[16px] lowercase century-gothic font-normal mb-1">Location</p>
                            <p className="text-white text-[15px] uppercase font-normal itc-american">{item.location}</p>
                          </div>
                          <div>
                            <p className="text-[#6aae46] text-[16px] lowercase century-gothic font-normal mb-1">Gender</p>
                            <p className="text-white text-[15px] uppercase font-normal itc-american">{item.gender}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="min-h-[100px] text-center text-black p-5 text-lg itc-american leading-6">{item.description}</div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform -translate-x-1/4 rotate-45" />
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform translate-x-1/4 -rotate-45" />
                </a>
                <div className="flex justify-center items-center bg-black rounded-b-3xl min-h-24 text-center">
                  <button onClick={() => handleAddToCart(item)} className="flex gap-2 items-center bg-[#FF9900] text-white py-3 px-10 text-lg century-gothic font-bold">
                    <img src={cartBag} className="object-contain" alt="inner-logo" /> Add to cart
                  </button>
                </div>
              </div>
            )}
          </div>
          <CartItems />
        </div>
      </main>
    </>
  );
};

export default Products;
