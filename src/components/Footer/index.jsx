import React from "react";

function SFooter() {
  return (
    <div className="mt-20 py-10 text-white bg-black bottom-0">
      <div className="text-left ms-10 md:ms-20 mb-10 flex flex-col">
        <a href="https://www.instagram.com/saddlebags.co/" target="_blank">Instagram</a>
        <a href="https://tokopedia.link/L7m4szOWhBb" target="_blank">
          Tokopedia
        </a>
        <a href="https://shopee.co.id/omyuman#product_list" target="_blank">
          Shopee
        </a>
        <a href="/customerphotos"> Photos</a>
      </div>
      <hr width="90%" className="mx-auto" />
      <div className="Copy text-center mt-10">
        <p>Copyright 2022 Saddlebagsco</p>
      </div>
    </div>
  );
}

export default SFooter
