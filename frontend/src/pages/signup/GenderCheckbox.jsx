import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex mt-2 gap-4">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text text-black">Male</span>
          <input
            type="checkbox"
            className={`checkbox border-slate-900 ${selectedGender === 'male' ? 'selected' : ""}`}
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text text-black">Female</span>
          <input
            type="checkbox"
            className={`checkbox border-slate-900 ${selectedGender === 'female' ? 'selected' : ""}`}
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
