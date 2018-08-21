import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Router, Link} from '@reach/router';

// dynamic import routes
const Home = React.lazy(() => import('routes/Home'));
const Posts = React.lazy(() => import('routes/Posts'));
const Post = React.lazy(() => import('routes/Post'));

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Link to='/'>Home</Link>{' | '}
        <Link to='posts'>Posts</Link>
        <React.Placeholder
          delayMs={500}
          fallback={<p>Loading...</p>}
        >
          <Router>
            <Home path='/'/>
            <Posts path='posts'/>
            <Post path='posts/:postId'/>
          </Router>
        </React.Placeholder>
      </div>
    );
  }
}

export default App;
