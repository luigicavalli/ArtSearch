import PropTypes from 'prop-types';

export function Button({ type, text, onClick }) {
  return (
    <button
      className="w-[300px] p-3 border-2 border-sky-900 rounded-lg font-semibold bg-sky-900 text-white hover:bg-white hover:text-sky-900 hover:border-bg-sky-900 transition-all active:bg-sky-900 active:text-white"
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func,
};
