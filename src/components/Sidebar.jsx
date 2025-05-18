
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css'; // Egen CSS för ev. justeringar


const Sidebar = ({ onSelectPage }) => {
    return (
        <div className="sidebar d-flex justify-content-center justify-content-md-start p-3 bg-light">
            <ul className="list-unstyled list-group list-group-flush flex-md-column flex-row">
                <li className="nav-item">
                    <button className="nav-link btn btn-link" onClick={() => onSelectPage('home')}>
                        Välkommen
                    </button>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn btn-link" onClick={() => onSelectPage('task2')}>
                        Uppgift 2
                    </button>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn btn-link" onClick={() => onSelectPage('task3')}>
                        Uppgift 3
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
