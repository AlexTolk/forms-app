import './App.css';
import Header from './Header/Header';
import Main from './Main/Main'
import RouterMenu from './Router/RouterMenu';

function App() {
  return (
    <div className="App">
      <RouterMenu />
      <Header />
      <Main />
    </div>
  );
}

export default App;
