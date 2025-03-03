import React from "react";
import Image from "next/image";
import placeholderImage from '../../images/placeholder.jpg'

const Container6 = () => {
  return (
    <section className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-[50px]">
      {/* Left Section - Text */}
      <div>
        <h2 className="text-4xl font-bold">About us</h2>
        <p className="text-gray-600 mt-4">
          Aliqua consectetur laborum anim anim quis elit sit cupidatat ipsum cupidatat nostrud adipisicing.
        </p>
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="font-semibold">Innovation</h3>
            <p className="text-gray-500">
              We are pioneers in our field, constantly exploring new ideas and pushing boundaries.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Customer-Centric</h3>
            <p className="text-gray-500">
              Our clients are at the heart of everything we do. We are committed to delivering value and exceeding expectations.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Expertise</h3>
            <p className="text-gray-500">
              Our team consists of industry experts who bring a wealth of knowledge and experience to each project.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Integrity</h3>
            <p className="text-gray-500">
              We operate with the highest level of integrity, ensuring transparency, honesty, and ethical conduct in all our endeavors.
            </p>
          </div>
        </div>
      </div>
      
      {/* Right Section - Image */}
      <div>
        <Image src={placeholderImage} className="md:w-[80%] ml-auto opacity-50 rounded-2xl"/>
      </div>
    </section>
  );
};

export default Container6;
