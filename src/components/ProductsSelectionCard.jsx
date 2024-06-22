import React, {useState} from 'react';
import Button from './Button';
import { arrowRight } from '../nike_landing_assets/assets/icons';

const ProductsSelectionCard = ({ imgURL, name, price, description, ulList }) => {
  const [addToBag, setAddToBag] = useState([]);

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
          <Button roundness="rounded-md" label="M 9 / W 10.5" backgroundColor="bg-white" borderColor="bg-white" textColor="text-slate-gray" hoverBackgroundColor="bg-gray-500" />
          <Button roundness="rounded-md" label="M 9.5 / W 11" backgroundColor="bg-white" borderColor="white" textColor="text-slate-gray" hoverBackgroundColor="bg-gray-00" />
          <Button roundness="rounded-md" label="M 10 / W 11.5" backgroundColor="bg-white" borderColor="white" textColor="text-slate-gray" hoverBackgroundColor="border-slate-gray" />
          <Button roundness="rounded-md" label="M 10.5 / W 12" backgroundColor="bg-white" borderColor="white" textColor="text-slate-gray" hoverBackgroundColor="border-slate-gray" />
          <Button roundness="rounded-md" label="M 11 / W 12.5" backgroundColor="bg-white" borderColor="white" textColor="text-slate-gray" hoverBackgroundColor="border-slate-gray" />
          <Button roundness="rounded-md" label="M 11.5 / W 13" backgroundColor="bg-white" borderColor="white" textColor="text-slate-gray" hoverBackgroundColor="border-slate-gray" />
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
