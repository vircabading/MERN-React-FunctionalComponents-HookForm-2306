import './App.css';
import MainContentView from './views/MainContentView';

function App() {
  return (
    <div className='window roundedBdr' >
      {/* **** Header ******** */}
      <header className='roundedBdr'>
        <h1>Hook Form</h1>
      </header>
      {/* **** Main Content Area ******** */}
      <MainContentView />
    </div>
  );
}

export default App;
