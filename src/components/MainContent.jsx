import React from 'react';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

const MainContent = ({ activePage }) => {
    let content;

    switch (activePage) {
        case 'about':
            content =
                <div>
                    <h2>About</h2>
                    <p className='lead'>Pauline Pettersson</p>
                    <div className="d-flex justify-content-center mt-4 mb-5">
                        <div className="card shadow-sm border-0 bg-light">
                            <div className="card-body">
                                <h5 className="card-title text-primary pb-4">Frontend utvecklare med React</h5>
                                <p className="card-text fs-6">
                                    Nulla facilisi. Proin porta mauris nec blandit sollicitudin. Sed ac eros nec ligula gravida fermentum. Duis nec nisl nec ante tempus convallis ut ut eros.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>;
            break;
        case 'contact':
            content =
                <div>
                    <h2>Contact</h2>
                    <div className="d-flex justify-content-center mt-4 mb-5">
                        <div className="card shadow-sm border-0 bg-light">
                            <div className="card-body">
                                <h5 className="card-title text-primary pb-4">Mina kontaktuppgifter</h5>
                                <p className="card-text fs-6">
                                    Nulla facilisi. Proin porta mauris nec blandit sollicitudin. Sed ac eros nec ligula gravida fermentum. Duis nec nisl nec ante tempus convallis ut ut eros.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>;
            break;
        case 'home':
            content = <div className='container'>
                <h2 className='mt-4 mb-3 display-6'>Välkommen till min React+Vite App!</h2>
                <a href="https://vite.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <p className='lead mt-4 mb-5'>Jag är frontendstudent och håller just nu på att lära mig <strong>React</strong> med <strong>Vite</strong> som utvecklingsmiljö. Syftet med det här projektet är att förstå hur man strukturerar en React-applikation med hjälp av komponenter, props och state.</p>
                <h5 className="text-primary">I projektet har jag:</h5>
                <div className="d-flex justify-content-center mt-4 mb-4">
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Skapat en React-app med hjälp av <strong>Vite</strong>, som ger en snabb och modern utvecklingsmiljö.</li>
                            <li className="list-group-item">Använt <strong>JSX</strong> för att bygga upp strukturen i komponenterna.</li>
                            <li className="list-group-item">Arbetat med <strong>Bootstrap</strong> för att snabbt skapa en responsiv layout som fungerar på dator och mobil.</li>
                            <li className="list-group-item">Lärt mig hur man använder Bootstrap-klasser direkt i JSX, samt hur man kombinerar det med egen CSS vid behov.</li>
                            <li className="list-group-item">Delat upp projektet i komponenter: <code>Navbar</code>, <code>Sidebar</code> och <code>MainContent</code>.</li>
                            <li className="list-group-item">Använt <code>useState</code> för att visa olika innehåll beroende på vad användaren klickar på.</li>
                        </ul>
                    </div>
                </div>
            </div>;
            break;
        case 'task1':
            content = (
                <div className="container">
                    <h2 className="display-6 m-5">Uppgift 1</h2>

                    <p className="lead m-4">
                        Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Vestibulum eget velit quis nisl facilisis suscipit. Integer in fermentum diam.
                    </p>

                    <div className="d-flex justify-content-center m-3 mb-5">
                        <div className="card shadow-sm border-0 bg-light">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Vad jag har lärt mig i denna uppgift</h5>
                                <p className="card-text fs-6">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo nunc a sem cursus, in condimentum magna facilisis. Suspendisse et mattis nulla, non sollicitudin eros.
                                </p>
                                <p className="card-text text-muted">
                                    Sed id ultrices metus. Pellentesque sit amet dignissim erat. In quis justo blandit, fermentum lectus nec, placerat justo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
            break;
        case 'task2':
            content = (
                <div className="container">
                    <h2 className="display-6 m-5">Uppgift 2</h2>

                    <p className="lead m-4">
                        Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Vestibulum eget velit quis nisl facilisis suscipit. Integer in fermentum diam.
                    </p>

                    <div className="d-flex justify-content-center m-3 mb-5">
                        <div className="card shadow-sm border-0 bg-light">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Vad jag har gjort i denna uppgift</h5>
                                <p className="card-text fs-6">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo nunc a sem cursus, in condimentum magna facilisis. Suspendisse et mattis nulla, non sollicitudin eros.
                                </p>
                                <p className="card-text text-muted">
                                    Sed id ultrices metus. Pellentesque sit amet dignissim erat. In quis justo blandit, fermentum lectus nec, placerat justo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
            break;
        case 'task3':
            content = (
                <div className="container">
                    <h2 className="display-6 m-5">Uppgift 3</h2>

                    <p className="fs-5 m-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et enim eu felis fringilla tincidunt. Cras fermentum, tellus id egestas pulvinar, lorem quam accumsan sapien, in sodales lorem neque ac risus.
                    </p>

                    <div className="d-flex justify-content-center mt-4 mb-5">
                        <div className="card shadow-sm border-0 bg-light">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Beskrivning av uppgiftens innehåll</h5>
                                <p className="card-text fs-6">
                                    Nulla facilisi. Proin porta mauris nec blandit sollicitudin. Sed ac eros nec ligula gravida fermentum. Duis nec nisl nec ante tempus convallis ut ut eros.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
            break;
        default:
            content = (
                <div className='container'>
                    <h1 className='m-5 display-5'>Välkommen till min React+Vite App!</h1>
                    <a href="https://vite.dev" target="_blank" rel="noreferrer">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank" rel="noreferrer">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                    <p className='lead mt-4 mb-5 fs-3'>Vänligen navigera runt i min React + Vite App för att läsa mer om mig och se hur jag byggt upp denna App.</p>
                </div>
            );

    }

    return (
        <div className="flex-grow-1 p-4">
            {content}
        </div>
    );
};

export default MainContent;
