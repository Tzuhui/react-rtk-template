import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { useGetPokemonByNameQuery } from './services/pokemon'

function App() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('snorlax')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
          </>
        ) : null}
        <Counter />
      </header>
    </div>
  );
}

export default App;
