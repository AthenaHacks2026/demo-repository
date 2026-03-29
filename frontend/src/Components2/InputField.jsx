function InputField({
  placeholder,
  value = "",
  onChange,
  readOnly = false,
  type = "text",
}) {
  return (
    <input
      className="input-field"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  );
}

export default InputField;