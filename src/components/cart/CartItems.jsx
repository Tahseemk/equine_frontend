import React, { useContext } from 'react';
import cartImage from '../../assets/images/side-img.png';
import { AppContext } from '../../context/AppContext';
import { useCart } from 'react-use-cart';


function CartItems() {
    const { setCartVisible, cartVisible } = useContext(AppContext)
    const { addItem, items, updateItemQuantity, emptyCart, removeItem } = useCart();



    return (
        <div className={`side--bar ${cartVisible ? 'open--slider' : ""} bg-[white] xl:w-[600px] w-auto xl:px-12 px-5 py-5`}>
            <div className="text-end mb-2 xl:hidden block">
                <button onClick={() => setCartVisible(!cartVisible)} className="text-blue-500 hover:text-blue-700 bg-black p-1 text-white ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            {items?.length > 0 &&
                items.map((item, index) =>
                    <React.Fragment key={index + 1}>
                        <div className="p-4 flex items-center justify-between flex-wrap">
                            <h2 className="text-xl font-bold century-gothic">BALLYMAGROARTY BOY</h2>
                            <button onClick={() => removeItem(item.id)} className="text-red-600 hover:text-red-700 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        d="M5 6H4V5h4V4h8v1h4v1h-1v14H5V6zm3 2v8h2V8H8zm4 0v8h2V8h-2zm4 0v8h2V8h-2z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="p-4 flex items-center gap-2 flex-wrap">
                            <p className="itc-american">
                                A true stalwart of mud finishing half of his races in the top 3. don’t let
                                the twilight years fool you.
                            </p>
                            <img
                                src={cartImage}
                                alt="Horse Image"
                                className="w-28 h-28 object-cover rounded bg-[#0000001A] p-4"
                            />
                        </div>
                        <div className="p-4 border--bottom">
                            <ul class="pt-10 xl:pb-36">
                                <li className="pb-2">
                                    <span className="century-gothic font-bold">AGE:</span> <span className="itc-american">{item.age}</span>
                                </li>
                                <li className="pb-2">
                                    <span className="century-gothic font-bold"> GENDER </span>: <span className="itc-american">{item.gender}</span>
                                </li>
                                <li className="pb-2">
                                    <span className="century-gothic font-bold">LOCATION:</span> <span className="itc-american">{item.location}</span>
                                </li>
                                <li className="pb-2">
                                    <span className="century-gothic font-bold">RACE TYPE:</span> <span className="itc-american">{item.race_type}</span>
                                </li>
                                <li className="pb-2">
                                    <span className="century-gothic font-bold">TRAINER:</span> <span className="itc-american">{item.trainer}</span>
                                </li>
                                <li className="pb-2">
                                    <span className="century-gothic font-bold">SIRE:</span> <span className="itc-american">{item.sire}</span>
                                </li>
                                <li className="pb-2">
                                    <span className="century-gothic font-bold">DAM:</span> <span className="itc-american">{item.dam}</span>
                                </li>
                                <li className="pb-2">
                                    <span className="century-gothic font-bold">DAM SIRE:</span> <span className="itc-american">{item.dam_sire}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-4 border--bottom">
                            <p className="text-[#478C21] text-xl font-bold century-gothic">Share price: £{item.price}</p>
                        </div>
                    </React.Fragment>
                )
            }
            {items?.length === 0 &&
                <div className="p-4 flex items-center justify-between flex-wrap">
                    <h3 className='text-center font-normal color-[#CFCFCF]'>It looks like you haven't added anything to your cart yet.</h3>
                </div>
            }
        </div>
    )
}

export default CartItems
