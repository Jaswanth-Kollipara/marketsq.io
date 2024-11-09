import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Discover from './components/Discover'
import Services from './components/Services'
import Booking from './components/Booking'
import Conform from './components/Conform'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/marketsq.io" component={Home} />
    <Route exact path="/discover" component={Discover} />
    <Route exact path="/services" component={Services} />
    <Route exact path="/conform" component={Conform} />
    <Route exact path="/booking" component={Booking} />
    <Route component={NotFound} />
  </Switch>
)

export default App