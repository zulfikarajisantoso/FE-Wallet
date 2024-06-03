import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { withdraw } from '../redux/actions/transactionActions';

function WithdrawPage() {
    const [amount, setamount] = useState("");
    const [error, seterror] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const onSubmit = async (e) => {
      e.preventDefault();
      const { success, error } = await dispatch(withdraw(amount));
      if (success) {
        navigate("/");
      } else {
        seterror(error);
      }
    };
  
    return (
      <div className="w-full h-5/6 flex items-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-96 bg-white shadow-md border border-gray-200 rounded-lg max-w-md p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" onSubmit={onSubmit}>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Update Wallet
              </h3>
              <div>
                <label
                  htmlFor="amount"
                  className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >
                  Wintdraw Amount
                </label>
                <input
                  type="text"
                  name="amount"
                  id="amount"
                  value={amount}
                  onChange={(e) => setamount(e.target.value)}
                  className={`bg-gray-50 border ${
                    error ? "border-red-500" : "border-gray-300"
                  } text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
                  placeholder="3000"
                  required
                />
                {error && (
                  <span className="text-red-500 text-sm mt-2">{error}</span>
                )}
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Withdraw
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  
}

export default WithdrawPage