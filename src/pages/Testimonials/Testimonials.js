import React, { useState, useRef, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Solika M.",
    quote: `Two days before Christmas, I was able to gift my Secret Santa a thoughtful and heartfelt poster with pictures of her printed on high-quality, matte paper in a large size and low cost. I looked into a variety of printing services; however, my estimated cost usually ranged about $20, so I decided I would rather support Insane Ink, and I am really glad that I did. Not only was the poster much cheaper than alternative companies, the colors also came out wonderfully, and the ordering process was much easier than I initially imagined. For anyone looking to print anything, I would highly recommend looking into Insane Ink and always supporting small businesses.`,
  },
  {
    name: "Hailey Jane Tangco",
    quote: `Crewneck a 10/10 the quality of the sweater itself is amazing and the design transfer was amazing! I’ve worn the sweater a million times and the softness on the inside has not changed and the design has stayed looking brand new.`,
  },
  {
    name: "Elizabeth Caldera",
    quote: `Great!`,
    images: [require('./Images/Caldera.jpg')],
  }
];

const Testimonials = () => {
  const [expandedQuotes, setExpandedQuotes] = useState(Array(testimonials.length).fill(false));
  const [overflowingQuotes, setOverflowingQuotes] = useState(Array(testimonials.length).fill(false));
  const quoteRefs = useRef([]);

  useEffect(() => {
    const newOverflowing = quoteRefs.current.map(ref => {
      if (ref) {
        const lineHeight = parseFloat(getComputedStyle(ref).lineHeight);
        const maxHeight = 4 * lineHeight;
        return ref.scrollHeight > maxHeight;
      }
      return false;
    });
    setOverflowingQuotes(newOverflowing);
  }, []);

  const toggleQuote = (index) => {
    const updated = [...expandedQuotes];
    updated[index] = !updated[index];
    setExpandedQuotes(updated);
  };

  const [expandedImages, setExpandedImages] = useState(Array(testimonials.length).fill(false));
  const toggleImage = (index) => {
    const updated = [...expandedImages];
    updated[index] = !updated[index];
    setExpandedImages(updated);
  };

  return (
    <div className="testimonial-container">
      <h1 className="testimonial-header">What Our Customers Are Saying</h1>
      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <div className={`quote-wrapper ${expandedQuotes[index] ? 'expanded' : ''}`}>
              <p
                className="testimonial-quote"
                ref={el => (quoteRefs.current[index] = el)}
              >
                "{t.quote}"
              </p>
              {overflowingQuotes[index] && !expandedQuotes[index] && (
                <div className="fade-out" />
              )}
            </div>
            {overflowingQuotes[index] && (
              <button className="show-more" onClick={() => toggleQuote(index)}>
                {expandedQuotes[index] ? "Show Less" : "Show More"}
              </button>
            )}

            <h4 className="testimonial-author">— {t.name}</h4>

            {t.images && t.images.length > 0 && (
              <div className="testimonial-images">
                <button
                  onClick={() => toggleImage(index)}
                  className="image-toggle-button"
                >
                  {expandedImages[index] ? "Hide Image(s) ▲" : "Show Image(s) ▼"}
                </button>

                {expandedImages[index] && (
                  <div className="images-container">
                    {t.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`Testimonial ${i + 1}`}
                        className="testimonial-image"
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;