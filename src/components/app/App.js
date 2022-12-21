import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Banner from "../banner/banner";
import Header from "../header/header";
import Find from "../find/find";
import Descr from "../descr/descr";
import Str_2 from "../page/page-2/str-2"

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className='img_sun'>
          <Header />
          <Banner />
          <Switch>

            <Route exact path="/">
              <Find />
              <Descr />
            </Route>

            <Route exact path="/str-2">
              <Str_2 />
            </Route>

          </Switch>
        </div>
      </div >
    </Router>
  )
}

export default App;
