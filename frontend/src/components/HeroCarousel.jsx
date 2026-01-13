import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      title: "Welcome to Shop Sphere",
      subtitle: "Discover Eco-Friendly Fashion",
      description: "Explore sustainable style that doesn't compromise on quality",
      image: "/jeans.jpg",
      buttonText: "Shop Jeans",
      buttonLink: "/category/jeans",
      bgColor: "from-blue-600/20 to-indigo-600/20",
    },
    {
      id: 2,
      title: "New Arrivals",
      subtitle: "Fresh Styles Just Dropped",
      description: "Check out our latest collection of trendy t-shirts",
      image: "/tshirts.jpg",
      buttonText: "Shop T-Shirts",
      buttonLink: "/category/t-shirts",
      bgColor: "from-purple-600/20 to-pink-600/20",
    },
    {
      id: 3,
      title: "Step in Style",
      subtitle: "Premium Footwear Collection",
      description: "Find your perfect pair from our curated shoe selection",
      image: "/shoes.jpg",
      buttonText: "Shop Shoes",
      buttonLink: "/category/shoes",
      bgColor: "from-green-600/20 to-teal-600/20",
    },
    {
      id: 4,
      title: "Jacket Season",
      subtitle: "Stay Warm, Look Cool",
      description: "Explore our collection of stylish jackets for every occasion",
      image: "/jackets.jpg",
      buttonText: "Shop Jackets",
      buttonLink: "/category/jackets",
      bgColor: "from-orange-600/20 to-red-600/20",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-2xl shadow-2xl mb-16">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor} backdrop-blur-[2px]`} />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl animate-fade-in">
                {slide.title}
              </h2>
              <p className="text-2xl sm:text-3xl md:text-4xl text-white/90 mb-4 drop-shadow-lg font-semibold">
                {slide.subtitle}
              </p>
              <p className="text-lg sm:text-xl text-white/80 mb-8 drop-shadow-md max-w-2xl mx-auto">
                {slide.description}
              </p>
              <button
                onClick={() => navigate(slide.buttonLink)}
                className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold
                         hover:bg-black hover:text-white transform hover:scale-105
                         transition-all duration-300 shadow-2xl hover:shadow-black/50"
              >
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md
                   hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300
                   shadow-lg hover:shadow-xl z-10 group"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} className="group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md
                   hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300
                   shadow-lg hover:shadow-xl z-10 group"
        aria-label="Next slide"
      >
        <ChevronRight size={28} className="group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-12 h-3 bg-white"
                : "w-3 h-3 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
