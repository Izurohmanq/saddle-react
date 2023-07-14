import React from "react";
import SNavbar from "../../components/Navbar";
import LogoMotor from "../../assets/images/Group 4.png";
import PackItSafeRide from "../../assets/images/tas 3 - Copy.jpg"
import SFooter from "../../components/Footer";

function HomePage() {
  return (
    <>
      <SNavbar></SNavbar>

      <div className="container mx-auto mt-40 bg-[url('./assets/images/motor1.jpeg')] flex items-center flex-col justify-center w-4/5 h-96 bg-no-repeat bg-cover rounded-2xl border-solid border-8 border-black">
        <h2 className="saddlebags text-3xl sm:text-5xl md:text-7xl text-white md:text-rose-700">
          Saddlebagsco
        </h2>
        <p  className="font-bold text-rose-700">-Sidebag-</p >
      </div>

      <section className="content flex m-auto pt-8 justify-center items-center flex-col md:flex-row">
        <div className="content-rigth">
          <img
            src={PackItSafeRide}
            width="300"
            alt="motor tas"
            className="rounded-3xl border-solid border-8 border-black"
          />
        </div>
        <div className="content-left md:ms-8 w-4/6 md:w-2/6 text-center md:text-left mt-10 md:mt-1">
          <h1 className="text-4xl md:text-7xl ">PACK IT SAFE RIDE</h1>
          <p className="text-lg md:text-xl my-9">
            Welcome to SaddlebagsCo, where classic motorcycle enthusiasts can
            find the perfect saddlebags for their ride.
          </p>
          <a href="/product">
            <button className="p-5 bg-black hover:bg-white border-2 border-black text-white hover:text-black rounded-2xl">Explore Product</button>
          </a>
        </div>
      </section>

      <div className="contain mx-auto mt-10 font-['Poppins']">
        <img
          src={LogoMotor}
          className="w-80 md:w-2/4 lg:w-3/4 mx-auto rounded-2xl border-solid border-8 border-black"
          alt="dari Customer"
        />
        <h2 className="grid grid-cols-2 gap-x-7 mx-auto w-4/6 text-4xl text-sky-400 hover:text-sky-700 my-10">
          <a href="https://www.instagram.com/p/BzmyCqJnAV1/">@jeasism</a>
        </h2>
        <div className="caption">
          <div className="row">
            <div className="grid grid-cols-2 gap-x-7 mx-auto w-5/6 md:w-4/6">
              <p>
                "Jelas looks si Nyonya Tua pun perlu kita perhatikan, kurang
                puas jika kita ajak berkeliling tanpa dandanan yang pas"
              </p>
              <p>
                "Leather Sidebag @saddlebags.co jelas pas dan cocok buat si
                Nyonya Tua! Semakin buatnya berisi, curvy dan gahar!""
              </p>
            </div>
          </div>
        </div>
      </div>

      <SFooter></SFooter>
    </>
  );
}

export default HomePage;
