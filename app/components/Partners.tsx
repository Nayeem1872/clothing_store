import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const Partners = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);

          const animatedElements =
            sectionRef.current?.querySelectorAll(".animate-on-scroll");
          animatedElements?.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add("animate");
            }, index * 100);
          });
        }
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

  const partners = [
    {
      name: "FashionTech Industries",
      logo: "FT",
      type: "Manufacturer",
      country: "Italy",
      specialty: "Premium Knitwear",
    },
    {
      name: "Sustainable Textiles Co",
      logo: "STC",
      type: "Supplier",
      country: "India",
      specialty: "Organic Cotton",
    },
    {
      name: "Modern Apparel Group",
      logo: "MAG",
      type: "Brand",
      country: "USA",
      specialty: "Casual Wear",
    },
    {
      name: "Elite Fashion House",
      logo: "EFH",
      type: "Manufacturer",
      country: "France",
      specialty: "Luxury Fabrics",
    },
    {
      name: "GreenThread Sourcing",
      logo: "GT",
      type: "Supplier",
      country: "Portugal",
      specialty: "Sustainable Materials",
    },
    {
      name: "Silk Road Textiles",
      logo: "SRT",
      type: "Manufacturer",
      country: "China",
      specialty: "Silk Processing",
    },
  ];

  return (
    <section id="partners" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-primary/80 font-semibold animate-on-scroll">
            Our Global Network
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-2 animate-on-scroll">
            Partners & Collaborations
          </h3>
          <p className="text-lg text-foreground/80 mt-4 animate-on-scroll">
            We're proud to work with leading names in the clothing industry
            worldwide.
          </p>
        </div>

        <Marquee>
          <div className="flex space-x-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group w-64"
              >
                <div
                  className={cn(
                    "border border-border rounded-xl p-6 h-full transition-all duration-300",
                    "hover:shadow-lg hover:border-primary/30 dark:hover:border-primary/50",
                    "bg-white dark:bg-gray-900/50"
                  )}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-16 w-16 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary">
                      {partner.logo}
                    </div>
                    <Badge
                      variant="outline"
                      className="border-primary/30 text-primary"
                    >
                      {partner.type}
                    </Badge>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {partner.name}
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary" className="bg-secondary/50">
                      {partner.country}
                    </Badge>
                    <Badge variant="secondary" className="bg-secondary/50">
                      {partner.specialty}
                    </Badge>
                  </div>
                  <p className="text-foreground/70">
                    A trusted partner providing quality{" "}
                    {partner.specialty.toLowerCase()} solutions since 2010.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Partners;
