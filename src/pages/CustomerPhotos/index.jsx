import React from "react";
import SNavbar from "../../components/Navbar";
import SFooter from "../../components/Footer";
import { dataPhoto } from "../../data";

function CustomerPhotos() {
  return (
    <>
      <SNavbar></SNavbar>
      <div className="container mx-auto">
        <div className="grid grid-rows-6 md:grid-rows-3 grid-flow-col gap-4 mt-40">
          {dataPhoto.map((item, i) => {
            return <img key={i} src={item.cust_img} alt="gambar" />;
          })}
        </div>
      </div>
      <SFooter />
    </>
  );
}

export default CustomerPhotos;
