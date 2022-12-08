import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBikeAsync } from '../redux/models/models';
import '../styles/add_motorcycle.css';

function Form() {
  const [model, setModel] = useState('');
  const [photo, setPhoto] = useState('');
  const [power, setPower] = useState('');
  const [weight, setWeight] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const addBikehandler = (e) => {
    e.preventDefault();

    if (model !== '' && photo !== '' && power > 0 && weight > 0 && price > 0 && description !== '') {
      const bike = {
        brand: 'ducati', model, photo, power, weight, price, description,
      };
      dispatch(addBikeAsync(bike));
      e.target.reset();
    }
  };

  const resetForm = () => {
    setModel('');
    setPhoto('');
    setPower('');
    setWeight('');
    setPrice('');
    setDescription('');
  };

  return (
    <>
      <form
        className="bike-form"
        onSubmit={addBikehandler}
        onReset={resetForm}
      >
        <input
          className="bike-input"
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Model name"
        />
        <input
          className="bike-input"
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Image URL"
        />
        <input
          className="bike-input"
          type="number"
          value={power}
          onChange={(e) => setPower(e.target.value)}
          placeholder="Bike power HP"
        />
        <input
          className="bike-input"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Bike weight Kg"
        />
        <input
          className="bike-input"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price $"
        />
        <textarea
          className="bike-input"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write a short description"
          rows="6"
        />
        <input
          className="res-btn add-bike-btn"
          type="submit"
          value="Add Bike"
          title="Click this or press enter to submit"
        />
      </form>
    </>
  );
}

function AddMotorcycle() {
  return (
    <div className="bike-form-cont">
      <h2 className="models-title">ADD A NEW MODEL</h2>
      <Form />
    </div>
  );
}

export default AddMotorcycle;
