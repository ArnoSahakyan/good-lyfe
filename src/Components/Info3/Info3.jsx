import './Info3.scss'
import { useSelector } from 'react-redux'
export default function Info3() {
    const info3 = useSelector(state => state.info3)
    return (
        <div className="Info3BG">
            <div className="Info3 container">
                <div className="Info3__content">
                    <h4>{info3.title}</h4>
                    <p>{info3.description}</p>
                    <span>{info3.download}</span>
                    <div className="downloads">
                        <img src="/googlePlay.png" />
                        <img src="/appleStore.png" />
                    </div>
                </div>

                <img className='Info3__image' src="/MobilesPhones.png" />

            </div>
        </div>

    )
}
