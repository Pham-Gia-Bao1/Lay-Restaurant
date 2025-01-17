import React from 'react';
import "./PayCheckBox.css";
interface CheckboxProps {
  checked: boolean;
  setChecked: (newValue: boolean) => void;
}

const PayCheckBox: React.FC<CheckboxProps> = ({ checked, setChecked }) => {
  const handleCheckboxChange = () => {
    setChecked(!checked); // Toggle the checked state when clicked
  };

  return (
    <div className="checkbox-wrapper-31" onClick={handleCheckboxChange}>
      <input type="checkbox" checked={checked} onChange={() => {}} />
      <svg viewBox="0 0 35.6 35.6">
        <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
        <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
        <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
      </svg>
    </div>
  );
};

export default PayCheckBox;
