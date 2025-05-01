
const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "OneSecAgent has completely transformed our internal processes. The automation they implemented has reduced operational times by 80% and improved accuracy in results.",
      author: "Mark Johnson",
      title: "CTO, Tech Dynamics",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      quote: "The chatbot developed for our customer service has exceeded all expectations. It handles 75% of requests without human intervention, with a 92% customer satisfaction rate.",
      author: "Laura Smith",
      title: "Head of Customer Service, RetailPro",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      quote: "The predictive analysis solution implemented by OneSecAgent has allowed us to anticipate market trends with unprecedented precision. A game-changer for our strategy.",
      author: "John Richards",
      title: "CEO, Finance Insight Group",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ];

  return (
    <section className="py-20 bg-onesec-dark text-white overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-onesec-primary blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-onesec-secondary blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-onesec-accent font-medium mb-3 opacity-0 animate-fade-in">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in delay-1">
            What our clients say
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="mb-6">
                {/* Quote SVG */}
                <svg 
                  className="w-10 h-10 text-onesec-primary/30" 
                  fill="currentColor" 
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8v6c0 6.2-3.8 7.4-5 8l-1-1c1.2-0.6 2-1.6 2-3 0-0.6-0.4-1-1-1h-3c-1.1 0-2-0.9-2-2v-6c0-1.1 0.9-2 2-2h6c1.1 0 2 0.9 2 2zM26 8v6c0 6.2-3.8 7.4-5 8l-1-1c1.2-0.6 2-1.6 2-3 0-0.6-0.4-1-1-1h-3c-1.1 0-2-0.9-2-2v-6c0-1.1 0.9-2 2-2h6c1.1 0 2 0.9 2 2z" />
                </svg>
              </div>
              
              <p className="text-gray-300 mb-8 italic">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-onesec-primary"
                />
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
