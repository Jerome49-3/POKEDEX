// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Input = ({
  label,
  value,
  id,
  type,
  placeholder,
  setState,
  min,
  max,
  classInput,
}) => {
  const handleChange = (e) => {
    setState(e.target.value);
  };
  return (
    <>
      {label ? (
        <div>
          <label htmlFor={id}>{label}</label>
        </div>
      ) : null}
      <input
        id={id}
        type={type}
        name={id}
        placeholder={placeholder}
        min={min}
        max={max}
        onChange={handleChange}
        value={value}
        className={classInput}
      />
    </>
  );
};

export default Input;
