import React from "react";
import { assets, footer_data } from "../assets/assets";

function Footer() {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        <div>
          <img src={assets.logo} alt="logo" className="w-32 sm:w-44" />
          <p className="max-w-[410px] mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ea
            eum at reiciendis? Ut magni quaerat consequuntur dolor ipsam iste
            amet, ex rerum, aut distinctio optio eum perferendis aperiam sit!
          </p>
        </div>

        <div className="flex flex-wrap w-full justify-between md:w-[45%] gap-5">
          {footer_data.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section.links.map((links) => (
                  <li key={links}>
                    <a href="#">{links}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-sm text-gray-500/80 md:text-base">
        Copyright 2026 QuickBlog DevCreates - All Right Reserved
      </p>
    </div>
  );
}

export default Footer;
