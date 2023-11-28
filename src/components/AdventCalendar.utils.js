export const handleCardClick = (index, startDate, currentDate, clickedIndices, setClickedIndices, updateClickedIndices, handleWrongCardClick) => {
    const cardDate = new Date(startDate);
    cardDate.setDate(startDate.getDate() + index );
  
    if (currentDate >= cardDate) {
      updateClickedIndices(index, clickedIndices, setClickedIndices);
    } else if (currentDate < cardDate) {
      handleWrongCardClick();
    }
  };
  
  export const updateClickedIndices = (index, clickedIndices, setClickedIndices) => {
    const updatedIndices = clickedIndices.includes(index)
      ? clickedIndices.filter((clickedIndex) => clickedIndex !== index)
      : [...clickedIndices, index];
    setClickedIndices(updatedIndices);
  };
  
  export const handleWrongCardClick = (audioPath, setShake) => {
    const audioWrong = new Audio(audioPath);
    let wrongDate = true;
    audioWrong.volume = 0.1;
    audioWrong.play();
    setShake(true);
    setTimeout(() => {
      setShake(false);
    }, 1000);
  };
  
  export const playXmasAudio = (audioPath, clickedIndices) => {
    const audioXmas = new Audio(audioPath);
    audioXmas.volume = 0.2;
    if (clickedIndices.length > 0) {
      audioXmas.play();
    }
  };
  