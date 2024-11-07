import React from "react";
import SNavbar from "../../components/Navbar";
import SFooter from "../../components/Footer";
import { dataPhoto } from "../../data";
import Head from "../../components/Head";

function CustomerPhotos() {
  return (
    <>
      <SNavbar></SNavbar>

      <Head
        title="Customers Photo | Saddlebagsco"
        desc="The following are photos of customers who have used saddlebags on their motorcycles"
        keywords="saddlebagsco, saddle bags, bags motorcycle"
      />

      <div className="container mx-auto">
        <div className="grid grid-rows-6 md:grid-rows-3 grid-flow-col gap-4 mt-40">
          {dataPhoto.map((item, i) => {
            return <img key={i} src={item.cust_img} alt="gambar" loading="lazy" />;
          })}
        </div>
      </div>
      <SFooter />
    </>
  );
}

export default CustomerPhotos;
