import { keyframes, styled } from "styled-components";
import ResultModal from "./ResultModal.jsx";
import { useRef, useState } from "react";

export default function TimerChallenge( {title, targetTime}) {
  /* Using refs causes a component specific instance of the timer. When timer was placed outside the
    function, all instances of TimerChallenge were sharing title. Furthermore, unlike variables
    inside the component function, ref is recalled between state changes.
  */
  const timer = useRef();

  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  function handleStart() {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      {timerExpired && <ResultModal targetTime={targetTime} result="lost" /> }
      <TimerSection>
        <h2>{title}</h2>
        <p>{targetTime} second{targetTime === 1 ? '' : 's'}</p>
        <p>
          <button
            onClick={timerStarted ? handleStop : handleStart}
            type="button"
          >
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p $isActive={timerStarted} >
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </TimerSection>
    </>
  );
}

const flash = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

const TimerSection = styled.section`
  align-items: center;
  background: linear-gradient(#4df8df, #4df0f8);
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(35, 34, 34, 0.6);
  color: #221c18;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem auto;
  padding: 2rem;
  width: 22rem;

  & button {
    background: #12352f;
    border: none;
    border-radius: 4px;
    color: #edfcfa;
    cursor: pointer;
    font-size: 1.2rem;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
  }

  & button:hover {
    background: #051715;
  }

  & > h2 {
    color: #221c18;
    font-size: 1.5rem;
    letter-spacing: 0.1em;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
  }

  & p:nth-of-type(1) {
    border: 1px solid #46cebe;
    border-radius: 4px;
    margin: 0.5rem;
    padding: 0.25rem 0.5rem;
  }

  & p:nth-of-type(3) {
    animation: ${props => props.$isActive ? `${flash} 1s infinite` : "none"};
  }
`;
