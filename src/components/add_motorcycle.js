import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBikeAsync } from '../redux/models/models';

function Form() {
  const [model, setModel] = useState('');
  const [photo, setPhoto] = useState('');
  const [power, setPower] = useState(0);
  const [weight, setWeight] = useState(0);
  const [price, setPrice] = useState(0);
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
    setPower(0);
    setWeight(0);
    setPrice(0);
    setDescription('');
  };

  return (
    <>
      <form onSubmit={addBikehandler} onReset={resetForm}>
        <input
          className="model-input"
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Model name"
        />
        <input
          className="photo-input"
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="URL or upload a picture"
        />
        <input
          className="model-input"
          type="number"
          value={power}
          onChange={(e) => setPower(e.target.value)}
          placeholder="Bike power/HP"
        />
        <input
          className="photo-input"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Bike weight/Kg"
        />
        <input
          className="model-input"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price $"
        />
        <textarea
          className="photo-input"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write a short description"
        />
        <input
          className="update-btn add-btn"
          type="submit"
          value="ADD BIKE"
          title="Click this or press enter to submit"
        />
      </form>
    </>
  );
}

function AddMotorcycle() {
  return (
    <>
      <h2>Add Motorcyle</h2>
      <Form />
    </>
  );
}

export default AddMotorcycle;
