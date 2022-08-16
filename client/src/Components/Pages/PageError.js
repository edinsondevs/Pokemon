import '../Css/Page404.css'
import { useHistory } from "react-router-dom";

// --------------------------------         PAGINA DE ERROR 404        --------------------------------
function PageError() {
    const history = useHistory();
    return (
        <>
            <div className="error">404</div>
            <br /><br />
            <span className="info">Page not found</span>
                <div className="action-link-wrap">
                    <button className="link-button" onClick={() => history.push("/home")}>Go to Home Page</button>
                </div>
        </>
    )
    
}

export default PageError;