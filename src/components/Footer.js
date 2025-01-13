import React from "react";

const Footer = () => {
  return (
    <>
      <footer className=" bg-blue-800 text-white px-10 pt-12 pb-6 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between gap-10">
            {/* <!-- Logo and About Section --> */}
            <div className="max-w-md">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Rent Car Service
              </h1>
              <div className="mt-6">
                <p className="leading-relaxed text-justify text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur incidunt velit itaque? Praesentium voluptatibus
                  assumenda, vitae ratione unde iure voluptatum officiis
                  expedita fuga ipsa eligendi ipsum commodi ducimus, quibusdam
                  corporis ex facere omnis veritatis harum ut quis quos?
                  Eligendi iste officia ut quasi nostrum optio, cumque est
                  molestias aperiam temporibus?
                </p>
              </div>
            </div>

            {/* <!-- Services Section --> */}
            <div>
              <h4 className="font-semibold text-base">Services</h4>
              <ul className="mt-6 space-y-4 text-sm">
                <li>Rent Car</li>
                <li>AC Car</li>
                <li>Non-Ac Car</li>
                {/* <!-- Add more links --> */}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-base">Quick Links</h4>
              <ul className="mt-6 space-y-4 text-sm">
                <li>Home</li>
                <li>Blogs</li>
                <li>Contact</li>
                {/* <!-- Add more links --> */}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-base">Head Office</h4>
              <ul className="mt-6 space-y-4 text-sm">
                <li>DHA Phase 2 Karachi, Pakistan</li>
                <li>0312-3138986</li>
                <li>azharalisheeno009@gmail.com</li>
                {/* <!-- Add more links --> */}
              </ul>
            </div>

            {/* <!-- Repeat Sections for Platforms, Company, and Additional --> */}
          </div>

          <hr className="mt-10 mb-6 border-gray-300" />

          <p className="text-sm text-center">© ReadymadeUI. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
