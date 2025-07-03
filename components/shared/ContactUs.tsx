import Image from "next/image";
import React from "react";
import SmallHaeder from "../SmallHaeder";

const ContactUs = () => {
  return (
    <section className="py-12 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/contact-us.svg"
              alt="Contact Us"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div>
            <SmallHaeder title="Get In Touch" />
            <h2 className="text-4xl font-bold mb-6">Feel Free to Contact</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-red-500 outline-none"
                  placeholder="Enter Name"
                  required
                />
                <input
                  type="email"
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-red-500 outline-none"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-red-500 outline-none"
                  placeholder="Phone"
                  required
                />
                <input
                  type="text"
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-red-500 outline-none"
                  placeholder="Subject"
                  required
                />
              </div>
              <div>
                <textarea
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-red-500 outline-none"
                  rows={1}
                  placeholder="Subject"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition-all duration-300"
              >
                Contract Us +
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
