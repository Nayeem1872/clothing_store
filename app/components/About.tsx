import { CheckCircle, Award, Users, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const About = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const statsData = [
    { icon: Users, value: "200+", label: "Global Partners" },
    { icon: TrendingUp, value: "25+", label: "Years Experience" },
    { icon: Award, value: "50+", label: "Industry Awards" },
  ];

  const benefits = [
    "25+ years of industry expertise",
    "Ethical and sustainable practices",
    "Quality assurance guarantee",
    "Transparent supply chain",
    "Competitive pricing models",
    "Fast-to-market solutions",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/5"
    >
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div className="relative" variants={itemVariants}>
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
              <motion.img
                src="https://images.unsplash.com/photo-1589902860314-e910697dea18?q=80&w=1974"
                alt="Textile factory"
                className="w-full h-auto object-cover transform transition-transform duration-700"
                whileHover={{ scale: 1.05 }}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full transform translate-x-4 translate-y-4 rounded-2xl border-2 border-primary/30 -z-10" />

            <motion.div
              className="absolute -bottom-8 -right-8 z-20 glass-card p-6 rounded-lg max-w-xs shadow-lg backdrop-blur-md"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex flex-col gap-4 z-50">
                {statsData.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 * index }}
                  >
                    <stat.icon className="w-5 h-5 text-primary" />
                    <p className="font-medium">
                      <span className="font-bold gradient-text">
                        {stat.value}
                      </span>{" "}
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.h2
              className="text-sm uppercase tracking-wider text-primary/80 font-semibold"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              About FashionLink
            </motion.h2>
            <motion.h3
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Your Trusted Partner in Global Clothing Sourcing
            </motion.h3>
            <motion.p
              className="text-lg text-foreground/80"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Since 1998, we've connected the world's finest clothing
              manufacturers with leading brands, ensuring quality,
              sustainability, and ethical practices throughout the supply chain.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/10 transition-colors"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground/90">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
