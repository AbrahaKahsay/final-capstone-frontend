import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { fetchDetailsAsync } from '../redux/models/model_details';
import '../styles/details.css';

function BackToModels() {
  return (
    <Link className="back-btn" to="/models">
      <Icon
        className="back-arrow"
        color="#fff"
        icon="eva:arrow-left-outline"
      />
    </Link>
  );
}

function Info({ details }) {
  const {
    model, power, weight, price,
  } = details;

  return (
    <>
      <h2 className="details-title">{model}</h2>
      <p className="offer">- $45 deposit upon any Ducati rent!</p>
      <ul className="features">
        <li className="feature-item">
          <span>Power</span>
          <span>{`${power} HP`}</span>
        </li>
        <li className="feature-item">
          <span>Weight</span>
          <span>{`${weight} Kg`}</span>
        </li>
        <li className="feature-item">
          <span>Price</span>
          <span>{`$${price}`}</span>
        </li>
        <li className="feature-item">
          <span>Duration</span>
          <span>48 Months</span>
        </li>
      </ul>
    </>
  );
}

function ExtraInfo() {
  return (
    <>
      <p className="discount">
        <span className="disc-bold">5.9% APR </span>
        Representative
      </p>
      <div className="more-models-cont">
        <p className="more-models">DISCOVER MORE MODELS</p>
        <Icon
          className="go-arrow"
          color="#e6cc00"
          icon="ic:baseline-keyboard-arrow-right"
        />
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/BYR_color_wheel.svg/382px-BYR_color_wheel.svg.png"
        alt="Color wheel"
        title="Color wheel"
        className="color-wheel"
      />
    </>
  );
}

function ReserveLink() {
  return (
    <Link className="res-btn" to="/reserve">
      <Icon
        className="bike-icon"
        color="#fff"
        icon="fa6-solid:motorcycle"
      />
      <span>Reserve</span>
      <div className="res-arr-cont">
        <Icon
          className="reserve-arrow"
          color="#fff"
          icon="ic:baseline-keyboard-arrow-right"
        />
      </div>
    </Link>
  );
}

function ModelDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchDetailsAsync(id));
  }, [dispatch, id]);

  const details = useSelector((state) => state.details);
  const { photo, brand, model } = details;

  return (
    <div className="det-cont">
      <section className="first-img">
        <BackToModels />
        <img
          src={photo}
          alt={`${brand} ${model}`}
          title={`${brand} ${model}`}
          className="single-bike"
        />
        {/* <BackToModels /> */}
      </section>
      <section className="second-info">
        <Info
          details={details}
          key={details.id}
        />
        <ExtraInfo />
        <ReserveLink />
      </section>
    </div>
  );
}

Info.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.number,
    brand: PropTypes.string,
    model: PropTypes.string,
    photo: PropTypes.string,
    power: PropTypes.number,
    weight: PropTypes.number,
    price: PropTypes.number,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default ModelDetails;
