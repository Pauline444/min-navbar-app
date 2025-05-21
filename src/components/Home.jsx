

const Home = () => {
    return (
        <div className='container'>
            <h2 className='mt-4 mb-3 display-6'>Välkommen till min React+Vite App!</h2>
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
        </div>
    );
}

export default Home;