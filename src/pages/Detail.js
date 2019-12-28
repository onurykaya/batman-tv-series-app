import React, { Component } from "react";
import { fetchTvShow } from "../actionCreators/actionCreators";
import { connect } from "react-redux";
import ReactHtmlParser from "react-html-parser";

class Detail extends Component {
  constructor(props) {
    super(props);
    props.loadTvShow(props.id);
  }
  render() {
    const { props } = this;
    const item = props.tvShow;
    return (
      <div className="detail-main-container">
        <div className="detail-banner">
          <img className="detail-banner" src={item.image && item.image.original} alt={item.name} />
        </div>
        <div className="detail-name"> {item.name} </div>
        <hr />
        <div className="summary"> {ReactHtmlParser(item.summary)} </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.match.params.id,
  tvShow: state.reducer.item
});

const mapDispatchToProps = dispatch => ({
  loadTvShow: id => dispatch(fetchTvShow(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
