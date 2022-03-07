import React from "react";
import childPicture from "../../Assets/child.png";

const Quote = () => {
  return (
    <>
      <section className="relative w-full overflow-x-hidden bg-fixed bg-center bg-cover bg-featuresBg">
        <div className="backdrop-blur-3xl">
          <h1 className="text-center text-gray-900 pt-20">Childhood</h1>
          <div className="container h-full mx-auto text-center font-text ">
            <p className="w-3/5 px-5 mx-auto text-2xl mt-10 text-gray-900 shadow-lg rounded-lg py-7 backdrop-blur-2xl bg-white/10">
              Children must think be taught how to think not what to think. <br /> - Megaret Mead
            </p>
            <img src={childPicture} className="w-[30rem] pt-12 relative left-[3rem] mx-auto" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Quote;
