import { useRef, useState } from "react";
import { styled } from "styled-components";

const PlayerSection = styled.section`
  text-align: center;

  & button {
    background-color: #54a399;
    border: 1px solid #54a399;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    color: #061e1a;
    cursor: pointer;
    padding: 0.4rem 1rem;
  }

  & button:hover {
    background-color: #3c8379;
    border-color: #3c8379;
  }

  & > h2 {
    color: #54a399;
  }

  & input {
    background-color: #192f2b;
    border: 1px solid #54a399;
    border-bottom-right-radius: 0;
    border-radius: 4px;
    border-top-right-radius: 0;
    color: #d1f0ec;
    font: inherit;
    padding: 0.25rem;
  }

  & > p {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    //All refs made with useRef will always have be an object with a current property
    setEnteredPlayerName(playerName.current.value);
  }

  return (
    <PlayerSection>
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </PlayerSection>
  );
}
