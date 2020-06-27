import About from './about.js';
import Portfolio from './portfolio.js';
import Header from './Header';
import React, {Component} from 'react';
import { fetchPhotos } from '../redux/fetch';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        photos: state.photos
    }
};

const mapDispatchToProps = dispatch => ({
    fetchPhotos: () => { dispatch(fetchPhotos())},
  });

const HomePage = () => {
    return(
        <div>
            <h1>HomePage</h1>
        </div>
    )
}

class Main extends Component {

    componentDidMount() {
        console.log("main this")
        console.log(this);
        this.props.fetchPhotos();
      }

    render() {
        return (
            <div>
              <Header/>
              <Switch>
                <Route path='/about' component={HomePage} />
                <Route path='/portfolio'  />
                <Redirect to="/about" />
              </Switch>
            {/* <Footer/> */}
          </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
