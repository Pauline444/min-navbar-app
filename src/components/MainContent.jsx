import React from 'react';
import PostList from './PostList';
import About from './About';
import Contact from './Contact';
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';

const MainContent = ({ activePage }) => {
    let content;

    switch (activePage) {
        case 'about':
            content =
                <div>
                    <About />
                </div>
            break;
        case 'contact':
            content =
                <div>
                    <Contact />
                </div>
            break;
        case 'post':
            content =
                <div>
                    <PostList />
                </div>
            break;
        case 'task1':
            content =
                <div>
                    <Task1 />
                </div>
            break;
        case 'task2':
            content =
                <div>
                    <Task2 />
                </div>
            break;
        case 'task3':
            content =
                <div>
                    <Task3 />
                </div>
            break;
        default:
            content = (
                <div className='container'>
                    <PostList />
                </div>
            );
    }

    return (
        <div className="flex-grow-1">
            {content}
        </div>
    );
};

export default MainContent;
