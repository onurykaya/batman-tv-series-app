import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchTvShows } from "../actionCreators/actionCreators";
import TvShow from '../components/TvShow';


  class Main extends Component {
    constructor(props){
      super(props);
      props.fetchTvShows()
	}
    
    render() {
      const {props} = this;
        return (
          <div className="main-container">
            {props.tvShows.map(item => (
              <TvShow key={item.show.id} item={item} />
            ))}
          </div>
        );
    }
}

const mapStateToProps = state => ({
  tvShows: state.reducer.data
});


export default connect(mapStateToProps, { fetchTvShows })(Main);
