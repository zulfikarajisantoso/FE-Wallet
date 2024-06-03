import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBalance, getListTransaction } from "../redux/actions/transactionActions";
import { formatTimestamp } from "./Function";

function Transaction() {
  const transaction = useSelector((state) => state.transaction?.transactions);
  const balance = useSelector((state) => state.transaction?.totalBalance);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListTransaction());
    dispatch(getBalance());
  }, [dispatch]);

  console.log(balance);

  return (
    <>
      <div className="w-full flex justify-center items-center mb-10">
        <div>
          <h1>List Transaction History</h1>
        </div>
      </div>
      <div className="space-x-4 flex justify-center mb-2">
        <Link to="/deposite" className="bg-gray-500 text-white p-3 rounded-lg">
          <h6>Deposit</h6>
        </Link>
        <Link to="/withdraw" className="bg-gray-500 text-white p-3 rounded-lg">
          <h6>Withdraw</h6>
        </Link>
      </div>
      <div className="relative overflow-x-auto w-full shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {transaction?.length > 0 ? (
              transaction.map((data, i) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={i}
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {data?.order_id}
                  </td>
                  <td className="px-6 py-4">{data?.amount}</td>
                  <td className="px-6 py-4">{formatTimestamp(data?.timestamp)}</td>
                  <td className={`px-6 py-4 ${data.status === 1 ? "text-green-500" : "text-red-500"}`}>
                    {data?.status === 1 ? "Success" : "Failed"}
                  </td>
                  <td className="px-6 py-4 text-start space-x-3">
                    {/* Add any additional content for this cell if needed */}
                  </td>
                </tr>
              ))
            ) : (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 text-center space-x-3" colSpan={5}>
                  No Data Transaction
                </td>
              </tr>
            )}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4 text-start space-x-3" colSpan={5}>
                Balance: {balance}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Transaction;
