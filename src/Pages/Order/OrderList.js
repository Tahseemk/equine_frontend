import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const OrderList = () => {
  return (
    <>
      <div className="listing_container">
        <div className="list_item_container w-[30%] bg-[#ffffff] pt-1 relative pb-[3rem]">
          <div className="flex items-center	justify-between px-2">
            <h1 className="text-[14px] uppercase">1</h1>
            <h1 className="text-[14px] uppercase">VOID</h1>
          </div>
          <div className="flex items-center	justify-between px-2 pt-2">
            <h2 className="text-[14px] uppercase">DELIVERY</h2>
            <h2 className="text-[14px] uppercase">HOMEWORK</h2>
          </div>
          <div className="flex items-center	justify-between px-2 py-5 bg-[#bca89f] mt-2">
            <h2 className="text-[14px] text-[#765341]">
              <span>6 * item one</span>
            </h2>
            <h2 className="text-[14px] text-[#765341]">SAR 120.00</h2>
          </div>
          <div className="flex items-center	justify-between px-2 py-5 mt-2 absolute w-[100%] bottom-0">
            <h2 className="text-[14px] text-[#000000] uppercase font-bold">
              TOTAL
            </h2>
            <h2 className="text-[14px] text-[#000000] uppercase font-bold">
              HOMEWORK
            </h2>
          </div>
        </div>

        <div className="list_item_table_container w-[70%]">
          <div className="btn_container flex items-center justify-between py-2">
            <Link to="/">
              <button className="text-[#ffffff] bg-[#3498db] px-4 py-2 rounded-[4px]">
                BACK
              </button>
            </Link>
            <button className="text-[#ffffff] bg-[#3498db] px-4 py-2 rounded-[4px] mr-3">
              MORE
            </button>
          </div>
          <div className="search_box_container flex items-center justify-center bg-[#ffffff] rounded-[4px] py-1 px-2 ">
            <input
              type="search"
              placeholder="Search Orders"
              className="w-[100%] "
            />
            <IoSearchOutline />
          </div>
          <div className="table_container">
            <table className="w-[100%] bg-[#ffffff] mt-2">
              <thead>
                <tr>
                  <th className="text-left pt-3 pl-4">ALL(117)</th>
                  <th className="text-left pt-3 font-semibold">ACTIVE</th>
                  <th className="text-left pt-3 font-semibold">PENDING</th>
                  <th className="text-left pt-3 font-semibold">AHEAD</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="py-10 px-5">
                    <b>100151</b>
                  </td>
                  <td>
                    <p>DELIVERY(1)</p>
                    <p>25/06/2024 03:20 PM</p>
                  </td>
                  <td>
                    <p>A customer</p>
                    <p>25462543</p>
                  </td>
                  <td>
                    <p>
                      <b>VOID</b>
                    </p>
                    <p>SAR 0.00</p>
                  </td>
                </tr>
                <tr>
                  <td className="py-10 px-5">
                    <b>100150</b>
                  </td>
                  <td>
                    <p>DELIVERY(3)</p>
                    <p>24/06/2024 04:24 PM</p>
                  </td>
                  <td>
                    <p>A customer</p>
                    <p>35478215</p>
                  </td>
                  <td>
                    <p>
                      <b>ACTIVE</b>
                    </p>
                    <p>SAR 2,280.00</p>
                  </td>
                </tr>
                <tr>
                  <td className="py-10 px-5">
                    <b>100149</b>
                  </td>
                  <td>
                    <p>DELIVERY(2)</p>
                    <p>24/06/2024 04:22 PM</p>
                  </td>
                  <td>
                    <p>Homework</p>
                    <p>48556426</p>
                  </td>
                  <td>
                    <p>
                      <b>VOID</b>
                    </p>
                    <p>SAR 0.00</p>
                  </td>
                </tr>
                <tr>
                  <td className="py-10 px-5">
                    <b>100148</b>
                  </td>
                  <td>
                    <p>DELIVERY(1)</p>
                    <p>24/06/2024 04:19 PM</p>
                  </td>
                  <td>
                    <p>A customer</p>
                    <p>20246655</p>
                  </td>
                  <td>
                    <p>
                      <b>DONE</b>
                    </p>
                    <p>SAR 90.00</p>
                  </td>
                </tr>
                <tr>
                  <td className="py-10 px-5">
                    <b>100147</b>
                  </td>
                  <td>
                    <p>DELIVERY(1)</p>
                    <p>21/06/2024 03:42 PM</p>
                  </td>
                  <td>
                    <p>B customer</p>
                    <p>65842512</p>
                  </td>
                  <td>
                    <p>
                      <b>VOID</b>
                    </p>
                    <p>SAR 0.00</p>
                  </td>
                </tr>
                <tr>
                  <td className="py-10 px-5">
                    <b>100146</b>
                  </td>
                  <td>
                    <p>DELIVERY(1)</p>
                    <p>26/06/2024 05:09 PM</p>
                  </td>
                  <td>
                    <p>C customer</p>
                    <p>65842512</p>
                  </td>
                  <td>
                    <p>
                      <b>ACTIVE</b>
                    </p>
                    <p>SAR 370.00</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderList;
