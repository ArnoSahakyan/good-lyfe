import './Slider2.scss'
import Button from "../Button/Button";
import Sliders from "../Sliders/Sliders";
import { useSelector } from 'react-redux'
const pictures = ['0.jpg', 'slider10.jpg', 'slider7.jpg', 'slider8.jpg', 'slider9.jpg'];

export default function Slider2() {
    const slider2 = useSelector(state => state.slider2)
    return (
        <div className="Slider2">
            <Sliders pictures={pictures} />
            <div className="Slider2__content">
                <h2>{slider2.title}</h2>
                <p>{slider2.description1} <br /> {slider2.description2}</p>
                <Button type={'colored'}>{slider2.btn}</Button>
            </div>
        </div>
    )
}
