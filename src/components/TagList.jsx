import 'bootstrap/dist/css/bootstrap.min.css';
import TagButton from './TagButton';

const TagList = function () {
    return (
        <div className='card m-4'>
            <div className='d-flex flex-wrap m-1'>
                {[...Array(10)].map((_, index) => (
                    <div key={index}>
                        <TagButton />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TagList;