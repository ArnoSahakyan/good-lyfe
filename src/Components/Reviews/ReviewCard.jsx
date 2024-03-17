import './ReviewCard.scss'
import PropTypes from 'prop-types';

ReviewCard.propTypes = {
  user: PropTypes.shape(
    {
      review: PropTypes.string,
      body: PropTypes.string,
      name: PropTypes.string,
      condition: PropTypes.string,
      pic: PropTypes.string,
      classname: PropTypes.string
    }
  )
}

export default function ReviewCard({ user }) {
  return (
    <div className={`ReviewCard ReviewCard-${user.classname}`}>
      <h5>{user.review}</h5>
      <p>
        <span><i className="bi bi-quote"></i></span>
        {user.body}
      </p>
      <div className="ReviewCard__user">
        <img src={user.pic} alt={user.name} />
        <p>{user.name} <br /> <span className='condition'>{user.condition}</span></p>
      </div>
    </div>
  )
}
