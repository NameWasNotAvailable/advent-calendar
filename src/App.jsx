import React, { useState, useEffect } from 'react';
import AdventCalendar from './components/AdventCalendar';
import Snowfall from './components/Snowfall';
import daysData from './data/daysData';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can replace this with actual loading logic)
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration based on your needs

    // Clear the timeout on component unmount to avoid memory leaks
    return () => clearTimeout(loadingTimeout);
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        // Loading screen
        <div className='vtmn-flex vtmn-flex-col vtmn-justify-center vtmn-items-center'>
          <h1 className='vtmn-m-2 vtmn-font-bold vtmn-text-3xl vtmn-text-white'>Loading...</h1>
          <div className="progress-3 vtmn-h-5 vtmn-rounded-xl"></div>
        </div>
      );
    } else {
      // Main content when loading is complete
      return (
        <div>
          <Snowfall /> {/* Render the Snowfall component */}
          <h1 className="vtmn-my-10 vtmn-text-center vtmn-text-5xl vtmn-font-bold vtmn-uppercase gt-small-desktop:vtmn-text-7xl">Advent Calendar</h1>
          <h2 className="vtmn-my-8 vtmn-text-center vtmn-text-4xl gt-small-desktop:vtmn-text-5xl">Merry Devmas Decathlon!</h2>
          <p className="vtmn-mt-8 vtmn-text-center vtmn-text-lg vtmn-text-white gt-small-desktop:vtmn-text-2xl">Discover tips & tricks in JS and CSS every day!*</p>
          <p className="vtmn-mb-8 vtmn-text-center vtmn-text-md vtmn-text-white gt-small-desktop:vtmn-text-lg ">*Please note that quality may vary like advent calendar chocolates</p>
          <AdventCalendar days={daysData} />
        </div>
      );
    }
  };

  return <div className="vtmn-p-4">{renderContent()}</div>;
}

export default App;
