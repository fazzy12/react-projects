import logo from './images/air-bnb-logo.png';

export default function Navbar(){
    return (
        <nav>
            <img src={logo} alt='airbnb logo' className='nav-logo'/>
        </nav>
    )

}