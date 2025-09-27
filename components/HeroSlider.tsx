// Modern full-width hero slider with attractive animations
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const slides = [
  { 
    src: "/1.jpg", 
    alt: "Premium Cake Toppings Collection",
    title: "Premium Quality",
    subtitle: "Fresh ingredients for perfect cakes"
  },
  { 
    src: "/2.jpg", 
    alt: "Artisan Chocolate Decorations",
    title: "Artisan Quality",
    subtitle: "Handcrafted chocolate decorations"
  },
  { 
    src: "/3.jpg", 
    alt: "Fresh Fruit Toppings",
    title: "Fresh & Natural",
    subtitle: "Organic fruit toppings for healthy cakes"
  },
  { 
    src: "/4.jpg", 
    alt: "Gourmet Cake Decorations",
    title: "Gourmet Selection",
    subtitle: "Professional-grade cake decorations"
  },
  { 
    src: "/5.jpg", 
    alt: "Vanila Flavored Cream",
    title: "Smooth and Sweet",
    subtitle: "Bright sprinkles for festive celebrations"
  },
  { 
    src: "/6.jpg", 
    alt: "Premium Nuts & Seeds",
    title: "Nutty Delights",
    subtitle: "Smooth and Delightful for every occasion"
  },
  { 
    src: "/7.jpg", 
    alt: "Premium Cream",
    title: "Creamy & Rich",
    subtitle: "Premium cream for rich cake flavors"
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isPlaying || isHovered) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [isPlaying, isHovered]);

  const nextSlide = () => setIndex((i) => (i + 1) % slides.length);
  const prevSlide = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goToSlide = (i: number) => setIndex(i);

  return (
    <section className="relative">
      <div 
        className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Slides */}
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              i === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            aria-hidden={i !== index}
          >
            <Image 
            src={slide.src} 
            alt={slide.alt} 
            fill 
            className="object-contain w-full h-full" 
            priority={i === 0} 
            sizes="100vw"
            quality={90}
            />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl">
                <div className="animate-fade-in">
                  <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-white mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="font-montserrat text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-accent to-orange-dark text-white font-montserrat font-semibold text-lg rounded-full hover:shadow-glow hover:scale-105 transition-all duration-300 overflow-hidden">
                      <span className="relative z-10">Shop Now</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-dark to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    <button className="px-8 py-4 border-2 border-white text-white font-montserrat font-semibold text-lg rounded-full hover:bg-white hover:text-primary transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Play/Pause button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index 
                ? 'bg-accent scale-125 shadow-glow' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-accent to-orange-dark transition-all duration-100 ease-linear"
          style={{ 
            width: isPlaying && !isHovered ? '100%' : '0%',
            animation: isPlaying && !isHovered ? 'progress 5s linear infinite' : 'none'
          }}
        />
      </div>
    </div>
    </section>
  );
}


