import React from "react";

function Details({ product, handle }) {
  return (
    <>
      <div className="details ">
        <div className="detailCard">
          <div className="fixed inset-0 flex items-center flex-col md:flex-row justify-center z-50 bg-black bg-opacity-90 text-white">
            <img
              src={product.image}
              alt="gambar"
              className="w-9/12 md:w-6/12 me-0 md:me-10 rounded-lg "
            />
            <div className="contentProduct leading-6 w-80 box-border mt-10 md:mt-0">
              <h2 className="text-6xl mb-4 text-center md:text-left">{product.judul}</h2>
              <p className="text-2xl">{product.bahan}</p>
              <h4 className="text-2xl mb-4">Rp{product.harga}</h4>
              <p className="break-words">{product.desc}</p>
            </div>
            <button
              className="absolute top-4 right-4 text-white-500 hover:text-gray-700"
              onClick={handle}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
