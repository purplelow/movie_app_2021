import React from 'react';
import PropTypes from "prop-types";

const star = [
  {
    id: 1,
    name: "iu1",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/IU_MelOn_Music_Awards_2017_06.jpg",
    rating: 5.0
  },
  {
    id: 2,
    name: "iu2",
    image: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/7mo5/image/RhMj77_UZ1G9smD_INrbLKRVVoc.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "iu3",
    image: "https://www.fashionn.com/files/board/2020/image/o_1eg776qonarntm1fub16u06vvb.jpg",
    rating: 4.8
  }
];

function IUPhoto({ name, picture, rating }) {
  return (
    <div>
      <h2>sample text {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

IUPhoto.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      {star.map(renderStar => (
        <IUPhoto
          key={renderStar.id}
          name={renderStar.name}
          picture={renderStar.image}
          rating={renderStar.rating}
        />
      ))}
    </div>
  );
}

export default App;
