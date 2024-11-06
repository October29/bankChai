import React from 'react';
import style from "./input_text_field.module.css";

const InputTextField = ({inputData, placeholderText, setInput, typeInput }) => {
  return (
    <input className={style.input_text}
      value={inputData}
      onChange={(e) => setInput(e.target.value)}
      type={typeInput}
      placeholder={placeholderText}
      name={typeInput}
    />
  )
}

export default InputTextField