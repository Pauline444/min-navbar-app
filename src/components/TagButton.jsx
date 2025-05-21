import 'bootstrap/dist/css/bootstrap.min.css';

const TagButton = function () {
    const handleClick = () => {
        console.log('Button clicked!');
    };
    return (
        <div className='card p-1 m-1 bg-dark text-light'>
            <button className="btn nav-link" onClick={handleClick}>
                Click Tag BTN
            </button>
        </div>
    );
}


export default TagButton;