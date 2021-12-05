import useLocalStorageState from 'use-local-storage-state';
import './App.css';
import SideBar from './Components/SideBar';
import { themeOne, themeThree, themeTwo } from './Data';
import ThemePicker from './Components/ThemePicker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Pallettes from './Pages/Pallettes';
import Buttons from './Pages/Buttons';
import Icons from './Pages/Icons';
import Charts from './Pages/Charts';
import Tables from './Pages/Tables';




function App() {



  const one = themeOne;
  const two = themeTwo;
  const three = themeThree;

  const [theme, setTheme] = useLocalStorageState("theme", one);

  const handleTheme = (e) => {
    //stop onclick from triggering other functions
    e.stopPropagation();

    theme === one ? setTheme(two) :
      theme === two ? setTheme(three) :
        setTheme(one);
  }

  const body = document.querySelector("body");
  body.style.backgroundColor = theme.background;

  return (
    <Router>

      <div className="app"  >

        <SideBar {...theme} />

        <ThemePicker {...theme} clickFunc={handleTheme} />
        <Switch>
          <Route path='/react-dashboard-refactor' exact >
            <Icons {...theme} />
          </Route>
          <Route path='/react-dashboard-refactor/charts'  >
            <Charts {...theme} />
          </Route>
          <Route path='/react-dashboard-refactor/palettes'  >
            <Pallettes {...theme} />
          </Route>
          <Route path='/react-dashboard-refactor/tables'  >
            <Tables {...theme} />
          </Route>
          <Route path='/react-dashboard-refactor/buttons'  >
            <Buttons {...theme} />
          </Route>
        </Switch>
      </div>

    </Router >
  );
}

export default App;
