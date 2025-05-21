// PostList.jsx
import Post from './Post';

const PostList = () => {
    // Exempeldata – kan komma från API eller props i framtiden
    const posts = [
        {
            title: 'Nyheter från React-kursen',
            body: 'Omnis deserunt mollitia veniam provident amet cupiditate. Odit libero numquam qui dicta. Quae ut perferendis natus laudantium repudiandae laborum voluptatem qui. Sed quis numquam beatae nam vel. Quam qui sit nemo ut aut quis. Sequi consequatur earum velit eos et vel. Repudiandae praesentium numquam consequatur aperiam consequatur vitae perferendis.Repellat ducimus aut voluptatem assumenda id consequuntur deserunt.Nemo laborum voluptas doloribus consectetur fugiat veritatis aut occaecati.In iure et quia dolores non neque.Quo quo consequatur fugit incidunt quia.'
        },
        {
            title: 'Vad vi lärde oss denna vecka',
            body: 'Recusandae repellendus quis possimus aut nulla et. Non expedita iusto quibusdam qui laborum sint aperiam fugiat. Eveniet assumenda omnis voluptates ut itaque et voluptatibus. Fugiat modi iusto dolorem distinctio fugit. Nemo quod reprehenderit eos. Quia sed id neque corporis. Neque deleniti quis vero aut. Similique incidunt aut et magni nesciunt dolorem consectetur. Perspiciatis aliquid provident eum. Temporibus recusandae saepe qui. Ipsum aspernatur illum corporis voluptatem laudantium.'
        },
        {
            title: 'Nästa steg i projektet',
            body: 'Recusandae repellendus quis possimus aut nulla et. Non expedita iusto quibusdam qui laborum sint aperiam fugiat. Eveniet assumenda omnis voluptates ut itaque et voluptatibus. Fugiat modi iusto dolorem distinctio fugit. Nemo quod reprehenderit eos. Quia sed id neque corporis. Neque deleniti quis vero aut. Similique incidunt aut et magni nesciunt dolorem consectetur. Perspiciatis aliquid provident eum. Temporibus recusandae saepe qui. Ipsum aspernatur illum corporis voluptatem laudantium.'
        }
    ];

    return (
        <div className="d-flex flex-column">
            {posts.map((post, index) => (
                <Post key={index} title={post.title} body={post.body} />
            ))}
        </div>
    );
};

export default PostList;
