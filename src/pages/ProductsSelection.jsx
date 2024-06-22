import React, { useState } from 'react';
import { Nav } from '../components';
import ProductsSelectionCard from '../components/ProductsSelectionCard';
import { productSelection } from '../constants';
import { Footer } from '../sections';

const ProductsSelection = () => {
  const [selectedProduct, setSelectedProduct] = useState(productSelection[0]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Filter out the selected product from the list to display similar products
  const similarProducts = productSelection.filter(product => product !== selectedProduct);

  return (
    <>
      <Nav />

      <section
        id="home"
        className="flex justify-center items-center flex-col-reverse gap-10 padding xl:padding-l wide:padding-r padding-b"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {similarProducts.map((selection) => (
            <div
              key={selection.name}
              className="cursor-pointer flex flex-col items-center mb-8"
              onClick={() => handleProductClick(selection)}
            >
              <img
                src={selection.imgURL}
                alt={selection.name}
                className="w-[280px] h-[280px] mx-4"
              />
              <h3 className="mt-4 text-2xl font-semibold font-palanquin">{selection.name}</h3>
              <p className="mt-2 text-xl font-semibold font-montserrat text-coral-red">{selection.price}</p>
            </div>
          ))}
        </div>

        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg pt-12">
          <span className="text-coral-red">Similar </span>Products
        </h2>

        <div className="mt-10 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center flex lg:flex-col lg:justify-between items-center">
          <ProductsSelectionCard
            imgURL={selectedProduct.imgURL}
            name={selectedProduct.name}
            price={selectedProduct.price}
            description={selectedProduct.description}
            ulList={selectedProduct.ulList}
          />
        </div>
      </section>

      <footer className='flex justify-end items-center bg-black padding-x padding-t pb-8'>
        <Footer />
      </footer>
    </>
  );
};

export default ProductsSelection;
