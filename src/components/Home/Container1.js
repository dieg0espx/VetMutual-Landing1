import React, { useState } from "react";
import FormQuote from "../FormQuote";

const Container1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
  });



  const features = [
    {
      icon: <i className="bi bi-shield-check"></i>, // Replace with actual icons
      title: "Mortgage Protection",
      description:
        "Safeguard your home from unexpected life events. Coverage options that pay off or cover your mortgage if you’re unable to.",
      color: "text-blue-600",
    },
    {
      icon: <i className="bi bi-bar-chart-steps"></i>,
      title: "Compare 100s of quotes instantly",
      description:
        "We partner with top-rated carriers so you get the most affordable plan, no extra cost or hidden fees.",
      color: "text-red-600",
    },
    {
      icon: <i className="bi bi-star"></i>,
      title: "We do the shopping. You do the saving.",
      description:
        "Our team is comprised of veterans who compare all available policies for you. It’s fast, simple, and focused on your budget.",
      color: "text-blue-600",
    },
  ];

  return (
  <>
    <section className="container mx-auto px-6 pt-[30px] md:pt-[150px] pb-[40px] block lg:grid grid-cols-[55%_45%]">
      {/* Left Section */}
      <div className="space-y-5 md:space-y-0">
        <p className="bg-lightRed w-fit px-5 py-2 rounded-full text-red-500">  <i className="bi bi-bookmark-star mr-2"></i> We Salute You </p>
        <h1 className="text-[40px] md:text-[60px] font-bold block leading-[1.1] md:leading-[1.2]">
          Secure Your Home, Protect Your Family
        </h1>
        <p className="text-gray-500 w-full md:w-[80%]">
          At VetMutual, we specialize in connecting veterans with personalized, affordable mortgage protection. We partner with hundreds of A+ rated insurance carriers to deliver custom coverage that won’t surprise you with rising premiums.
        </p>
      </div>
      <FormQuote />
    </section>
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between gap-6 px-0 lg:px-6 py-10">
        {features.map((feature, index) => (
          <div key={index} className="flex-1 text-left border-l pl-4">
            <div className={`${feature.color} text-2xl mb-2`}>{feature.icon}</div>
            <h3 className="font-bold">{feature.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </>
  );
};

export default Container1;
