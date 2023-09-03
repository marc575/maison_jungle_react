import '../styles/banner.css';
import logo from '../assets/logo.png'

function Banner() {
    const title = 'La maison jungle'
    const month = new Date().getMonth()
    return (
        <div className='lmj-banner'>
            <img src={logo} alt="la maison jungle" className='lmj-logo' />
            <h1 className='lmj-title'>{title}</h1>
            {month > 1 && month < 6 && <div>Nous sommes au printemps : c'est le moment idéal pour rempoter !</div>}
        </div>
    )
}
export default Banner

