import Portfolio from './portfolio';
import Header from './Header';
import React, {Component} from 'react';
import { fetchPhotos } from '../redux/fetch';
import { Switch, Route, Redirect, withRouter, Grid } from 'react-router-dom'
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
        const portfolio = () => {
          return(
            <Portfolio photos={this.props.photos.photos}  />
          )
        }
        return (
            <div>
              <Header fetchPhotos={this.props.fetchPhotos}/>
              <Switch>
                <Route path='/portfolio' component={portfolio} />
                <Redirect to='/portfolio'/>
              </Switch>
            {/* <Footer/> */}
          </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
