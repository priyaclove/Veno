"use client";

import React, { useState } from "react";
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend, 
  FiCheckCircle, 
  FiClock, 
  FiGlobe
} from "react-icons/fi";

const ContactUs = () => {
  const [formStatus, setFormStatus] = useState("idle");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

 const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;
  setFormValues(prev => ({
    ...prev,
    [name]: value
  }));
};

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setFormStatus("sending");
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus("idle");
        setFormValues({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      }, 3000);
    }, 2000);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block mb-4 px-6 py-2 bg-red-50 rounded-full text-red-700 font-medium">
            We&lsquo;re here to help
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Contact Us
          </h1>

          <p className="text-xl max-w-2xl mx-auto text-gray-700 mb-12">
            Get in touch with our expert team for personalized assistance and premium support
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#contact-form"
              className="flex items-center gap-2 px-6 py-3 bg-red-700 text-white font-bold rounded-lg hover:bg-red-800 transition-colors"
            >
              <FiSend className="text-lg" />
              Send Message
            </a>
            
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 px-6 py-3 bg-white text-red-700 border-2 border-red-700 font-bold rounded-lg hover:bg-red-50 transition-colors"
            >
              <FiPhone className="text-lg" />
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 bg-white" id="contact-form">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-red-700">
                Reach Out To Us
              </h2>
              
              <div className="w-20 h-1 bg-red-700 mb-8"></div>

              <p className="text-lg text-gray-600 mb-10">
                Our dedicated team is ready to assist you with any inquiries or support needs. 
                We pride ourselves on prompt, professional service.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-red-700 rounded-lg text-white">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600 mb-1">For general inquiries:</p>
                    <a 
                      href="mailto:contact@venovox.com" 
                      className="text-red-700 hover:underline"
                    >
                      contact@venovox.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 bg-red-700 rounded-lg text-white">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600 mb-1">Customer support:</p>
                    <a 
                      href="tel:+15551234567" 
                      className="text-red-700 hover:underline"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 bg-red-700 rounded-lg text-white">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Business Avenue, Suite 456<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-red-700 rounded-lg text-white">
                    <FiClock className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">We&lsquo;ll get back to you as soon as possible</p>
              
              {formStatus === "idle" && (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formValues.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-red-700 outline-none transition bg-gray-50"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-red-700 outline-none transition bg-gray-50"
                      placeholder="johndoe@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2 font-medium text-gray-700">
                      Subject <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formValues.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-red-700 outline-none transition bg-gray-50 appearance-none"
                      style={{ backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"6 9 12 15 18 9\"></polyline></svg>')", backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center" }}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                      Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formValues.message}
                      onChange={handleInputChange}
                      rows={4}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-red-700 outline-none transition bg-gray-50"
                      placeholder="How can we help you today?"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-red-700 text-white font-bold rounded-lg hover:bg-red-800 transition-colors"
                    >
                      <FiSend className="text-lg" />
                      Send Message
                    </button>
                  </div>
                </form>
              )}

              {formStatus === "sending" && (
                <div className="h-80 flex flex-col items-center justify-center text-center">
                  <div 
                    className="w-12 h-12 border-4 border-gray-200 border-t-red-700 rounded-full mb-6"
                    style={{ animation: "spin 1s linear infinite" }}
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sending your message</h3>
                  <p className="text-gray-600">Please wait while we process your request...</p>
                </div>
              )}

              {formStatus === "success" && (
                <div className="h-80 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <FiCheckCircle className="text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We&lsquo;ll get back to you shortly.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="p-2 bg-red-100 text-red-700 rounded-full">
                <FiGlobe className="text-xl" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Our Global Presence
            </h2>
            <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We operate in major business hubs around the world to provide you with localized support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                city: "New York",
                country: "United States",
                address: "123 Business Ave, Suite 456",
                phone: "+1 (555) 123-4567"
              },
              {
                city: "London",
                country: "United Kingdom",
                address: "45 Commerce Street, Floor 3",
                phone: "+44 20 1234 5678"
              },
              {
                city: "Singapore",
                country: "Singapore",
                address: "78 Marina Boulevard, #12-01",
                phone: "+65 6123 4567"
              },
              {
                city: "Sydney",
                country: "Australia",
                address: "90 Harbour Street, Level 8",
                phone: "+61 2 9876 5432"
              }
            ].map((office, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg shadow-md border border-gray-100"
              >
                <div className="w-10 h-10 bg-red-100 text-red-700 rounded-lg flex items-center justify-center mb-4">
                  <FiMapPin className="text-lg" />
                </div>
                <h3 className="text-lg font-bold mb-1 text-gray-900">{office.city}</h3>
                <p className="text-red-700 font-medium mb-3">{office.country}</p>
                <p className="text-gray-600 mb-1">{office.address}</p>
                <p className="text-gray-600">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">
            Find Our Headquarters
          </h2>

          <div className="w-20 h-1 bg-red-700 mx-auto mb-12"></div>

          <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 h-80">
            {/* Replace with your actual map embed */}
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiMapPin className="text-white text-lg" />
                </div>
                <p className="text-gray-700 font-medium">Interactive Map Will Be Displayed Here</p>
                <p className="text-sm text-gray-500 mt-2">123 Business Avenue, New York, NY 10001</p>
              </div>
            </div>
          </div>

          {/* Optional Call-to-Action Button */}
          <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;