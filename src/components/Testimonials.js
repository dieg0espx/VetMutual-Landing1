import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import male1 from '@/images/people/male/photo-1.png';
import male2 from '@/images/people/male/photo-2.png';
import male3 from '@/images/people/male/photo-3.png';
import male4 from '@/images/people/male/photo-4.png';
import female1 from '@/images/people/female/photo-1.png';
import female2 from '@/images/people/female/photo-2.png';
import female3 from '@/images/people/female/photo-3.png';
import female4 from '@/images/people/female/photo-4.png';


import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Brian Scott",
      image: male1,
      review:
        "VetMutual made the process so easy. My premium never goes up, and I feel secure knowing my family is covered.",
    },
    {
      name: "Joshua Davis",
      image: male2,
      review:
        "I’d been turned down before due to pre-existing conditions. VetMutual found a plan that works for me, no medical exam needed.",
    },
    {
      name: "Sarah Walker",
      image: female1,
      review:
        "I’m over 65 and worried about losing VA coverage. They helped me lock in a stable rate that doesn’t change with age.",
    },
    {
      name: "Ashley Gonzalez",
      image: female2,
      review: "My mortgage is protected for the next 20 years. It’s a huge relief!",
    },
    {
      name: "Rafael Gomez",
      image: male3,
      review:
        "Finally, a policy tailored for veterans. They compared multiple carriers and got me a great deal.",
    },
    {
      name: "John Hill",
      image: male4,
      review:
        "I’m glad I didn’t wait. VetMutual answered all my questions and explained living benefits clearly.",
    },
    {
      name: "Caleb Jones",
      image: female3,
      review:
        "Simple process, transparent pricing, and fantastic customer service. Highly recommend.",
    },
    {
      name: "Elizabeth Hall",
      image: female4,
      review:
        "As a veteran spouse, it’s reassuring to know we have coverage that won’t vanish if something happens.",
    },
  ];

  const settingsLeft = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4, // Default for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjusted to avoid instant slides
    cssEase: "linear",
    rtl: false, // Scrolls left
    responsive: [
      {
        breakpoint: 1024, // Tablet (Large)
        settings: {
          slidesToShow: 3, // Show 3 slides on tablets
        },
      },
      {
        breakpoint: 768, // Small Tablets
        settings: {
          slidesToShow: 2, // Show 2 slides on small tablets
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
        },
      },
    ],
  };
  
  const settingsRight = {
    ...settingsLeft,
    rtl: true, // Scrolls right
  };
  

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto text-center my-9">
        <h2 className="text-3xl font-bold">Hear from veterans who we have helped</h2>
      </div>

      <div className="">
        {/* First Row - Scrolls Left */}
        <Slider {...settingsLeft} className="overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bg-white p-6 rounded-xl shadow-md text-left mx-auto h-[230px]">
                <div className="grid grid-cols-[50px_auto] gap-[20px] items-center">
                    <Image src={testimonial.image} alt={testimonial.name} className=" mx-auto rounded-full mb-2" />
                    <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-yellow-500 text-lg">★★★★★</p>
                    </div>
                </div>
                <p className="text-gray-600 mt-2 h-[100px] flex items-center justify-center">
                    {testimonial.review}
                </p>

              </div>
            </div>
          ))}
        </Slider>
        <Slider {...settingsRight} className="overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bg-white p-6 rounded-xl shadow-md text-left mx-auto h-[230px]">
                <div className="grid grid-cols-[50px_auto] gap-[20px] items-center">
                    <Image src={testimonial.image} alt={testimonial.name} className=" mx-auto rounded-full mb-2" />
                    <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-yellow-500 text-lg">★★★★★</p>
                    </div>
                </div>
                <p className="text-gray-600 mt-2 h-[100px] flex items-center justify-center">
                    {testimonial.review}
                </p>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
