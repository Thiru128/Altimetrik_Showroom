import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddCarAction } from '../store/types/carTypeActions';
import { addCar } from '../store/actions';
import { Dispatch } from 'redux';

interface AddCarDetailFormProps {
  brandName: string;
  onSubmit: () => void;
}

const AddCarForm: React.FC<AddCarDetailFormProps> = ({ brandName, onSubmit }) => {

  const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(null);

  const [formData, setFormData] = useState<any>({});
  const dispatch: Dispatch<AddCarAction> = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      brandName: brandName,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let carData = formData;
    carData.photo = previewImage ? previewImage.toString() : null;
    dispatch(addCar(carData));
    setFormData({});
    onSubmit();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h3>{`Add Vehicle Details for ${brandName}`}</h3>
        <div className="row">
          <h5>Model</h5>
          <div className="column">
            <input type="text" name="model" placeholder="Model" onChange={handleChange} />
          </div>
          <h5>Location</h5>
          <div className="column">
            <input type="text" name="location" placeholder="Location" onChange={handleChange} />
          </div>
        </div>

        <div className="row">
          <h5>Color</h5>
          <div className="column">
            <input type="text" name="color" placeholder="Color" onChange={handleChange} />
          </div>
          <h5>No Of Owners</h5>
          <div className="column">
            <input type="text" name="noOfOwners" placeholder="No Of Owners" onChange={handleChange} />
          </div>
        </div>

        <div className="row">
          <h5>Year of Manufature</h5>
          <div className="column">
            <input type="text" name="year" placeholder="Year of Manufature" onChange={handleChange} />
          </div>
          <h5>Transmission</h5>
          <div className="column">
            <input type="text" name="transmission" placeholder="Transmission" onChange={handleChange} />
          </div>
        </div>

        <div className="row">
          <h5>Insurance Validity</h5>
          <div className="column">
            <input type="text" name="insuranceValidity" placeholder="Insurance Validity" onChange={handleChange} />
          </div>
          <h5>External Fitments</h5>
          <div className="column">
            <input type="text" name="externalFitments" placeholder="External Fitments" onChange={handleChange} />
          </div>
        </div>

        <div className="row">
          <h5>Kms</h5>
          <div className="column">
            <input type="text" name="kms" placeholder="Kms" onChange={handleChange} />
          </div>
          <h5>Image</h5>
          <div className="column">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          {previewImage && (
            <div className="column">
              <h6>Preview Image</h6>
              <img src={previewImage.toString()} alt="Preview" style={{ width: 100, height: 80 }} />
            </div>
          )}
        </div>

      </div>
      <button type="submit" style={{ marginTop: '20px' }}>Submit</button>
    </form>
  );
};

export default AddCarForm;
