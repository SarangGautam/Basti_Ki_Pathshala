import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-education.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Children learning together in Basti Ki Pathshala"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Education for
            <span className="block text-primary bg-white/10 px-4 py-2 rounded-lg mt-2 backdrop-blur-sm">
              Every Child
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Transforming lives through education in underserved communities. 
            Join us in creating a brighter future, one child at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/volunteer" className="group">
                Become a Volunteer
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transition-bounce hover:bg-white/20">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-white/80">Children Educated</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transition-bounce hover:bg-white/20">
              <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-white/80">Learning Centers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transition-bounce hover:bg-white/20">
              <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">200+</div>
              <div className="text-white/80">Active Volunteers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <div className="w-1 h-3 bg-white/50 rounded-full mx-auto animate-bounce"></div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;