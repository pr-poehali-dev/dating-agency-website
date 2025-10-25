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
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
        <div className="container max-w-6xl mx-auto px-6 py-4 flex justify-between items-center bg-[#ffffff]">
          <div className="text-sm font-medium tracking-wider">MATCHMAKING</div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
            <a href="#services" className="hover:opacity-60 transition-opacity">Services</a>
            <a href="#process" className="hover:opacity-60 transition-opacity">Process</a>
            <a href="#contact-form" className="hover:opacity-60 transition-opacity">Contact</a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center pt-20 bg-[#ffffff]">
        <div className="container max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in bg-[#ffffff]">
            <h1 className="text-6xl md:text-7xl font-light mb-8 leading-tight tracking-tight">
              CAPTURING the<br/>
              <span className="italic font-serif">ESSENCE</span> of<br/>
              YOUR<br/>
              TREASURED<br/>
              <span className="italic font-serif">MOMENTS</span>
            </h1>
            <Button 
              size="lg" 
              className="bg-foreground hover:bg-foreground/90 text-background font-light text-sm tracking-wider px-12 py-6 mt-4"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              DISCOVER MORE
            </Button>
          </div>
          <div className="relative h-[600px]">
            <img 
              src="https://cdn.poehali.dev/projects/5901d96a-c1fa-4d0e-bc99-6a01ae4385db/files/61829802-3e62-4421-85cf-27c1b287d971.jpg"
              alt="Happy couple"
              className="w-full h-full object-cover opacity-60"
            />
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-[#ffffff]">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="aspect-[3/4] overflow-hidden">
              <img src="https://cdn.poehali.dev/projects/5901d96a-c1fa-4d0e-bc99-6a01ae4385db/files/3e680f98-89aa-489f-8d0a-8167a4bba43b.jpg" alt="Couple" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 opacity-60" />
            </div>
            <div className="aspect-[3/4] overflow-hidden md:mt-12">
              <img src="https://cdn.poehali.dev/projects/5901d96a-c1fa-4d0e-bc99-6a01ae4385db/files/ce9724f8-ad36-4d56-9a58-cabf32093ce3.jpg" alt="Hands" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 opacity-60" />
            </div>
            <div className="aspect-[3/4] overflow-hidden col-span-2 md:col-span-1">
              <img src="https://cdn.poehali.dev/projects/5901d96a-c1fa-4d0e-bc99-6a01ae4385db/files/b81e46f9-2128-4625-9ee8-cf85810f023e.jpg" alt="Happy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 opacity-60" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6 bg-[#ffffff]">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-4 tracking-tight">
            WHY CHOOSE <span className="italic font-serif">US</span>
          </h2>
          <p className="text-center text-muted-foreground mb-20 text-sm tracking-wider">Premium service built on trust and excellence</p>
          <div className="grid md:grid-cols-3 gap-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <Icon name={benefit.icon} className="mx-auto" size={32} />
                </div>
                <h3 className="text-xl font-light mb-3 tracking-wide">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-32 px-6 bg-[#ffffff]">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-4 tracking-tight">
            S<span className="italic font-serif">E</span>RVICES
          </h2>
          <p className="text-center text-muted-foreground mb-20 text-sm tracking-wider">Choose the service level that suits you best</p>
          <div className="grid md:grid-cols-2 gap-16">
            {plans.map((plan, index) => (
              <div key={index} className="text-center border border-border p-12 hover:border-primary transition-colors">
                <div className="mb-6">
                  <h3 className="text-2xl font-light mb-2 tracking-wider italic font-serif">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.price}</p>
                </div>
                <ul className="space-y-4 mb-10 text-sm text-foreground">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex}>{feature}</li>
                  ))}
                </ul>
                <Button 
                  variant="outline"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background font-light text-xs tracking-widest px-8"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  LEARN MORE
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-32 px-6 bg-background">
        <div className="container max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="aspect-square overflow-hidden">
            <img 
              src="https://cdn.poehali.dev/projects/5901d96a-c1fa-4d0e-bc99-6a01ae4385db/files/3e680f98-89aa-489f-8d0a-8167a4bba43b.jpg"
              alt="Process"
              className="w-full h-full object-cover opacity-60"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
              OUR SIGNATURE<br/>
              <span className="italic font-serif">PROCESS</span>
            </h2>
            <div className="space-y-8 mt-12">
              {steps.map((step, index) => (
                <div key={index} className="border-b border-border pb-6">
                  <div className="text-xs tracking-widest mb-2">Step {step.number}</div>
                  <h3 className="text-xl font-light mb-2">{step.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
            <Button 
              variant="outline"
              className="mt-12 border-foreground text-foreground hover:bg-foreground hover:text-background font-light text-xs tracking-widest px-8"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              START YOUR JOURNEY
            </Button>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-20 tracking-tight">
            FREQUENTLY ASKED <span className="italic font-serif">QUESTIONS</span>
          </h2>
          <Accordion type="single" collapsible className="space-y-1">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="text-base font-light hover:opacity-60 py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact-form" className="py-32 px-6 bg-background border-t border-border">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
            READY TO <span className="italic font-serif">BEGIN?</span>
          </h2>
          <p className="text-muted-foreground mb-12 text-sm">Submit your application and our manager will contact you shortly</p>
          <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
            <Input
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="h-14 text-sm border-primary/20 focus:border-primary"
            />
            <Input
              id="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="h-14 text-sm border-primary/20 focus:border-primary"
            />
            <Button type="submit" className="w-full bg-foreground hover:bg-foreground/90 text-background h-14 text-xs tracking-widest font-light">
              SUBMIT APPLICATION
            </Button>
          </form>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-xs tracking-wider">© 2025 PREMIUM MATCHMAKING AGENCY. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;