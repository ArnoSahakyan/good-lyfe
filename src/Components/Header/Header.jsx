import './Header.scss'
import Button from "../Button/Button";
import Sliders from '../Sliders/Sliders';

export default function Header() {
  const pictures = ['slider1.jpg', 'slider2.jpg', 'slider3.jpg', 'slider4.jpg', 'slider5.jpg'];
  
  return (
    <div className='Header'>
      <Sliders pictures={pictures} />
      <div className="content">
        <h1>Welcome to Good<span>lyfe</span> Gyms</h1>
        <Button type={'colored'}>See the benefits</Button>
      </div>
    </div>
  )
}
