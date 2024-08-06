import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import CustomerServices from "../../services/CutomerServices";
import useAsync from './../../hooks/useAsync';
import { useDispatch } from 'react-redux';
import { saveCustomer } from '../../redux/reducers/appSlice';
import { notifySuccess } from "../../utils/toast";
import Loader from "../../components/preloader/Loader";



const CustomerList = () => {
    const dispatch = useDispatch()
    const { setAddCustomer, setCustomerModal } = useContext(AppContext);
    const { data, loading, error } = useAsync(() => CustomerServices.getCustomerListApi());
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredData = data ? data.filter(item =>
        item.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item?.billing?.phone.toLowerCase().includes(searchQuery.toLowerCase())
    ) : [];

    const handleSelectCustomer = (customer) => {
        dispatch(saveCustomer(customer))
        notifySuccess("Customer selected successfully")
        setCustomerModal(false)
    }

    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <div>
                    <button
                        type="button"
                        className="bg-[#3498db] text-white px-4 py-2.5 rounded mr-2"
                        onClick={() => setCustomerModal(false)}
                    >
                        Cancel
                    </button>
                </div>
                <div>
                    <h4 className="text-xl font-semibold dark:text-white">Customers</h4>
                </div>
                <div>
                    <button
                        onClick={() => setAddCustomer(true)}
                        className="cursor-pointer bg-[#3498db] text-white px-4 py-2.5 rounded"
                    >
                        Add
                    </button>
                </div>
            </div>
            <div className="table_container overflow-y-auto max-h-[400px]">
                <div className="relative overflow-x-auto block">
                    <div>
                        <label htmlFor="table-search" className="sr-only">
                            Search
                        </label>
                        <div className="relative mt-1">
                            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="table-search"
                                className="block pt-3 pb-3 ps-10 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[100%] search_customer"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>
                    <table className="w-full mt-3 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-collapse">
                        <tbody className='block max-h-[300px] overflow-y-auto'>
                            {filteredData && filteredData?.length > 0 &&
                                filteredData.map((item, index) => (
                                    item?.first_name &&
                                    <tr onClick={() => handleSelectCustomer(item)} key={index + 1} className="bg-white cursor-pointer dark:bg-gray-200 dark:border-gray-200 hover:bg-gray-200 table w-full table-fixed">
                                        <td className="px-4 py-2 text-[#000]">{`${item.first_name} ${item.last_name}`}</td>
                                        <td className="px-4 py-2 text-[#000] text-right">{item?.billing?.phone}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    {loading &&
                        <Loader loading={loading} />
                    }

                    {!loading && filteredData.length === 0 &&
                        <div colSpan="2" className="px-6 py-4 text-[#000] text-center">
                            No records available
                        </div>
                    }

                </div>
            </div>
        </>
    );
}

export default CustomerList;
