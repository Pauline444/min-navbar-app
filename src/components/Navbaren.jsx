import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Egen CSS för ev. justeringar


const Navbaren = ({ onSelectPage }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" style={{ fontSize: 'larger' }} onClick={() => onSelectPage('home')} href="#">MyApp</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-underline d-flex align-items-center justify-content-md-center w-100 px-5">
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => onSelectPage('home')}>Home</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => onSelectPage('about')}>About</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => onSelectPage('contact')}>Contact Us</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};


export default Navbaren;
