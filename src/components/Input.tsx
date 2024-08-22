const InputField = ({ value, label, name, placeholder, type, onChange }: any) => (
  <div className="flex flex-col">
    {label ? <label htmlFor={name} className="my-label">{label}</label> : <> </>}
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      required
      className="my-input"
    />
  </div>
);

export default InputField;
