import { Shirt, PackageCheck, Search, BarChart4 } from "lucide-react";
import { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements =
              entry.target.querySelectorAll(".animate-on-scroll");
            animatedElements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: Shirt,
      title: "Product Development",
      description:
        "From concept to creation, we help develop custom clothing lines tailored to your brand's unique requirements.",
    },
    {
      icon: Search,
      title: "Supplier Sourcing",
      description:
        "We connect you with pre-vetted, ethical manufacturers that meet your quality standards and production capabilities.",
    },
    {
      icon: PackageCheck,
      title: "Quality Assurance",
      description:
        "Our rigorous quality control processes ensure your products meet international standards and specifications.",
    },
    {
      icon: BarChart4,
      title: "Market Intelligence",
      description:
        "Stay ahead with our trend forecasting, competitive analysis, and market insights for the clothing industry.",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 md:py-32 bg-secondary/30 dark:bg-secondary/10"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-primary/80 font-semibold animate-on-scroll">
            What We Offer
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-2 animate-on-scroll">
            Comprehensive Clothing Solutions
          </h3>
          <p className="text-lg text-foreground/80 mt-4 animate-on-scroll">
            Our end-to-end services ensure seamless production and delivery of
            premium clothing products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none glass-card overflow-hidden animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary/0"></div>
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
