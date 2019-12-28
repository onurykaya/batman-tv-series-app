import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class NotFound extends Component {
    render() {
        return (
          <div className="notFound">
            <Link to="/">
              <img
                className="notFoundImage"
                src="https://purepng.com/public/uploads/medium/purepng.com-batman-logobatmansuperherocomicdc-comicsbob-kanebat-manbruce-wayne-17015285234526j571.png"
                alt="notFound"
              />
              <div>
                <h1 className="notFoundTitle">Not Found</h1>
              </div>
            </Link>
          </div>
        );
    }
}
