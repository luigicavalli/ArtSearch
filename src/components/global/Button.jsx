import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function Button({ type, text, width, onClick, to }) {
  const style = "w-[300px] p-3 border-2 border-sky-900 rounded-lg font-semibold text-center bg-sky-900 text-white hover:bg-slate-100 hover:text-sky-900 hover:border-bg-sky-900 transition-all active:bg-sky-900 active:text-white"

  return to ? (
    <Link className={style} to={to} style={{ width: width }}>
      {text}
    </Link>
  ) : (
    <button
      className={style}
      type={type}
      onClick={onClick}
      style={{ width: width }}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func,
  width: PropTypes.string,
  to: PropTypes.string
};

Button.defaultProps = {
  width: '300px',
};
