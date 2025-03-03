import React from "react";
import Image from "next/image";
import fullLogo from "../images/full_logo.svg"

const Footer = () => {
  return (
    <footer className="bg-[#0E253D] text-white py-12 px-6">
      <div className="container mx-auto">

        <div className="md:flex justify-between items-center ">
            {/* Logo & Description */}
            <div className="col-span-2 w-fit">
              <Image src={fullLogo}  className="mb-[20px]"/>
              <p className="text-gray-400 max-w-[400px]">
                Velit officia ut cupidatat qui laboris aliquip do Lorem dolor eu. Exceptetur quis mollit fugiat laboris ut sunt tempor magna.
              </p>
            </div>

            {/* Follow Our Socials */}
            <div className="flex flex-col gap-[10px] mt-[30px] md:mt-0">
              <h3 className="font-semibold">Follow our socials</h3>
              <p className="text-gray-400">Velit officia ut cupidatat qui laboris</p>
              <div className="mt-4 flex items-center space-x-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 rounded-md text-gray-900 w-full" 
                />
                <button className="bg-red-600 px-4 py-2 rounded-md text-white">Send</button>
              </div>
            </div>
        </div>
        
        <div className="grid grid-cols-2 gap-[50px] md:flex justify-between mt-[100px] w-[100%] mx-auto">
            {/* Links Sections */}
            <div>
              <h3 className="font-semibold mb-[25px]">Features</h3>
              <ul className="text-gray-400 space-y-5">
                <li>Beta access</li>
                <li>Main features</li>
                <li>New features</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-[25px]">Solutions</h3>
              <ul className="text-gray-400 space-y-5">
                <li>Collaboration</li>
                <li>Engagement</li>
                <li>Satisfaction</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-[25px]">Resources</h3>
              <ul className="text-gray-400 space-y-5">
                <li>Changelog</li>
                <li>Guide</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-[25px]">Community</h3>
              <ul className="text-gray-400 space-y-5">
                <li>Blogs & Article</li>
                <li>Tutorials</li>
                <li>Event</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-[25px]">Company</h3>
              <ul className="text-gray-400 space-y-5">
                <li>Careers</li>
                <li>About us</li>
              </ul>
            </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-gray-400 text-sm flex flex-col md:flex-row justify-between ">
        <div className="flex space-x-4 justify-center">
          <span>Term of Conditions</span>
          <span>Cookies</span>
          <span>Privacy and Security</span>
        </div>
        <span className="text-center">&copy; 2022 Company Name. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;