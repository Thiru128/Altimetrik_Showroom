import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Car } from '../store/types/carTypeActions';

const CarList: React.FC = () => {
  const cars = useSelector((state: []) => state);

  const [filter, setFilter] = useState<string>('');

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const filteredCars = cars.filter((car: Car) =>
    car.model.toLowerCase().includes(filter.toLowerCase()) || car.brandName.toLowerCase().includes(filter.toLowerCase()) ||
    car.color.toLowerCase().includes(filter.toLowerCase()) || car.location.toLowerCase().includes(filter.toLowerCase()) ||
    car.transmission.toLowerCase().includes(filter.toLowerCase()) || car.externalFitments.toLowerCase().includes(filter.toLowerCase()) ||
    car.insuranceValidity.toLowerCase().includes(filter.toLowerCase())
  );

  const dataItem = (obj: { key: string, value: string }) => {
    return (
      <div className="row">
        <h5>{obj.key}</h5>
        <p> &nbsp; {obj.value}</p>
      </div>
    )
  }

  return (
    <div className="list-container">
      {cars && cars.length ? <div className="filter">
        <input
          type="text"
          placeholder="Filter by..."
          value={filter}
          onChange={handleFilterChange}
        />
      </div> : <h2>No Data</h2>}
      <div className="car-list">
        {filteredCars.map((car: Car, index) => (
          <div className="car-item" key={index}>
            <img src={car.photo} alt="Preview" style={{ width: 100, height: 80 }} />
            {dataItem({ key: "Brand: ", value: car.brandName })}
            {dataItem({ key: "Model: ", value: car.model })}
            {dataItem({ key: "Year: ", value: String(car.year) })}
            {dataItem({ key: "Color: ", value: car.color })}
            {dataItem({ key: "Insurance Validity: ", value: car.insuranceValidity })}
            {dataItem({ key: "Kms: ", value: String(car.kms) })}
            {dataItem({ key: "Location: ", value: car.location })}
            {dataItem({ key: "No Of Owners: ", value: String(car.noOfOwners) })}
            {dataItem({ key: "Transmission: ", value: car.transmission })}
            {dataItem({ key: "External Fitments: ", value: car.externalFitments })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
