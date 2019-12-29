import { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import React from 'react';
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";

function Detail(props) {

  const [loading, setLoading] = useState(true);

  const [item, setItem] = useState({});


  const Movie = (
    <React.Fragment>
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
    </React.Fragment>
  );

  useEffect(() => {
    getApıData();
  }, []);


  const getApıData = ()=>{
    fetch(`https://api.tvmaze.com/shows/${props.match.params.id}`, {method: 'GET'})
      .then(res => res.json())
      .then(
        item => setItem({ ...item }),
        setLoading(false)
      );
  }

  

  return (
    <div className="detail-main-container">
      {loading ? <ReactLoading type={"bars"} color={"black"} /> : Movie}
    </div>
  );
}




export default Detail;
