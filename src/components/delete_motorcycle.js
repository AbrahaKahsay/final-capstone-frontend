import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchModelsAsync,
  deleteBikeAsync,
} from '../redux/models/models';
import '../styles/delete_motorcycle.css';

const ModelName = ({ bike, deleteHandler }) => {
  const { id, model } = bike;

  return (
    <li className="model-item">
      <h2>
        {model}
      </h2>
      <div>
        <button
          type="button"
          className="del-btn"
          onClick={() => deleteHandler(id)}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

const DeleteMotorcycle = () => {
  const dispatch = useDispatch();
  const bikes = useSelector((state) => state.models);

  useEffect(() => {
    dispatch(fetchModelsAsync());
  }, [dispatch]);

  const deleteHandler = (id) => {
    dispatch(deleteBikeAsync(id));
  };

  const createList = (bikes) => {
    const list = bikes.map((bike) => (
      <ModelName
        bike={bike}
        deleteHandler={deleteHandler}
        key={`del-${bike.id}`}
      />
    ));
    return list;
  };

  return (
    <div className="bike-form-cont">
      <h2 className="models-title">MODELS</h2>
      <ul className="models-list">
        { createList(bikes) }
      </ul>
    </div>
  );
};

ModelName.propTypes = {
  bike: PropTypes.shape({
    id: PropTypes.number,
    model: PropTypes.string,
  }).isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default DeleteMotorcycle;
