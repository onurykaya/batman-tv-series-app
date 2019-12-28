import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
          <div className="header">
            <Link to="/">
              <img
                src=" https://i.ebayimg.com/images/g/HgQAAOSwhRxXKaqA/s-l400.jpg"
                alt="logo"
                className="logo"
              />
            </Link>
          </div>
        );
    }
}
