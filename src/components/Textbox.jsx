import PropTypes from 'prop-types';

export function Textbox({ type, name, value, placeholder, onChange }) {
  return (
    <input
      className="w-[300px] p-3 border-2 border-sky-900 bg-slate-100 text-sky-900 placeholder-gray-600 rounded-lg outline-none hover:border-sky-600 active:border-sky-500 focus:border-sky-900 autofill:bg-none transition-all focus:transition-all"
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
