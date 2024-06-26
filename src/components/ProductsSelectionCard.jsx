import React, {useState} from 'react';
import Button from './Button';
import { arrowRight } from '../nike_landing_assets/assets/icons';

const sizes = [
  {
    size: 'M 9 / W 10.5',
    key: 1
  },
  {
    size: 'M 9.5 / W 11',
    key: 2
  },
  {
    size: 'M 10 / W 11.5',
    key: 3
  },
  {
    size: 'M 10.5 / W 12',
    key: 4
  },
  {
    size: 'M 11 / W 12.5',
    key: 5
  },
  {
    size: 'M 11.5 / W 13',
    key: 6
  }
]

const ProductsSelectionCard = ({ imgURL, name, price, description, ulList }) => {
  
  // TODO (ken tefkire bel useState eno to get the current value of the selected shoe size and add it to the cart)
  const [addToBag, setAddToBag] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleClick = ((product) => {
    
  });
  return (
    <div className="flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 lg:pr-12">
        <img
          src={imgURL}
          alt={name}
          width={600}
          height={600}
          className="max-sm:w-[400px] max-sm:h-[400px] max-sm:pt-[3.5rem]"
        />
      </div>

      <div className="xl:pt-8 lg:w-1/2 lg:pl-12">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg
        max-md: pt-8">
          {name}
        </h2>
        <p className="mt-2 text-xl font-semibold font-montserrat text-coral-red">{price}</p>

        <p className="mt-4 lg:max-w-lg info-text">
          {description}
        </p>
        <ul className="mt-6 max-sm:max-w-md lg:max-w-lg info-text" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>{ulList[0]}</li>
          <li>{ulList[1]}</li>
        </ul>
        
        <p className="mt-8 lg:max-w-lg info-text font-bold">
          Select Size
        </p>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {sizes.map((size) => (
            <Button key={size.key} onClick={() => setSelectedSize(size.key)} roundness="rounded-md" label={size.size} backgroundColor="bg-white" borderColor={selectedSize === size.key ? "border-black" : "border-gray"} textColor="text-slate-gray" hoverBackgroundColor="bg-gray-500" />
          ))}
        </div>
        

        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Buy Now" iconURL={arrowRight} />
          <Button
            label="Add To Cart"
            backgroundColor="bg-black"
            borderColor="none"
            textColor="text-white font-bold"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsSelectionCard;
