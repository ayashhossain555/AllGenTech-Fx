import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex justify-center items-center min-h-[70vh] bg-white">
      <div className="w-full max-w-4xl ">
        <div className="flex flex-col md:flex-row">

          {/* Left Side - Contact Information */}
          <div className="w-full md:w-1/2 pr-8 mb-8 md:mb-0">
            <h2 className="text-xl font-bold text-teal-900 mb-4">HEADQUARTER</h2>
            <p className="text-gray-700 mb-6">New York Metropolitan, New York City, United States.</p>
            <h3 className="text-lg font-bold text-teal-900">FOR INQUIRY & SALES</h3>
            <p className="text-gray-700 mb-6">info@allgentech.io</p>
            <h3 className="text-lg font-bold text-teal-900">SEND US YOUR RESUME</h3>
            <p className="text-gray-700">career@allgentech.io</p>
          </div>

          <div className='mr-20'></div>
          
          {/* Right Side - Contact Form */}
          <div className="w-full md:w-1/2">
            <form className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-gray-700">First Name</label>
                <input type="text" id="firstName" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Type here" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
                <input type="text" id="lastName" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Type here" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="example@gmail.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea id="message" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Share your queries here" rows="4"></textarea>
              </div>
              <button type="submit" className="w-full bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500">Send Us</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
