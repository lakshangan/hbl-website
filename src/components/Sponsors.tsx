import React from 'react';

export const Sponsors = () => {
  return (
    <section className="w-full py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Our Sponsors</h2>
        <div className="max-w-2xl mx-auto text-center">
          <div className="border-2 border-dashed border-gray-700 rounded-xl p-8 bg-gradient-to-br from-gray-900 to-black">
            <h3 className="text-2xl font-semibold mb-4">Sponsors Reveal Coming Soon</h3>
            <p className="text-gray-400 mb-6">
              We're partnering with amazing organizations to make this event extraordinary. 
              Stay tuned for the big reveal!
            </p>
            <a 
              href="mailto:contact@example.com" 
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white hover:opacity-90 transition-opacity"
            >
              Become a Sponsor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}; 