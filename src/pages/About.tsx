import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Target, Users, Award, ArrowRight } from 'lucide-react';
import volunteersImage from '@/assets/volunteers-teaching.jpg';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Basti Ki Pathshala
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Empowering communities through education since 2018. 
              We believe every child deserves access to quality learning opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Basti Ki Pathshala began as a small initiative in the narrow lanes of Delhi, 
                  where we noticed countless children missing out on basic education due to 
                  economic constraints and lack of accessible schools.
                </p>
                <p>
                  What started with just 5 children under a tree has now grown into a 
                  movement that reaches over 500 children across 50+ learning centers. 
                  Our grassroots approach ensures that education is not just accessible, 
                  but also culturally relevant and community-driven.
                </p>
                <p>
                  Today, we work hand-in-hand with families, local leaders, and dedicated 
                  volunteers to create sustainable educational ecosystems that transform 
                  entire communities.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={volunteersImage}
                alt="Volunteers teaching children"
                className="rounded-lg shadow-large w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to the community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="shadow-medium hover:shadow-large transition-smooth group text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Compassion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We approach every child and family with empathy, understanding their unique circumstances and needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-smooth group text-center">
  <CardHeader>
    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-smooth">
      <Target className="h-8 w-8 text-pink-400" />
    </div>
    <CardTitle>Excellence</CardTitle>
  </CardHeader>
  <CardContent>
    <CardDescription>
      We strive for the highest quality in education, continuously improving our methods and resources.
    </CardDescription>
  </CardContent>
</Card>


            <Card className="shadow-medium hover:shadow-large transition-smooth group text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-smooth">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We believe in the power of community-driven solutions and collaborative growth.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-smooth group text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-destructive/20 transition-smooth">
                  <Award className="h-8 w-8 text-destructive" />
                </div>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Transparency and honesty guide all our actions and relationships with the community.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-muted-foreground">
              Measurable change in our communities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Children Educated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-pink-500 mb-2">50+</div>
              <div className="text-muted-foreground">Learning Centers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">200+</div>
              <div className="text-muted-foreground">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-destructive mb-2">95%</div>
              <div className="text-muted-foreground">Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Dedicated individuals driving our mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-medium text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">PS</span>
                </div>
                <CardTitle>Priya Sharma</CardTitle>
                <CardDescription>Founder & Director</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Former teacher with 15 years of experience in education and community development.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-pink-500">AK</span>
                </div>
                <CardTitle>Amit Kumar</CardTitle>
                <CardDescription>Program Manager</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Social worker passionate about creating sustainable community-based educational programs.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">SG</span>
                </div>
                <CardTitle>Sunita Gupta</CardTitle>
                <CardDescription>Community Coordinator</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Local community leader who builds bridges between families and educational opportunities.
                </p>
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
              Join Our Mission
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Be part of the change you want to see. Help us create more success stories 
              and transform more lives through education.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/volunteer" className="bg-white-100 text-secondary hover:bg-white/70 group">
                Become a Volunteer
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;