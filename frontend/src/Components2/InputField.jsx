function InputField({ placeholder, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input-field"
    />
  );
}

export default InputField;