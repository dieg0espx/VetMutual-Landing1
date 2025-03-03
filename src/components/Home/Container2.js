import React from "react";
import Image from "next/image";
import placeholderImage from '../../images/placeholder.jpg'
import PartnerSlider from "../PartnerSlider";

const Container2 = () => {
  return (
    <section className="bg-darkBlue mx-auto px-6 pt-[80px] pb-[40px] mt-[50px] text-center">
      <p className="text-white font-semibold text-[20px]"> Loved by Product-led Teams </p>
      <PartnerSlider />
    </section>
  );
};

export default Container2;

