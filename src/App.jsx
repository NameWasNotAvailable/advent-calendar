import React, { useState, useEffect } from 'react';
import AdventCalendar from './components/AdventCalendar';
import Snowfall from './components/Snowfall';
import daysData from './data/daysData';

function App() {
  const [loading, setLoading] = useState(true);
  const [konamiCodeActivated, setKonamiCodeActivated] = useState(false);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  const handleKonamiCodeActivation = () => {
    setKonamiCodeActivated(true);
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className='vtmn-flex vtmn-flex-col vtmn-justify-center vtmn-items-center'>
          <h1 className='vtmn-m-2 vtmn-font-bold vtmn-text-3xl vtmn-text-white'>Loading...</h1>
          <div className="progress-bar vtmn-h-5 vtmn-rounded-xl"></div>
        </div>
      );
    } else {
      return (
        <div>
          <Snowfall konamiCodeActivated={konamiCodeActivated} />
          <h1 className="vtmn-my-5 vtmn-text-center vtmn-text-5xl vtmn-font-bold vtmn-uppercase gt-small-desktop:vtmn-my-10 gt-small-desktop:vtmn-text-7xl">Advent Calendar</h1>
          <h2 className="vtmn-my-3 vtmn-text-center vtmn-text-4xl gt-small-desktop:vtmn-my-8 gt-small-desktop:vtmn-text-5xl"> Merry Devmas Decathlon!</h2>
          <p className="vtmn-mt-5 vtmn-text-center vtmn-text-lg vtmn-text-white gt-small-desktop:vtmn-mt-8 gt-small-desktop:vtmn-text-2xl">Discover tips & tricks every day!</p>
          <p className="vtmn-mb-5 vtmn-text-center vtmn-text-md vtmn-text-white gt-small-desktop:vtmn-mb-8 gt-small-desktop:vtmn-text-lg ">Oh and maybe there's a little easter egg ... 👆</p>
          <AdventCalendar
            days={daysData}
            onKonamiCodeActivation={handleKonamiCodeActivation}
          />
          <p className='vtmn-mt-8 vtmn-text-center vtmn-text-white vtmn-font-bold '>V2.0.0 ❤️</p>
        </div>
      );
    }
  };

  return <div className="vtmn-p-4">{renderContent()}</div>;
}

export default App;
