import React, { useRef, useEffect, useState } from "react";
import "./switch.css";

function Switch() {
  const [checked, setChecked] = useState(false);

  function handleChange() {
    setChecked(!checked);
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setChecked(true);
    }
  }, []);

  useEffect(() => {
    if (checked) {
      document.body.classList.remove("is-light-mode");
      document.body.classList.add("is-dark-mode");
    } else {
      document.body.classList.remove("is-dark-mode");
      document.body.classList.add("is-light-mode");
    }
  }, [checked]);

  return (
    <div className="container-modo">
      <p>Dark Mode</p>
      <div className="container-dark-mode">
        <input
          checked={checked}
          onChange={handleChange}
          className="checkbox"
          type="checkbox"
          id="checkbox"
        />
        <label className="switch" htmlFor="checkbox"></label>
      </div>
    </div>
  );
}
export default Switch;

// useRef = tener la referencia de cualquier cosa
