import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import { ReactNode } from "react";

const InteractiveHoverButton = ({ children }: { children: ReactNode }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gradient-to-r from-[#274AFD] to-[#6E70F2] text-white 
                 font-medium py-4 px-8 rounded-full shadow-lg 
                 hover:shadow-xl transition-all"
    >
      {children}
    </motion.button>
  );
};

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  const humanFigureVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 0.9,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const humanFigureRightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 0.9,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const variants = {
    pos1: { left: "50%", top: "-105px", x: "-50%", y: "6rem" },
    pos2: { left: "6%", top: "52%", x: "-100%", y: "0%" },
    pos3: { left: "94%", top: "52%", x: "0%", y: "0%" },
  };

  // Only cycle the dot
  const [dotPos, cycleDot] = useCycle("pos1", "pos2", "pos3");

  useEffect(() => {
    const id = setInterval(cycleDot, 4000);
    return () => clearInterval(id);
  }, [cycleDot]);

  const slides = [
    // Slide 1
    <>
      Pixel-Perfect UI/UX Design for a<br />
      Seamless User Experience
    </>,
    // Slide 2
    <>Custom WordPress Website, Flexible, Scalable & SEO Friendly</>,
    // Slide 3
    <>
      SaaS Website Design & Development
      <br />
      for Maximum Conversions
    </>,
  ];

  const [current, cycle] = useCycle(0, 1, 2);

  // Every 4s, advance
  useEffect(() => {
    const id = setInterval(() => cycle(), 4000);
    return () => clearInterval(id);
  }, [cycle]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 dark:from-primary/10 dark:to-secondary/10 z-10"></div> */}
        <motion.div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092854584-2d5ba3eeb14d?q=80&w=1974')] bg-cover bg-center"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
        ></motion.div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-[876px] mx-auto px-4">
        <h1 className="font-bold text-[48px] leading-[1.1] tracking-tight mb-6 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 dark:from-gray-100 dark:via-blue-400 dark:to-gray-100 bg-clip-text text-transparent"
            >
              {slides[current]}
            </motion.div>
          </AnimatePresence>
        </h1>
        <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-8 max-w-2xl mx-auto">
          We design and develop stunning, high-performing websites for SaaS
          products to maximize conversions.
        </p>
        <InteractiveHoverButton>Book A Call</InteractiveHoverButton>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        // variants={floatingVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="rounded-full border border-foreground/20 backdrop-blur-sm bg-background/50"
          >
            <ArrowDown className="h-5 w-5" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute left-0 bottom-0 h-[90%] w-[300px] z-10 hidden lg:block"
        variants={humanFigureVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative w-full h-full">
          <motion.img
            src="/images/pic1.jpg"
            alt="Professional figure"
            className="h-full w-full object-cover object-center opacity-80 rounded-tr-3xl"
            style={{
              clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 100%)",
              filter: "saturate(0.8) contrast(1.1)",
            }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </motion.div>

      <motion.div
        className="absolute right-0 bottom-0 h-[90%] w-[300px] z-10 hidden lg:block"
        variants={humanFigureRightVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative w-full h-full">
          <motion.img
            src="/images/pic2.jpg"
            alt="Professional figure"
            className="h-full w-full object-cover object-center opacity-80 rounded-tl-3xl"
            style={{
              clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 100%)",
              filter: "saturate(0.8) contrast(1.1)",
            }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </motion.div>

      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-32 -right-20 w-80 h-80 bg-secondary/30 dark:bg-secondary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  );
};

export default Hero;
