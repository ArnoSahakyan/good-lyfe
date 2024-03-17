import Button from '../Button/Button'
import './Info1.scss'
import {useSelector} from 'react-redux'
export default function Info1() {
    const info1 = useSelector(state => state.info1)
  return (
    <div className='Info1 container'>
        <div className="Info1__images">
            <img className='img1' src="/0.jpg"/>
            <img className='img2' src="/01.jpg"/>
        </div>
        <div className="Info1__content">
            <h4>{info1.title}</h4>
            <p>{info1.description}</p>
            <Button type={'bordered'}>{info1.btn}</Button>
        </div>
    </div>
  )
}