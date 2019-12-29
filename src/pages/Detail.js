import React, { Component } from "react";
import { fetchTvShow, loadTv } from "../actionCreators/actionCreators";
import { connect } from "react-redux";
import ReactHtmlParser from "react-html-parser";

class Detail extends Component {
  constructor(props) {
    super(props);
    props.loadTvShow(props.id);
    props.loadTv(props.loading);
    
  }
  render() {
    const { props } = this;
    const item = props.tvShow;
    console.log(props.loading);
    if(props.loading){
      return (
        <div>Loading</div> 
        );
    }else{
      return (
        <div className="detail-main-container">
          <div className="detail-banner">
            <img
              className="detail-banner"
              src={item.image && item.image.original}
              alt={item.name}
            />
          </div>
          <div className="detail-name"> {item.name} </div>
          <hr />
          <div className="summary"> {ReactHtmlParser(item.summary)} </div>
        </div>
      );
    }
    
  }
}

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.match.params.id,
  tvShow: state.reducer.item,
  loading: state.reducer.loading
});

const mapDispatchToProps = dispatch => ({
  loadTvShow: id => dispatch(fetchTvShow(id)),
  loadTv
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
