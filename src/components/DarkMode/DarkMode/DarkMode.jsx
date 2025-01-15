/* eslint-disable react/prop-types */

import "./DarkMode.css";

const DarkMode = ({ checked, onChangeMode }) => {
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        checked={checked}
        onChange={onChangeMode}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle"></label>
    </div>
  );
};

export default DarkMode;
