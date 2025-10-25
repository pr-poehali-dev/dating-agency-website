import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Received",
      description: "Our manager will contact you shortly.",
    });
    setFormData({ name: '', email: '' });
  };

  const benefits = [
    { icon: 'ShieldCheck', title: 'Confidentiality', description: 'Complete privacy protection for all our clients' },
    { icon: 'UserCheck', title: 'Individual Approach', description: 'Personalized service tailored to your preferences' },
    { icon: 'BadgeCheck', title: 'Verified Profiles', description: 'All women undergo thorough verification process' },
    { icon: 'Languages', title: 'Translator Provided', description: 'Professional translation services included' },
    { icon: 'MessageCircle', title: 'Communication Consulting', description: 'Expert guidance during your conversations' },
    { icon: 'Database', title: 'Extensive Database', description: 'Access to large database of verified profiles' },
  ];

  const plans = [
    {
      name: 'Basic',
      price: 'Contact for pricing',
      features: [
        'Access to full database',
        'Minimum 3 matched profiles',
        'Basic profile verification',
        'Email support',
      ],
    },
    {
      name: 'VIP',
      price: 'Contact for pricing',
      featured: true,
      features: [
        'Individual profile search',
        'Unlimited matches until perfect fit',
        '24/7 priority support',
        'Video calls with translator',
        'Personal relationship consultant',
        'Search continues until you find the one',
      ],
    },
  ];

  const steps = [
    { number: 1, title: 'Submit Application', description: 'Fill out the form with your contact details' },
    { number: 2, title: 'Consultation', description: 'Our manager contacts you and helps choose the right plan' },
    { number: 3, title: 'Sign Contract', description: 'We formalize our partnership with legal agreement' },
    { number: 4, title: 'Start Journey', description: 'Begin your search for meaningful relationship' },
  ];

  const faqs = [
    { q: 'How long does it take to find a match?', a: 'The timeline varies based on your preferences. Basic plan clients typically connect with 3+ profiles within 2 weeks. VIP clients receive personalized matches continuously until finding the perfect partner.' },
    { q: 'Are all profiles verified?', a: 'Yes, every woman in our database undergoes thorough verification including identity check, background screening, and personal interview with our team.' },
    { q: 'Do you provide translation services?', a: 'Absolutely. All our plans include professional translation support. VIP clients receive real-time translation during video calls.' },
    { q: 'What makes your service different?', a: 'We combine individual approach, complete confidentiality, verified profiles, and continuous support. Our VIP service searches until you find your ideal partner.' },
    { q: 'Can I switch between plans?', a: 'Yes, you can upgrade from Basic to VIP at any time. Contact your personal manager for details.' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://cdn.poehali.dev/projects/5901d96a-c1fa-4d0e-bc99-6a01ae4385db/files/61829802-3e62-4421-85cf-27c1b287d971.jpg"
            alt="Happy couple"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background" />
        </div>
        <div className="container max-w-5xl mx-auto text-center relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            Find Your Perfect Match
            <span className="block text-primary mt-2">From Russia</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
            Premium matchmaking service connecting distinguished Asian gentlemen with beautiful, verified Russian women for serious relationships
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Journey
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Why Choose Us</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Premium service built on trust and excellence</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border bg-card hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-2xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Membership Plans</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Choose the service level that suits you best</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`border-2 ${plan.featured ? 'border-primary bg-card/50' : 'border-border bg-card'} relative`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-2xl font-semibold text-foreground">{plan.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <Icon name="Check" className="text-primary mr-3 flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.featured ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'}`}
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">How We Work</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Simple and transparent process</p>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Everything you need to know</p>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact-form" className="py-20 px-4 bg-gradient-to-b from-background to-card/30">
        <div className="container max-w-xl mx-auto">
          <Card className="border-2 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl mb-2">Ready to Begin?</CardTitle>
              <CardDescription className="text-lg">Submit your application and our manager will contact you shortly</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 text-base"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg font-semibold">
                  Submit Application
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">© 2025 Premium Matchmaking Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;