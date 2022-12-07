import React, { useEffect } from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { fetchModelsAsync } from '../redux/models/models';
import '../styles/models.css';

function Bike({ bike }) {
  const {
    id, brand, model, photo, description,
  } = bike;

  const socialMedia = () => {
    const modelMedia = ['ri:facebook-fill', 'mdi:twitter', 'mdi:instagram'];
    const social = [];

    for (let i = 0; i < modelMedia.length; i += 1) {
      social.push(
        <li className="social-cont" key={`${id}-${modelMedia[i]}`}>
          <Icon
            className="social-mini"
            color="#bbbbbb"
            icon={modelMedia[i]}
          />
        </li>,
      );
    }
    return social;
  };

  return (
    <li className="bike-item">
      <Link className="bike-link" to={`/home/models/${id}`}>
        <div className="img-cont">
          <div className="circle" />
          <img
            src={photo}
            alt={`${brand} ${model}`}
            title={`${brand} ${model}`}
            className="img-bike"
          />
        </div>
        <h2 className="model-name">{model}</h2>
      </Link>
      <p className="bike-description">{description}</p>
      <ul className="bike-social">
        { socialMedia() }
      </ul>
    </li>
  );
}

function BikesList() {
  const dispatch = useDispatch();
  const bikes = useSelector((state) => state.models);

  useEffect(() => {
    dispatch(fetchModelsAsync());
  }, [dispatch]);

  const createList = (bikes) => {
    const list = bikes.map((bike) => (
      <Bike
        bike={bike}
        key={bike.id}
      />
    ));
    return list;
  };

  return (
    <ul className="bikes-list">
      { createList(bikes) }
    </ul>
  );
}

function Models() {
  return (
    <div className="models-cont">
      <h1 className="models-title">LATEST MODELS</h1>
      <p className="model-subtitle">Please select a Ducati Model</p>
      <BikesList />
    </div>
  );
}

Bike.propTypes = {
  bike: PropTypes.shape({
    id: PropTypes.number,
    brand: PropTypes.string,
    model: PropTypes.string,
    photo: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Models;
