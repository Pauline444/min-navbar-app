import { useState } from 'react'
import './App.css'
import Navbaren from './components/Navbaren';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Header from './components/Header';
import TagList from './components/TagList';


function App() {
  const [activePage, setActivePage] = useState('welcome');

  return (
    <>
      <div>
        <Navbaren onSelectPage={setActivePage} />
      </div>
      <div>
        <Header />
      </div>

      <div className="container-fluid">
        <div className="row">
          {/* Sidebar - full bredd på mobil (col-12), 3 kolumner på större skärmar (col-md-3) */}
          <div className="col-12 col-md-2 bg-light">
            <Sidebar onSelectPage={setActivePage} />
          </div>

          {/* MainContent - full bredd på mobil (col-12), 9 kolumner på större skärmar (col-md-9) */}
          <div className="col-12 col-md-7">
            <MainContent activePage={activePage} />
          </div>

          {/* Buttons Component till höger */}
          <div className="col-12 col-md-3">
            <TagList />
          </div>
        </div>
      </div>



    </>
  )
}

export default App
