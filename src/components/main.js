import About from './about';
import Portfolio from './portfolio';
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



class Main extends Component {

    componentDidMount() {
        this.props.fetchPhotos();
      }

      

    render() {
      console.log(this.props.photos);
      const HomePage = () => {
        return(
                <div>
                    <h1>profile</h1>
                </div>
              )
          }

        const portfolio = () => {
          return(
            <Portfolio photos={this.props.photos.photos} />
          )
        }
        return (
            <div>
              <Header/>
              <Switch>
                <Route path='/profile' component={HomePage} />
                <Route path='/portfolio' component={portfolio} />
                <Redirect to='/profile'/>
              </Switch>
            {/* <Footer/> */}
          </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
