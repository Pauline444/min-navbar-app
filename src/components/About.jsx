

const About = () => {
    return (
        <div className="m-4">
            <h2>About</h2>
            <p className='lead pb-4'>Pauline Pettersson</p>
            <div className="d-flex justify-content-center">
                <div className="card shadow-sm border-0 bg-light">
                    <div className="card-body">
                        <h5 className="card-title text-primary m-3">Frontend utvecklare med React</h5>
                        <div className="card-text fs-6">
                            <p className='lead'>Jag är frontendstudent och håller just nu på att lära mig <strong>React</strong> med <strong>Vite</strong> som utvecklingsmiljö. Syftet med det här projektet är att förstå hur man strukturerar en React-applikation med hjälp av komponenter, props och state.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;