import React from "react";

export default function Footer() {
  return (
    <div className="pt-12 pl-8 bg-teal-950 text-white open-sans-font md:px-10">
      <div className="pt-12">
        <img
          className="mt-12 pt-12 size-5/12 pb-8 md:size-3/12 md:px-8"
          src="../../public/images/logo2.svg"
          alt="logo"
        />
      </div>

      <div className="md:flex flex-row gap-12 pr-3 md:p-8">
        <div className="flex flex-col gap-4 md:basis-2/5">
          <div className="flex flex-row">
            <div className="basis-1/5">
              <img
                src="../../public/images/icon-location.svg"
                alt="location-icon"
              />
            </div>
            <div className="basis-4/5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                mollitia eaque necessitatibus doloremque modi excepturi.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="basis-1/5">
              <img src="../../public/images/icon-phone.svg" alt="phone-icon" />
            </div>
            <div className="basis-4/5">
              <p>+1-543-123-4567</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="basis-1/5">
              <img src="../../public/images/icon-email.svg" alt="email-icon" />
            </div>
            <div className="basis-3/4">
              <p>huddle@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-8 md:gap-4 md:flex md:flex-row md:py-0 md:basis-2/5">
          <div className="md:flex flex-col basis-1/2">
            <div className="pb-3">About Us</div>
            <div className="pb-3">What We Do</div>
            <div className="pb-3">FAQ</div>
          </div>
          <div className="md:flex flex-col basis-1/2">
            <div className="pb-3">Career</div>
            <div className="pb-3">Blog</div>
            <div className="pb-3">Contact Us</div>
          </div>
        </div>
        <div className="flex justify-center gap-4 md:basis-1/5">
          <div className="border rounded-full px-2 h-min">
            <i className="fa-2xs fa-brands fa-facebook-f"></i>
          </div>
          <div className="border rounded-full px-2 h-min">
            <i className="fa-2xs fa-brands fa-twitter"></i>
          </div>
          <div className="border rounded-full px-2 h-min">
            <i className="fa-2xs fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>

      <div className="text-xs font-thin text-center p-4 md:text-right">
        &copy; Copyright {new Date().getFullYear()} Huddle. All rights reserved.
      </div>
    </div>
  );
}
