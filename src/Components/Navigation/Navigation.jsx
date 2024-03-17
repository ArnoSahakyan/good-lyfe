import { useSelector } from 'react-redux'
import './Navigation.scss'
import Button from '../Button/Button'

export default function Navigation() {
  const navigation = useSelector(state => state.nav)
  return (
    <div className='NavigationBG'>
      <div className="Navigation">
        <a href="#"><h4>{navigation.title1}<span>{navigation.title2}</span></h4></a>

        <ul className='Navigation__menu'>
          {
            navigation.menu.map((elem) => {
              return <li key={elem}>{elem}</li>
            })
          }
        </ul>
        <div className="Navigation__btns">
          <Button type={'simple'}>Search <i className="bi bi-search"></i></Button>
          <Button type={'bordered'}>Login</Button>
        </div>
      </div>
    </div>
  )
}
