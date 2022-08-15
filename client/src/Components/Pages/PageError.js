import '../Css/Page404.css'

// --------------------------------         PAGINA DE ERROR 404        --------------------------------
function PageError() {
    return (
        <>
            <div className="error">404</div>
            <br /><br />
            <span className="info">Page not found</span>
                <div className="action-link-wrap">
                    <a href="/home" className="link-button">Go to Home Page</a>
                </div>
        </>
    )
}

export default PageError;