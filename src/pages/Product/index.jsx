import React, { useState } from "react";
import SNavbar from "../../components/Navbar";
import ActionAreaCard from "../../components/Cards";
import SFooter from "../../components/Footer";
import { dataProduct } from "../../data";
import Details from "../../components/details";
import Head from "../../components/Head";

function ProductPage() {
  const [showdetail, setShowdetail] = useState(null);

  const handleProductClick = (productId) => {
    const selected = dataProduct.find((product) => product.id === productId);
    setShowdetail(selected);
  };

  const handleCloseClick = () => {
    setShowdetail(null);
  };
  return (
    <>
      <SNavbar />

      <Head
        title="Product | Saddlebagsco"
        desc="These are products from Saddlebagsco"
        keywords="saddlebagsco, saddle bags, bags motorcycle, product"
      />

      <div className="container mx-auto">
        <h1> Product </h1>
        <div className="flex justify-center items-center mt-40 flex-col md:flex-row ">
          {dataProduct.map((item) => {
            return (
              <div key={item.id} onClick={() => handleProductClick(item.id)}>
                <ActionAreaCard {...item} />
              </div>
            );
          })}
        </div>
      </div>
      {showdetail && <Details product={showdetail}  handle={handleCloseClick}/>}
      <SFooter />
    </>
  );
}

export default ProductPage;
