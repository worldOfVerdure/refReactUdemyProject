import { keyframes, styled } from "styled-components";

export default function ResultModal( {result, targetTime} ) {
  return (
    <ResultDialog open>
      <h2>You {result}</h2>
      <p>The target time was <strong>{targetTime}</strong> second{targetTime === 1 ? "" : "s"}.</p>
      <p>You stopped the timer with <strong>X seconds left.</strong></p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </ResultDialog>
  );
}

const slideInFromTop = keyframes`
  0% {
    transform: translateY(-15%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ResultDialog = styled.dialog`
  animation: ${slideInFromTop} 0.35s ease-out;
  border: none;
  border-radius: 8px;
  padding: 2rem;
  background-color: #d7fcf8;

  & button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background: #12352f;
    color: #edfcfa;
    font-size: 1.2rem;
    cursor: pointer;
  }

  & button:hover {
    background: #051715;
  }

  & h2 {
    font-family: 'Handjet', monospace;
    margin: 0 0 0.25rem 0;
    font-size: 3rem;
    text-transform: uppercase;
  }

  & form {
    text-align: right;
  }

  & p {
    margin: 0.5rem 0;
    font-size: 1.2rem;
  }
  
  & p strong {
    color: #10655b;
  }
`;
