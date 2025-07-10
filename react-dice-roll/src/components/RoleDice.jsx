import styled from "styled-components";

const RoleDice = ({ roleDice, currentDice }) => {
  const handleDiceClick = () => {
  
    const audio = new Audio('/sound.mp3'); 
    audio.volume = 1.0; 
    audio.play().catch(e => console.log('Audio play failed:', e));
    
    roleDice();
  };
  return (
    <DiceContainer>
      <div className="dice" onClick={handleDiceClick}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );

};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;