import { useState } from 'react';
import './App.css';
import SideBar from './Components/SideBar';
import { themeOne, themeThree, themeTwo } from './Data';
import ThemePicker from './Components/ThemePicker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import PageOne from './Pages/Icons';
// import PageTwo from './Pages/Charts';
import Pallettes from './Pages/Pallettes';
import Buttons from './Pages/Buttons';
import Icons from './Pages/Icons';
import Charts from './Pages/Charts';
import Tables from './Pages/Tables';




function App() {



  const one = themeOne;
  const two = themeTwo;
  const three = themeThree;

  const [theme, setTheme] = useState(one);

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
          <Route path='/' exact >
            <Icons {...theme} />
          </Route>
          <Route path='/charts'  >
            <Charts {...theme} />
          </Route>
          <Route path='/palettes'  >
            <Pallettes {...theme} />
          </Route>
          <Route path='/tables'  >
            <Tables {...theme} />
          </Route>
          <Route path='/buttons'  >
            <Buttons {...theme} />
          </Route>
        </Switch>
      </div>

    </Router >
  );
}

export default App;
