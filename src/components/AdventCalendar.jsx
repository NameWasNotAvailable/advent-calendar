import React, { useState, useEffect } from 'react';
import CodeHighlighter from './CodeHighLighter';
import { handleCardClick, updateClickedIndices, handleWrongCardClick, playXmasAudio } from './AdventCalendar.utils';

const AdventCalendar = ({ days,onKonamiCodeActivation }) => {
  const [clickedIndices, setClickedIndices] = useState([]);
  const [shake, setShake] = useState(false);
  const [konamiCode, setKonamiCode] = useState('');
  const [konamiCodeActivated, setKonamiCodeActivated] = useState(false);

  const startDate = new Date('2023-12-01');
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 24);
  const currentDate = new Date();

  useEffect(() => {
    playXmasAudio('/assets/Xmas.mp3', clickedIndices);

 if (konamiCode.toLowerCase() === 'dkt') {

  setKonamiCodeActivated(true);
  // Call the callback to handle Konami code activation
  onKonamiCodeActivation();
  // Reset the Konami code state
  setKonamiCode('');
} else if (konamiCode.length === 3) {
  alert('You are on the right track ... ')
  handleWrongCardClick('/assets/wrong.mp3', setShake);
  // Reset the Konami code state for the next attempt
  
  setKonamiCode('');
}
}, [konamiCode, clickedIndices]);

  const handleKeyPress = (event) => {
    // Update the Konami code state when a key is pressed
    setKonamiCode((prevCode) => (prevCode + event.key).slice(-3));
  };

  useEffect(() => {
    // Add a keypress event listener
    window.addEventListener('keypress', handleKeyPress);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  return (
    <div className="vtmn-my-3 vtmn-grid vtmn-grid-cols-1 vtmn-gap-5 gt-small-desktop:vtmn-grid-cols-2 gt-small-desktop:vtmn-gap-7">
      {days.map((day, index) => {
        const cardDate = new Date(startDate);
        cardDate.setDate(startDate.getDate() + index);

        // Check if the current date is after the card date
        const isCardPassed = currentDate >= cardDate;

        return (
          <div
            key={index}
            className={` vtmn-max-w-2xl vtmn-rounded-lg vtmn-p-1 b-game-card ${clickedIndices.includes(index) ? 'clicked' : ''}${shake ? 'shake' : ''}`}
            onClick={() => handleCardClick(index, startDate, currentDate, clickedIndices, setClickedIndices, updateClickedIndices, () => handleWrongCardClick('/assets/wrong.mp3', setShake))}
          >
            <div
              className="b-game-card__cover vtmn-absolute vtmn-top-0 vtmn-left-0 vtmn-rounded-lg vtmn-flex vtmn-justify-center vtmn-items-center vtmn-align-center vtmn-shadow-md"
              style={{ backgroundImage: konamiCodeActivated ? 'url("/assets/colors.jpg")' : 'url("/assets/Xmas.jpg")' }}
            >
              <p className="ribbon">
                <span className="text vtmn-text-4xl vtmn-text-white">{index + 1} December</span>
              </p>
            </div>

            <div className="vtmn-mt-6">
              {isCardPassed ? (
                <React.Fragment>
                  <h3 className='vtmn-px-4 vtmn-mb-3 vtmn-text-4xl'>{day.title}</h3>
                  <p className='vtmn-px-4 vtmn-text-md vtmn-text-white'>{day.description}</p>
                  <CodeHighlighter language={day.language} code={day.codeSnippet}>{day.codeSnippet}</CodeHighlighter>
                  <div className='button vtmn-mx-4 vtmn-my-6 vtmn-py-2 vtmn-px-4 vtmn-border vtmn-text-white vtmn-uppercase vtmn-rounded-full'>
                    <a href={day.descriptionHref} target="_blank" rel="noopener noreferrer">Learn more</a>
                  </div>

                </React.Fragment>
              ) : (
                <React.Fragment>
                  <h3 className='vtmn-px-4 vtmn-mb-3 vtmn-text-4xl'>Don't Rushmas Code Quest! ⏳🚀🎄</h3>
                  <p className='vtmn-px-4 vtmn-text-md vtmn-text-white'>Couldn't resist the temptation, huh? It's hard waiting for that next dev surprise! May your sneak peeks be forgiven, and your debugging skills shine as bright as Rudolph's nose ✨🦌</p>
                </React.Fragment>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdventCalendar;