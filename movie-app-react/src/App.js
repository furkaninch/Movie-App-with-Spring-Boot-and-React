import { HashRouter as Router, Switch , Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import LanguageSelector from './Components/LanguageSelector';
import TopBar from './Components/TopBar';
import { useSelector} from 'react-redux';
import DirectorPage from './pages/DirectorPage';
import DirectorFeed from './pages/DirectorFeed';
import DirectorUpdate from './pages/DirectorUpdate';
import MoviesPage from './pages/MoviesPage';
import MoviesFeed from './pages/MoviesFeed';
import MovieUpdate from './pages/MovieUpdate';
import StudioPage from './pages/StudioPage';
import StudioFeed from './pages/StudioFeed';
import StudioUpdate from './pages/StudioUpdate';

const App = (props) => {

  const {isLoggedIn} = useSelector((store) => ({
    isLoggedIn: store.isLoggedIn
  }));

  return (
    <div>
      <Router>
        <TopBar />
        <Switch>
          <Route exact path = "/" component = {HomePage}/>
          <Route path = "/login" component = {LoginPage}/>
          {isLoggedIn && <Route path = "/director" component = {DirectorPage}/>}
          {isLoggedIn && <Route path = "/movies" component = {MoviesPage}/>}
          {isLoggedIn && <Route path = "/studio" component = {StudioPage}/>}
          <Route path = "/director-feed" component = {DirectorFeed}/>
          <Route path = "/movie-feed" component = {MoviesFeed}/>
          <Route path = "/studio-feed" component = {StudioFeed}/>
          {isLoggedIn && <Route path = "/director-update" component = {DirectorUpdate}/>}
          {isLoggedIn && <Route path = "/movie-update" component = {MovieUpdate}/>}
          {isLoggedIn && <Route path = "/studio-update" component = {StudioUpdate}/>}
          <Redirect to = "/"/>
        </Switch>
        <LanguageSelector/>
      </Router>
    </div>
  );
}

export default App;
