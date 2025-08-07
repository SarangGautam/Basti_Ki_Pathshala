import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Globe, ArrowRight, Star, Quote } from 'lucide-react';
import communityImage from '@/assets/community-hands.jpg';
import volunteersImage from '@/assets/volunteers-teaching.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Breaking barriers to education and creating opportunities for children in underserved communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-medium hover:shadow-large transition-smooth group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Quality Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Providing comprehensive learning experiences that prepare children for a bright future with modern teaching methods and resources.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-smooth group">
  <CardHeader className="text-center">
    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-smooth">
      <Users className="h-8 w-8 text-pink-500" />
    </div>
    <CardTitle>Community Building</CardTitle>
  </CardHeader>
  <CardContent>
    <CardDescription className="text-center">
      Strengthening communities by involving families and local leaders in the educational journey of every child.
    </CardDescription>
  </CardContent>
</Card>


            <Card className="shadow-medium hover:shadow-large transition-smooth group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-smooth">
                  <Globe className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Social Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Creating lasting change that extends beyond the classroom to transform entire communities and future generations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Making a Real Difference
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Since our inception, we have been committed to providing quality education 
                to children who need it most. Our community-centered approach ensures 
                sustainable impact and long-term success.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-primary" />
                  <span>Trained over 100 volunteer teachers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-primary" />
                  <span>Established 50+ learning centers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-primary" />
                  <span>95% student retention rate</span>
                </div>
              </div>
              <Button variant="secondary" size="lg" className="mt-8" asChild>
                <Link to="/about" className="group">
                  Read Our Story
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={communityImage}
                alt="Community hands joining together"
                className="rounded-lg shadow-large w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Voices from Our Community
            </h2>
            <p className="text-xl text-muted-foreground">
              Stories that inspire us to continue our mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-medium">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-lg text-muted-foreground mb-4">
                  "Basti Ki Pathshala gave my daughter the education I could never afford. 
                  Today, she dreams of becoming a doctor."
                </p>
                <div className="font-semibold text-foreground">- Sunita Devi, Parent</div>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-lg text-muted-foreground mb-4">
                  "Volunteering here has been the most rewarding experience. Seeing 
                  children learn and grow gives my life purpose."
                </p>
                <div className="font-semibold text-foreground">- Rahul Sharma, Volunteer</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join our community of dedicated volunteers and help transform lives through education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
              <Link
  to="/volunteer"
  className="bg-white-100 text-secondary hover:bg-white/70 px-4 py-2 rounded shadow"
>
  Start Volunteering Today
</Link>

              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary">
                <Link to="/about">Learn About Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;