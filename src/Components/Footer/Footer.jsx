import { useSelector } from 'react-redux'
import './Footer.scss'

export default function Footer() {
  const { description, categories, copyright, links } = useSelector(state => state.footer)
  return (
    <div className='FooterBG'>
      <div className="Footer container">
        <div className="FooterUp">
          <div className="FooterUp__info">
            <h5>Good<span>lyfe</span></h5>
            <p>{description}</p>
            <ul>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-dribbble"></i>
              <i className="bi bi-twitter-x"></i>
              <i className="bi bi-youtube"></i>
            </ul>
          </div>

          {
            categories.map(list => {
              return <div className="FooterUp__list" key={list.title}>
                <p>{list.title}</p>
                <ul>
                  {list.subtitles.map((elem, index) => {
                    return (
                      <li key={index}>
                        {elem}
                      </li>
                    );
                  })}
                </ul>
              </div>
            })
          }

          <div className="FooterUp__list">
            <p>Reach us</p>
            <ul className='reach'>
              <li> <img src="/icon1.png" /> admin@goodlyfe.co </li>
              <li> <img src="/icon2.png" /> +88 98765 43210 </li>
              <li> <img src="/icon3.png" /> 90210 Beverly Hills <br /> California USA </li>
            </ul>
          </div>

        </div>

        <div className="FooterDown">
          <p>{copyright}</p>
          <ul>
            {
              links.map((link, index) => {
                return <li key={index}>{link}</li>
              })
            }
          </ul>
        </div>

      </div>
    </div>
  )
}
