// import Portfolio from './portfolio';
import PortfolioList from './portfolioList';
import PortfolioGrid from './portfolioGrid';

import Header from './Header';
import Footer from './Footer';
import React, {Component} from 'react';
import { fetchPhotos } from '../redux/fetch';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom'
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        photos: state.photos
    }
};


const mapDispatchToProps = dispatch => ({
    fetchPhotos: (prop) => { dispatch(fetchPhotos(prop))},
  });

class Main extends Component {

    componentDidMount() {
        this.props.fetchPhotos("nature");
      }
    render() {
      const HomePage = () => {
        return(
                <div>
                    <h1>profile</h1>
                    <h1>profile</h1>
                    <h1>profile</h1>

                </div>
              )
          }
        const portfolioList = () => {
          return(
            <PortfolioList photos={this.props.photos.photos}  />
          )
        }
        const portfolioGrid = () => {
          return(
            <PortfolioGrid photos={this.props.photos.photos}  />
          )
        }
        return (
            <div>
              <Header fetchPhotos={this.props.fetchPhotos}/>
              <Switch>
                <Route path='/list' component={portfolioList} />
                <Route path='/grid' component={portfolioGrid} />

                <Redirect to='/grid' />
              </Switch>
            <Footer/>
          </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
