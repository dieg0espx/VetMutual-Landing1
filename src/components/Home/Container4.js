import React from "react";
import FAQ from "../faq";
import FormQuote from "../FormQuote";


const Container4 = () => {
  return (
    <section className="container mx-auto px-6 pb-10 text-center lg:mt-[50px]">
      <FAQ />
      <div className="bg-red-700 text-white rounded-xl p-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-left mt-[100px]">
        {/* Left Side */}
        <div className="max-w-md">
          <p className="text-sm">Exclusive benefits for veterans and their families</p>
          <h1 className="text-4xl font-bold mt-2">We Shop, You Save</h1>
          <p className="mt-4 text-lg">
            We instantly compare the top carriers in your state to pinpoint the lowest cost. Our licensed
            specialists then customize a policy to match your family’s exact needs, making sure you never pay
            more than you have to.
          </p>
          {/* Call Button */}
          <div className="mt-6 ">
            <button className="flex items-center gap-2 bg-darkBlue text-white px-6 py-3 rounded-full text-lg">
              📞 (877) 830-3103
            </button>
          </div>
        </div>
        <FormQuote bg='red'/>
      </div>

      {/* Right Side - Form Section */}
    </section>
  );
};

export default Container4;
