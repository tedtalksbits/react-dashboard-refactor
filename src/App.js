import { useState } from 'react';
import './App.css';
import SideBar from './Components/SideBar';
import { themeOne, themeThree, themeTwo } from './Data';
import ThemePicker from './Components/ThemePicker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PageOne from './Pages/PageOne';
import PageTwo from './Pages/PageTwo';
import Pallettes from './Pages/Pallettes';




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

  return (
    <Router>

      <div className="app" style={{ background: theme.primary, height: '100vh' }} >

        <SideBar {...theme} />

        <ThemePicker {...theme} clickFunc={handleTheme} />
        <Switch>
          <Route path='/' exact >
            <PageOne />
          </Route>
          <Route path='/pagetwo'  >
            <PageTwo {...theme} />
          </Route>
          <Route path='/palettes'  >
            <Pallettes />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
