import { createGlobalStyle, styled } from "styled-components";
import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <GlobalStyles />
      <Player />
      <Challenges>
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not Easy" targetTime={5} />
        <TimerChallenge title="Getting Tough" targetTime={10} />
        <TimerChallenge title="Pros Only" targetTime={15} />
      </Challenges>
    </>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`
  * {
  box-sizing: border-box;
}

  body {
    background: radial-gradient(#186a5e, #053339);
    color: #e1eeeb;
    font-family: 'Quicksand', sans-serif;
    margin: 0;
    min-height: 100vh;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  #content {
    background: radial-gradient(#0b201d, #021619);
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
    margin: 2rem auto;
    max-width: 60rem;
    padding: 2rem; 
  }

  h1 {
    color: #c1e2dd;
    font-family: 'Handjet', monospace;
    font-size: 3.5rem;
    margin: 0;
    text-align: center;
    text-shadow: 0 0 4px rgba(35, 34, 34, 0.4);
    text-transform: uppercase;
  }

  h1 > em {
    color: #00eeff;
    font-style: normal;
  }

  header > p {
    color: #c6f4f2;
    font-size: 1.2rem;
    margin: 0;
    text-align: center;
  }
`;

const Challenges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 3rem auto;
  max-width: 50rem;
`;
