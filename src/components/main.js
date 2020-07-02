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
    constructor(props){
      super(props);

      this.state = {
        searchTerm: "nature"
      }
    }
    componentDidMount() {
        this.props.fetchPhotos(this.state.searchTerm);
      }
    render() {


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
              <Header props={this.props}/>
              <Switch>
                <Route exact path='/' component={portfolioList} />
                <Route exact path='/grid' component={portfolioGrid} />
                
              </Switch>
            <Footer/>
          </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
