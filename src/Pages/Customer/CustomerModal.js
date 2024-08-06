import React, { useContext } from 'react';
import CustomerList from './CustomerList';
import Addcustomer from './Addcustomer';
import { AppContext } from '../../context/AppContext';

function CustomerModal() {
    const { addCustomer } = useContext(AppContext);
    console.log("addCustomer" , addCustomer)

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-4 w-[80%] max-w-[600px] min-h-80 transition-transform duration-300 translate-x-0">
                {addCustomer ?
                    <Addcustomer />
                    :
                    < CustomerList />
                }
            </div>
        </div>
    )
}

export default CustomerModal
