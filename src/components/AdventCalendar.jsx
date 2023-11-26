import React, { useState, useEffect } from 'react';
import CodeHighlighter from './CodeHighLighter';
import { handleCardClick, updateClickedIndices, handleWrongCardClick, playXmasAudio } from './AdventCalendar.utils';

const AdventCalendar = ({ days }) => {
  const [clickedIndices, setClickedIndices] = useState([]);
  const [shake, setShake] = useState(false);
  

  const startDate = new Date('2023-11-10');
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 24);
  const currentDate = new Date();

  useEffect(() => {
    playXmasAudio('src/assets/Xmas.mp3', clickedIndices);
  }, [clickedIndices]);

  return (
    <div className="vtmn-grid vtmn-grid-cols-1 vtmn-gap-5 gt-small-desktop:vtmn-grid-cols-2 gt-small-desktop:vtmn-gap-7">
      {days.map((day, index) => (
        <div
          key={index}
          className={`vtmn-rounded-lg vtmn-p-1 b-game-card ${clickedIndices.includes(index) ? 'clicked' : ''}${shake ? 'shake' : ''}`}
          onClick={() => handleCardClick(index, startDate, currentDate, clickedIndices, setClickedIndices, updateClickedIndices, () => handleWrongCardClick('src/assets/wrong.mp3', setShake))}
        >
          <div
            className="b-game-card__cover vtmn-absolute vtmn-top-0 vtmn-left-0 vtmn-rounded-lg vtmn-flex vtmn-justify-center vtmn-items-center vtmn-align-center vtmn-shadow-md"
          >
            <p className="ribbon">
              <span className="text vtmn-text-4xl vtmn-text-white">{index + 1} December</span>
            </p>
          </div>
          <div className="vtmn-mt-6">
            <CodeHighlighter language="javascript">{day.codeSnippet}</CodeHighlighter>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdventCalendar;
