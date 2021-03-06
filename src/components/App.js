import React, { Component } from 'react'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchPosts } from '../actions/posts';
import { Home, Navbar, Page404, Login, Signup } from './';


export class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar />

          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul> */}
          <Switch>
            <Route exact path="/" render={(props) => {
              return <Home {...props} posts={posts} />
            }} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>

    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  }
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(App);
