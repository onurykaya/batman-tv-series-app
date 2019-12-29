import React from 'react';
import {Link} from 'react-router-dom';

export default function TvShow(props) {
    const {item} = props
    return (
      <div className="card">
        <Link to={`/detail/${item.show.id}`}>
          <div className="banner">
            <img src={item.show.image.medium} alt={item.show.image.name} />
          </div>
        </Link>
        <div className="container">
          <div className="name">{item.show.name}</div>
          <hr />
          <div className="language">
            {item.show.genres.map(item => {
              return <div key={Math.random()}>{item}</div>;
            })}
          </div>
          {item.show.rating.average ? (
            <div className="raiting">Raiting: {item.show.rating.average}</div>
          ) : (
            <div className="raiting">Raiting not found</div>
          )}
          <div className="premiered"> {item.show.premiered} </div>
        </div>
      </div>
    );
}
