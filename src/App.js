import "./App.css";
import RemitaPayment from "react-remita";
import { useState, useEffect } from "react";

function App() {
  const [paymentData, setPaymentData] = useState({
    key: "QzAwMDAyNzEyNTl8MTEwNjE4NjF8OWZjOWYwNmMyZDk3MDRhYWM3YThiOThlNTNjZTE3ZjYxOTY5NDdmZWE1YzU3NDc0ZjE2ZDZjNTg1YWYxNWY3NWM4ZjMzNzZhNjNhZWZlOWQwNmJhNTFkMjIxYTRiMjYzZDkzNGQ3NTUxNDIxYWNlOGY4ZWEyODY3ZjlhNGUwYTY=", // enter your key here
    customerId: "",
    firstName: "",
    lastName: "",
    otherName: "",
    email: "",
    amount: 250,
    narration: "Test",
    phoneNumber: "",
    jambNumber: "",
    jambScore: "",
    selectCampus: "",
    program: "",
    session: "",
  });

  const [transactionDetails, setTransactionDetails] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formVisible, setFormVisible] = useState(true);

  // Validation function
  const validateForm = () => {
    const {
      firstName,
      lastName,
      otherName,
      email,
      phoneNumber,
      jambNumber,
      jambScore,
      campus,
      programme,
      session,
    } = paymentData;
    const isValid =
      firstName &&
      lastName &&
      otherName &&
      email &&
      phoneNumber &&
      jambNumber &&
      jambScore &&
      campus &&
      programme &&
      session &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setIsFormValid(isValid);
  };

  useEffect(() => {
    validateForm();
  }, [paymentData]);

  let data = {
    ...paymentData,
    onSuccess: function (response) {
      console.log("Successful Response", response);
      setTransactionDetails(response);
      setFormVisible(false); // Hide the form after success
    },
    onError: function (response) {
      console.log("Error Response", response);
      setTransactionDetails(response);
      setFormVisible(false); // Hide the form after error
    },
    onClose: function () {
      console.log("Payment modal closed");
    },
  };

  const handleChange = (e, field) => {
    const value = e.target.value;
    setPaymentData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCancel = () => {
    setPaymentData({
      key: "QzAwMDAyNzEyNTl8MTEwNjE4NjF8OWZjOWYwNmMyZDk3MDRhYWM3YThiOThlNTNjZTE3ZjYxOTY5NDdmZWE1YzU3NDc0ZjE2ZDZjNTg1YWYxNWY3NWM4ZjMzNzZhNjNhZWZlOWQwNmJhNTFkMjIxYTRiMjYzZDkzNGQ3NTUxNDIxYWNlOGY4ZWEyODY3ZjlhNGUwYTY=", // enter your key here
      customerId: "",
      firstName: "",
      lastName: "",
      otherName: "",
      email: "",
      amount: 250,
      narration: "Test",
      phoneNumber: "",
      jambNumber: "",
      jambScore: "",
      campus: "",
      programme: "",
      session: "",
    });
    setTransactionDetails(null);
    setFormVisible(true); // Show the form again
  };

  const formatLabel = (label) => {
    return label
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  };

  const requiredFields = [
    "reference",
    "applicationNo",
    "firstName",
    "lastName",
    "otherName",
    "email",
    "phoneNumber",
    "programme",
    "campus",
    "session",
    "amount",
    "paymentReference",
  ];

  return (
    <div className="App">
      <>
        {formVisible ? (
          <div className="form-container">
            <div className="logo">
              <img
                src="https://via.placeholder.com/50"
                alt="Company"
                className="company-logo"
              />
            </div>
            <h4>POST UTME FORM</h4>
            <div className="form-group">
              <input
                type="text"
                placeholder=" "
                onChange={(e) => handleChange(e, "firstName")}
                value={paymentData.firstName}
                required
              />
              <label>First name</label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder=" "
                onChange={(e) => handleChange(e, "lastName")}
                value={paymentData.lastName}
                required
              />
              <label>Last name</label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder=" "
                onChange={(e) => handleChange(e, "otherName")}
                value={paymentData.otherName}
                required
              />
              <label>Other name</label>
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder=" "
                onChange={(e) => handleChange(e, "email")}
                value={paymentData.email}
                required
              />
              <label>Email</label>
            </div>
            <div className="form-group">
              <input
                type="tel"
                placeholder=" "
                onChange={(e) => handleChange(e, "phoneNumber")}
                value={paymentData.phoneNumber}
                required
              />
              <label>Phone Number</label>
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder=" "
                onChange={(e) => handleChange(e, "jambNumber")}
                value={paymentData.jambNumber}
                required
              />
              <label>JAMB Number</label>
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder=" "
                onChange={(e) => handleChange(e, "jambScore")}
                value={paymentData.jambScore}
                required
              />
              <label>JAMB Score</label>
            </div>
            <div className="form-group">
              <select
                onChange={(e) => handleChange(e, "campus")}
                value={paymentData.selectCampus}
                required
              >
                <option value="">Select Campus</option>
                <option value="Main Campus">Main Campus</option>
                <option value="Campus 1 (UK)">Campus 1 (UK)</option>
                <option value="Campus 2">Campus 2</option>
                <option value="Campus 3">Campus 3</option>
              </select>
            </div>
            <div className="form-group">
              <select
                onChange={(e) => handleChange(e, "programme")}
                value={paymentData.program}
                required
              >
                <option value="">Select Program</option>
                <option value="ND Nursing">ND Nursing</option>
                <option value="BSc Nursing">BSc Nursing</option>
                <option value="MSc Nursing">MSc Nursing</option>
                <option value="PhD Nursing">PhD Nursing</option>
              </select>
            </div>
            <div className="form-group">
              <select
                onChange={(e) => handleChange(e, "session")}
                value={paymentData.session}
                required
              >
                <option value="">Select Session</option>
                <option value="2022/2023">2022/2023</option>
                <option value="2023/2024">2023/2024</option>
                <option value="2024/2025">2024/2025</option>
              </select>
            </div>
            <div className="btn-container">
              <button className="btn cancel" onClick={handleCancel}>
                Cancel
              </button>
              <RemitaPayment
                remitaData={data}
                className={`btn pay ${!isFormValid ? "disabled" : ""}`}
                text="Pay"
                disabled={!isFormValid}
              />
            </div>
            <p>~ Secured by Remita ~</p>
          </div>
        ) : (
          <div className="transaction-details transaction-container">
            <h4>Transaction Receipts</h4>
            <table>
              <tbody>
                {requiredFields.map((field, index) => {
                  const value =
                    transactionDetails && transactionDetails[field]
                      ? transactionDetails[field]
                      : paymentData[field];

                  return (
                    <tr key={field} className={index % 2 === 0 ? "light-row" : "dark-row"}>
                      <td className="label">{formatLabel(field)}</td>
                      <td className="value">{value}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="important-notice">
              <span>Important! </span>Please print or screenshot this page for your records.
            </div>
            <div className="btn-container">
              <button className="btn print" onClick={handlePrint}>
                Print
              </button>
              <button className="btn proceed" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default App;
