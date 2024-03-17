import Button from '../Button/Button'
import './Info2.scss'
import { useSelector } from 'react-redux'
export default function Info2() {
  const info2 = useSelector(state => state.info2)
  return (
    <div className='Info2 container'>
      <div className="Info2__content">
        <h4>{info2.title}</h4>
        <p>{info2.description}</p>
        <Button type={'bordered'}>{info2.btn}</Button>
      </div>
      <div className="Info2__images">
        <img className='img1' src="/02.jpg" />
        <img className='img2' src="/03.jpg" />
      </div>
    </div>
  )
}