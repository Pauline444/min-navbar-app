import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from './Buttons';

const SideMenu = function () {
    return (
        <div className='card m-4'>
            <div className='d-flex flex-wrap m-1'>
                {[...Array(10)].map((_, index) => (
                    <div key={index}>
                        <Buttons />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SideMenu;