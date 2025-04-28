import React, { useState } from 'react';

const FeedbackForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [suggestions, setSuggestions] = useState('');

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSuggestionsChange = (event) => {
    setSuggestions(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      fullName,
      email,
      rating,
      suggestions,
    });
    setFullName('');
    setEmail('');
    setRating('');
    setSuggestions('');
    alert('Thank you for your feedback!');
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Picton Blue gradient effect at top */}
      <div className="absolute top-0 left-0 right-0 h-60 bg-gradient-to-b from-[#3AB0FF] via-[#3AB0FF]/70 to-transparent z-0"></div>
      
      {/* Additional blue blur effect */}
      <div 
        className="absolute top-0 left-0 right-0 h-96 -z-10 blur-2xl opacity-70"
        style={{
          background: 'linear-gradient(to bottom, #3AB0FF 0%, #3AB0FF80 50%, transparent 100%)'
        }}
      ></div>

      {/* Feedback Form */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 max-w-3xl mx-auto border border-white/20 mt-32">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Feedback Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3AB0FF] focus:border-transparent"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3AB0FF] focus:border-transparent"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                How would you rate your overall experience?
              </label>
              <div className="flex flex-wrap gap-4">
                {['Excellent', 'Very Good', 'Good', 'Average', 'Poor'].map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      className="h-4 w-4 text-[#3AB0FF] focus:ring-[#3AB0FF] border-gray-300"
                      type="radio"
                      name="ratingOptions"
                      id={`${option}Rating`}
                      value={option}
                      checked={rating === option}
                      onChange={handleRatingChange}
                      required={option === 'Excellent' && !rating}
                    />
                    <label htmlFor={`${option}Rating`} className="ml-2 text-gray-700">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="suggestions" className="block text-gray-700 font-medium mb-2">
                Do you have suggestions on what we can do to provide you with a better service?
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3AB0FF] focus:border-transparent"
                id="suggestions"
                rows="5"
                value={suggestions}
                onChange={handleSuggestionsChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#3AB0FF] hover:bg-[#2a9cec] text-white font-bold py-3 px-4 rounded-md transition duration-300 shadow-lg hover:shadow-[#3AB0FF]/20"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;