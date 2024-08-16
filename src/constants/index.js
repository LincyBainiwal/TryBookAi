import wishper from '../assets/wishper.jpg'
import eternity from '../assets/eternity.jpg'
import quantum from '../assets/quantum.jpg'
   const navLinks = [
    {
      id: "Features",
      title: "Features",
    },
    {
      id: "How It Works ",
      title: "Work",
    },
    {
      id: "Roadmap",
      title: "Roadmap",
    },
    {
      id: "Api",
      title: "API",
    },
    {
      id: "",
      title: "Price",
    },
    {
      id: "Models",
      title: "Models",
    },
  
  ];
   const prices = [
    {
      "plan": "Standard",
      "price": "0.002",
      "billing": "/mo",
      "features": [
        "5 team members",
        "200+ components",
        "40+ built-in pages",
        "1 year free updates",
        "Lifetime technical support"
      ],
      "buttonText": "Buy Now"
    },
    {
      "plan": "Pro",
      "price": "0.03",
      "billing": "/mo",
      "features": [
        "10 team members",
        "500+ components",
        "100+ built-in pages",
        "2 years free updates",
        "Priority support"
      ],
      "buttonText": "Buy Now"
    },
    {
      "plan": "Enterprise",
      "price": "0.0008",
      "billing": "/mo",
      "features": [
        "Unlimited team members",
        "All components",
        "Unlimited built-in pages",
        "5 years free updates",
        "Dedicated support"
      ],
      "buttonText": "Contact Us"
    },
    {
      "plan": "Basic",
      "price": "0.0006",
      "billing": "/mo",
      "features": [
        "3 team members",
        "100+ components",
        "20+ built-in pages",
        "6 months free updates",
        "Standard support"
      ],
      "buttonText": "Get Started"
    }
  ];
  
  
  
  
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  const sampleBooks=
  [
    {
      "title": "Science Fiction",
      "description": "\"As Dr. Elara stepped through the shimmering portal, she knew there was no turning back. The fate of two universes now rested in her hands...\"",
      "image": quantum,
      "linkText": "Read More"
    },
    {
      "title": "Mystery",
      "description": "\"The old lighthouse stood silent, its beacon long extinguished. But on foggy nights, some swore they could still see its ghostly light...\"",
      "image": wishper,
      "linkText": "Read More"
    },
    {
      "title": "Fantasy",
      "description": "\"The ancient prophecy spoke of a child born with starlight in their eyes. As the comet blazed overhead, the kingdom held its breath...\"",
      "image":eternity,
      "linkText": "Read More"
    }
  ];
  
 
  export {  prices,navLinks,sampleBooks, testimonials };