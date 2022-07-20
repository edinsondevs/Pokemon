import { Link } from 'react-router-dom';
import '../Css/LandingPage.css'
import Portada from '../Images/portada_2.png'

function LandingPage() {
    return (
        <div className='contenedor'>
            <div>
                <Link to='/home' className='neon' >
                LET'S SEE MORE OF POKEMON
                </Link>
                <img src={Portada} alt="" className='cmp-landingPage' />    
            </div>
        </div>
    );
}

export default LandingPage;