import './App.css';
import AuthContainer from './containers/AuthContainer';
import Register from './containers/Register';
import MovieListContainer from './containers/MovieListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <AuthContainer />
      {/* <Register /> */}
      {/* <MovieListContainer /> */}
    </div>
  );
}

export default App;
