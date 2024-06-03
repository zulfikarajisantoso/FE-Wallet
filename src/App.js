import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./component/Sidebar"; // Jalur impor disesuaikan
import Transaction from "./component/Transaction";
import Deposit from "./component/Deposit";
import Withdraw from "./component/WithdrawPage";
function App() {
  return (
    <Router>
      <Sidebar />
      <div className="relative">
        <div className="p-4 sm:ml-64">
          <div className="p-4 rounded-lg w-screen">
            <Routes>
          
              <Route index path="/" element={<Transaction />} />
              <Route path="/deposite" element={<Deposit />} />
              <Route path="/withdraw" element={<Withdraw />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
