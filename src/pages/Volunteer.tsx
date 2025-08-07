import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Heart, Users, Clock, MapPin, CheckCircle } from 'lucide-react';

const volunteerSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  age: z.string().min(1, 'Please select your age group'),
  experience: z.string().min(1, 'Please select your experience level'),
  availability: z.string().min(1, 'Please select your availability'),
  skills: z.array(z.string()).min(1, 'Please select at least one skill'),
  motivation: z.string().min(50, 'Please tell us why you want to volunteer (minimum 50 characters)'),
  termsAccepted: z.boolean().refine(val => val === true, 'You must accept the terms and conditions'),
});

type VolunteerForm = z.infer<typeof volunteerSchema>;

const Volunteer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    reset,
  } = useForm<VolunteerForm>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: {
      skills: [],
      termsAccepted: false,
    },
  });

  const selectedSkills = watch('skills') || [];

  const handleSkillToggle = (skill: string) => {
    const updatedSkills = selectedSkills.includes(skill)
      ? selectedSkills.filter(s => s !== skill)
      : [...selectedSkills, skill];
    setValue('skills', updatedSkills);
  };

  const onSubmit = async (data: VolunteerForm) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Volunteer form submitted:', data);
      
      toast({
        title: 'Application Submitted!',
        description: 'Thank you for your interest. We will contact you soon.',
      });
      
      setIsSubmitted(true);
      reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'There was a problem submitting your application. Please try again.',
        variant: 'destructive',
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-2xl mx-auto shadow-large">
          <CardHeader className="text-center">
            <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
            <CardTitle className="text-3xl text-foreground">Thank You!</CardTitle>
            <CardDescription className="text-lg">
              Your volunteer application has been submitted successfully.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              We're excited about your interest in joining Basti Ki Pathshala. 
              Our team will review your application and contact you within 3-5 business days.
            </p>
            <p className="text-muted-foreground">
              In the meantime, follow us on social media to stay updated with our activities.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)} 
              variant="outline"
              className="mt-6"
            >
              Submit Another Application
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Become a Volunteer
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Join our community of passionate educators and change-makers. 
              Help us create brighter futures for children in need.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Volunteer With Us?
            </h2>
            <p className="text-xl text-muted-foreground">
              Make a meaningful impact while developing your skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="shadow-medium text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Make Real Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Directly contribute to children's education and see the tangible difference you make in their lives.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-medium text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                <CardTitle>Build Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with like-minded individuals and build lasting relationships within our volunteer network.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-medium text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Flexible Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Volunteer on your own terms with flexible timing options that fit your lifestyle and commitments.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Form Section */}
          <Card className="max-w-4xl mx-auto shadow-large">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Volunteer Application Form</CardTitle>
              <CardDescription className="text-center">
                Fill out the form below to start your journey with us
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      {...register('firstName')}
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && (
                      <p className="text-sm text-destructive">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      {...register('lastName')}
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                      <p className="text-sm text-destructive">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      {...register('phone')}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Experience and Availability */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">Age Group *</Label>
                    <Select onValueChange={(value) => setValue('age', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select age group" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="18-25">18-25</SelectItem>
                        <SelectItem value="26-35">26-35</SelectItem>
                        <SelectItem value="36-45">36-45</SelectItem>
                        <SelectItem value="46-55">46-55</SelectItem>
                        <SelectItem value="55+">55+</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.age && (
                      <p className="text-sm text-destructive">{errors.age.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Teaching Experience *</Label>
                    <Select onValueChange={(value) => setValue('experience', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No experience</SelectItem>
                        <SelectItem value="informal">Informal teaching</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5+">5+ years</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.experience && (
                      <p className="text-sm text-destructive">{errors.experience.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability *</Label>
                    <Select onValueChange={(value) => setValue('availability', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekends">Weekends only</SelectItem>
                        <SelectItem value="weekdays">Weekdays only</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                        <SelectItem value="evenings">Evenings only</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.availability && (
                      <p className="text-sm text-destructive">{errors.availability.message}</p>
                    )}
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  <Label>Skills & Interests *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Teaching', 'Art & Crafts', 'Music', 'Sports', 'Mathematics', 'English', 'Science', 'Computer Skills', 'Mentoring'].map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox
                          id={skill}
                          checked={selectedSkills.includes(skill)}
                          onCheckedChange={() => handleSkillToggle(skill)}
                        />
                        <Label htmlFor={skill} className="text-sm font-normal">
                          {skill}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {errors.skills && (
                    <p className="text-sm text-destructive">{errors.skills.message}</p>
                  )}
                </div>

                {/* Motivation */}
                <div className="space-y-2">
                  <Label htmlFor="motivation">Why do you want to volunteer with us? *</Label>
                  <Textarea
                    id="motivation"
                    {...register('motivation')}
                    placeholder="Tell us about your motivation to volunteer and how you'd like to contribute..."
                    rows={4}
                  />
                  {errors.motivation && (
                    <p className="text-sm text-destructive">{errors.motivation.message}</p>
                  )}
                </div>

                {/* Terms */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={watch('termsAccepted')}
                    onCheckedChange={(checked) => setValue('termsAccepted', checked as boolean)}
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the terms and conditions and commit to the volunteer responsibilities *
                  </Label>
                </div>
                {errors.termsAccepted && (
                  <p className="text-sm text-destructive">{errors.termsAccepted.message}</p>
                )}

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Have Questions?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Reach out to us for more information about volunteering opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>New Delhi, India</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📧</span>
              <span>volunteer@bastikipathshala.org</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📞</span>
              <span>+91 98765 43210</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;