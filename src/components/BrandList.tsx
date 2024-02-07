import React, { useState } from "react";
import brands from '../utils/brands.json';
import AddCarForm from "./AddCarForm";

const BrandList: React.FC = () => {

  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const handleBrandClick = (brandName: string) => {
    setSelectedBrand(brandName);
  };

  return (
    <div className="car-brands-list">
      <h2>Car Brands</h2>
      <div className="brands-container">
        {brands.map((brand, index) => (
          <div key={index} className="brand-item" onClick={() => handleBrandClick(brand.name)}>
            <img src={brand.logo} alt={brand.name} />
            <p>{brand.name}</p>
          </div>
        ))}
      </div>
      {selectedBrand && (
        <AddCarForm brandName={selectedBrand} onSubmit={() => setSelectedBrand(null)} />
      )}
    </div>
  );
};

export default BrandList;