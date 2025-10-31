import React, { useState, useRef, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Chrizia Dela Rosa",
    quote: `Insane Ink was so awesome to work with! They were professional, quick, creative, and executed perfectly!`,
  },
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
    quote: `The baseball shirt I ordered off them was great quality and hand delivered. Amazing people!`,
    images: [require('./Images/Caldera.jpg')],
  },
  {
    name: "Ms. Wang",
    quote: `Insane Ink is custom printing and apparel company run by students at Piedmont Hill High School. My experience as a customer has been overall positive and the quality of hoodie prints has always been excellent. The organization contributes a percentage of their income to projects that benefit the community and is overall a great opportunity for students get hands on experience on developing their customer relation and project management skills.

Something to be aware of is that the prices are not always competitive and you have to give them ample time to deliver an order. Due to limited classroom space, Insane Ink doesn't keep a massive inventory of blank apparel or supplies to be competitive with large online warehouses. The employees are students so it is unfair to expect them to turn over a product overnight.

If you are looking to work with a local printing business, please consider working with the organization. The students are always pleasant to work with eager to provide a positive experience with their customers and their representatives are always willing to negotiate in terms of timeline and pricing. 
`,
  },
  {
    name: "Hoai Le",
    quote: `The crewnecks were extremely soft and the design came out perfectly. I will be buying from Insane Ink in the future.
`,
  },
  {
    name: "Karen Ho",
    quote: `From start to finish, the communication was great. The team kept me updated every step of the way and made the entire process super smooth. You can really tell they care about their customers and take pride in their work.
What makes it even cooler is that Insane Ink is a student-run enterprise! It’s inspiring to see students gaining real-world, hands-on experience in design, customer service, and business operations. They were professional, creative, and so easy to work with.
The jackets we ordered turned out so lovely — the design was clean, vibrant, and exactly what we envisioned. If you’re looking to support student talent while getting high-quality custom apparel, I highly recommend Insane Ink! 
`,
  },
  {
    name: "Connie Liang",
    quote: `Insane ink has great quality prints; the colors are accurate, the print doesn't feel cheap + it's long lasting, and the shirts are of good material. They're also very reliable and have fast communication, and the prices are reasonable. Overall, they're a great option for those looking for shirt-printing services!
`,
  },
  {
    name: "Maggie Chen",
    quote: `My friends and I bought matching shirts for Christmas party. The design is adorable and quality of the shirts were soft. They were also very affordable compared to Etsy and other sites. 
`,
  },
  {
    name: "Danju Kuo",
    quote: `Super comfy and easy to choose when you’re too lazy to pick an outfit. It's stylish and goes well with anything! 😀
`,
  },
  {
    name: "Rochelle Barbiran",
    quote: `Love our insane ink Christmas sweatshirts. It is great, soft, warm, not too thick or thin! Would definitely purchase again. Great job to Insane Ink.
`,
  },

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