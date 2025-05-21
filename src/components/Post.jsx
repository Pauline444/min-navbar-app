
const Post = ({ title, body }) => {
    return (
        <div className="card p-3 m-3 mt-4 shadow-sm">
            <h2 className="p-3">{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default Post;
