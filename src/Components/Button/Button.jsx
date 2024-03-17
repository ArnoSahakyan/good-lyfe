import PropTypes from 'prop-types';
import './Button.scss'

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default function Button({ type, children }) {
  return (
    <button className={`btn ${type}`}>{children}</button>
  )
}
