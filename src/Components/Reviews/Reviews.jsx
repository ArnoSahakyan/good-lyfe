import { useSelector } from 'react-redux'
import './Reviews.scss'
import ReviewCard from './ReviewCard'

export default function Reviews() {
  const { title, subtitle, users } = useSelector(state => state.reviews)
  return (
    <div className="ReviewsBG">
      <div className='Reviews container'>
        <div className="Reviews__left">
          <i className="bi bi-quote"></i>
          <h3>{title}</h3>
          <p>{subtitle}</p>
          <ReviewCard user={users[0]} />
        </div>
        <div className="Reviews__right">
          <ReviewCard user={users[1]} />
          <ReviewCard user={users[2]} />
        </div>
      </div>
    </div>
  )
}
