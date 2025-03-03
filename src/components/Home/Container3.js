import React from "react";
import Person from '../../images/person.png'
import Image from "next/image";
import FormQuote from "../FormQuote";
import videoPlaceholder from '../../images/videoPlaceholder.png'
import helpedVeterans from '../../images/helpedVeterans.png'
import usingPhone from '../../images/usingPhone.png'

const Container3 = () => {
  return (
    <section className="container mx-auto px-6 pt-12 text-center">
      <div className="block lg:grid grid-cols-2 justify-between items-center px-0 lg:px-10 py-16 mx-auto gap-[50px] space-y-10 lg:space-y-0">
        {/* Left Content */}
        <div className="text-left">
          <p className="text-red-600 font-bold">+55,000 BUSINESS TRUST</p>
          <h2 className="text-4xl font-bold mt-2">How we helped Isaac</h2>
          <p className="text-gray-600 mt-4">
            Isaac, an Army veteran and first-time homebuyer, protected his
            family’s future with an affordable plan that locked in a stable
            premium and living benefits. We guided him through quick quotes and
            found the best solution for his budget.
          </p>
          <FormQuote />
        </div>
        {/* Right Side Video Thumbnail */}
        <div>
          <Image
            src={videoPlaceholder}
            alt="Veteran Story"
            className="rounded-xl"
          /> 
          <Image src={helpedVeterans} className="w-[300px] ml-auto mt-[20px] lg:mt-[100px]"/>
        </div>
      </div>

      <div className="mx-auto block lg:grid grid-cols-[55%_45%] items-center py-16 lg:px-6 text-left">
        {/* Left Side - Text Content */}
        <div>
          <p className="text-gray-500 text-sm">Standing watch over what you've earned</p>
          <h2 className="text-4xl font-bold mt-2 flex items-center gap-2">
            Mortgage <span className="relative text-black">Protection</span>
          </h2>
          <p className="text-gray-600 mt-4 lg:w-[80%] ">
            Our veteran-focused plans offer peace of mind if you become ill, disabled, or pass away. Unlike 
            government programs that often raise rates, we lock in affordable, level premiums—so you’ll never 
            face surprise hikes. Living benefits are available, allowing you to access funds when a chronic or 
            terminal illness strikes.
          </p>
          {/* Call Button */}
          <div className="mt-6">
            <button className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full text-lg">
              <i className="bi bi-telephone"></i> (877) 830-3103
            </button>
          </div>
        </div>

        {/* Right Side - Image with Floating Card */}
        <div className="relative mt-[50px] lg:mt-0">    
          <Image
            src={usingPhone}
            alt="Person using phone"
            className="relative z-10 w-[70%] lg:w-full ml-auto"
          />

          {/* Floating Card */}
          <div className="absolute top-10 lg:-left-[20%] bg-white rounded-xl shadow-lg border border-gray-100 p-5 w-[230px] z-20 transform scale-[60%] md:scale-[100%] lg:scale-100">
            <h4 className="text-red-600 font-bold">Highlights </h4>
            <div className="mt-3 space-y-3">
              <div className="flex items-center gap-3 bg-red-100 p-2 rounded-lg">
                <span className="text-red-600"> <i class="bi bi-patch-check"></i> </span>
                <p className="text-sm font-semibold">Service Verified</p>
              </div>
              <div className="flex items-center gap-3 bg-blue-100 p-2 rounded-lg">
                <span className="text-blue-600"> <i class="bi bi-shield-check"></i></span>
                <p className="text-sm font-semibold">Lifelong Security</p>
              </div>
              <div className="flex items-center gap-3 bg-yellow-100 p-2 rounded-lg">
                <span className="text-yellow-600"> <i class="bi bi-check-circle"></i> </span>
                <p className="text-sm font-semibold">Priority Processing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Container3;
