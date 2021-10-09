import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Article from './views/Article'
import ArticleList from './views/ArticleList'
import NotFound from './views/NotFound'

import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar fixed/>
    <div className="max-w-screen-md mx-auto pt-20">
      <Switch>
<Route exact path="/" component={Home} />
<Route exact path="/about" component={About} />
<Route exact path="/article/:id" component={Article} />
<Route exact path="/article-list" component={ArticleList} />
<Route component={NotFound} />
</Switch>
    </div>
    </Router>
  );
}

export default App;
