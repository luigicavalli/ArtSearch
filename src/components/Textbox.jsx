import PropTypes from 'prop-types';

export function Textbox({ type, name, value, placeholder, onChange }) {
  return (
    <input
      className=""
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

Textbox.propTypes = {
  type: PropTypes.oneOf(['text', 'password']).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
