import './App.css';
import SuperheroesTable from './components/SuperheroesTable'

const App = () => {
  return (
    <div>
      <div class="title-bar">
        <h1>Superhero Registry</h1>
      </div>
      <SuperheroesTable />
    </div>
  );
};

export default App;
