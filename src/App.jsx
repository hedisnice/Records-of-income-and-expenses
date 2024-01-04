import "./App.css";
import Transactions from "./components/Transactions";
import FormComponents from "./components/FormComponents";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DataContext from "./data/DataContext";
import ReportComponents from "./components/ReportComponents";
import Footer from "./components/Footer";

function App() {
  const initData = [
    { id: 1, title: "ค่าเดินทาง", amount: -1000 },
    { id: 2, title: "ค่าที่พัก", amount: -2000 },
    { id: 3, title: "เงินเดือน", amount: 20000 },
  ];
  const [items, setItems] = useState(initData);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  useEffect(() => {
    const amounts = items.map((e) => e.amount);
    const income = amounts
      .filter((e) => e > 0)
      .reduce((total, e) => (total += e), 0);

    const expense =
      amounts.filter((e) => e < 0).reduce((total, e) => (total += e), 0) * -1;

    setReportIncome(income.toFixed(2));
    setReportExpense(expense.toFixed(2));
  }, [items, reportIncome, reportExpense]);

  //State Return
  return (
    <DataContext.Provider
      value={{ income: reportIncome, expense: reportExpense }}
    >
      <div className="container">
        <h1 className="title">แอพบัญชีรายรับ - รายจ่าย</h1>
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>
            <Routes>
              <Route path="/" element={<ReportComponents />}></Route>
              <Route
                path="/insert"
                element={
                  <>
                    <FormComponents onAddItem={onAddNewItem} />{" "}
                    <Transactions items={items} />{" "}
                  </>
                }
              ></Route>
            </Routes>
          </div>
        </Router>
      </div>
      <Footer />
    </DataContext.Provider>
  );
}

export default App;
