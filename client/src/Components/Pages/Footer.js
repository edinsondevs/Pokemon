import Github from "../Icons/Github";
import LinkedIn from '../Icons/LinkedIn.js';
import Email from '../Icons/Email.js';
import "../Css/Footer.css"

function Footer() {
    return ( 
        <div className="container">
            <div className="child-container">
                <Github />
                <LinkedIn />
                <Email /> 
            </div>
        </div>
     );
}

export default Footer;