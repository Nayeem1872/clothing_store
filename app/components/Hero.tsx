import { ArrowDown, Calendar, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  motion,
  useCycle,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { ReactNode } from "react";
import MeetingModal from "./MeetingModal";

const InteractiveHoverButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(39, 74, 253, 0.4)",
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 1.2,
        type: "spring",
        stiffness: 100,
      }}
      className="relative bg-gradient-to-r from-[#274AFD] via-[#4F63F7] to-[#6E70F2] text-white 
                 font-semibold py-4 px-8 rounded-full shadow-lg 
                 hover:shadow-xl transition-all duration-300 overflow-hidden
                 border border-white/20 backdrop-blur-sm"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
      <span className="relative z-10 flex items-center gap-2">
        <Calendar className="w-4 h-4" />
        {children}
      </span>
    </motion.button>
  );
};

const FloatingElement = ({
  delay = 0,
  children,
}: {
  delay?: number;
  children: ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: [0, 1, 1, 0],
      y: [20, -10, -20, -40],
      x: [0, 10, -10, 0],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    }}
    className="absolute"
  >
    {children}
  </motion.div>
);

const Hero = () => {
  const ref = useRef(null);
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

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
        repeatType: "mirror" as const,
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
      High-Quality Garments, Sourced Directly from Top Manufacturers
      {/* <br /> */}
    </>,
    // Slide 2
    <>
      Your End-to-End Partner in Apparel Production & Sourcing
      <br />
    </>,
    // Slide 3
    <>
      Seamlessly Connecting Your Brand with the Best in the Industry
      <br />
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
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-purple-950/30 z-10"></div>
        <motion.div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092854584-2d5ba3eeb14d?q=80&w=1974')] bg-cover bg-center"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 2, ease: "easeOut" }}
        ></motion.div>

        {/* Animated grid pattern */}
        <motion.div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.5) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Floating decorative elements */}
      <FloatingElement delay={0}>
        <div className="top-20 left-20">
          <Sparkles className="w-6 h-6 text-blue-400/60" />
        </div>
      </FloatingElement>

      <FloatingElement delay={1}>
        <div className="top-32 right-32">
          <Star className="w-4 h-4 text-purple-400/60" />
        </div>
      </FloatingElement>

      <FloatingElement delay={2}>
        <div className="top-64 left-64">
          <Sparkles className="w-5 h-5 text-indigo-400/60" />
        </div>
      </FloatingElement>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto px-4 lg:px-8 xl:px-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4" />
            Premium Garment Sourcing
          </motion.span>
        </motion.div>

        <motion.h1
          className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] tracking-tight mb-6 text-center px-2 sm:px-4 lg:px-8"
          variants={itemVariants}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 15 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="inline-block bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 dark:from-gray-100 dark:via-blue-400 dark:to-gray-100 bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% 100%",
              }}
            >
              <motion.div
                animate={{
                  backgroundPosition: ["100% 50%", "100% 50%", "100% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 dark:from-gray-100 dark:via-blue-400 dark:to-gray-100 bg-clip-text text-transparent"
                style={{ backgroundSize: "200% 100%" }}
              >
                {slides[current]}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto leading-relaxed px-2 sm:px-4"
          variants={itemVariants}
        >
          We connect buyers with leading garment manufacturers, delivering
          quality, reliability, and timely supply, whether for custom orders or
          ready-to-ship apparel such as jackets, shirts, and more.
        </motion.p>

        <motion.div variants={itemVariants}>
          <InteractiveHoverButton onClick={() => setIsMeetingModalOpen(true)}>
            Schedule a Meeting
          </InteractiveHoverButton>
        </motion.div>

        {/* Stats or features */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto px-2 sm:px-4"
          variants={containerVariants}
        >
          {[
            { number: "400+", label: "Suppliers" },
            { number: "100%", label: "On-Time Delivery" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-4 rounded-lg bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
            >
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="relative"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="rounded-full border border-foreground/20 backdrop-blur-sm bg-background/50 hover:bg-background/70 transition-all duration-300"
          >
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="h-5 w-5" />
            </motion.div>
            <span className="sr-only">Scroll down</span>
          </Button>

          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-blue-400/30"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute left-0 bottom-0 h-[90%] w-[200px] xl:w-[300px] z-10 hidden lg:block"
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
        className="absolute right-0 bottom-0 h-[90%] w-[200px] xl:w-[300px] z-10 hidden lg:block"
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

      {/* Meeting Modal */}
      <MeetingModal
        isOpen={isMeetingModalOpen}
        onClose={() => setIsMeetingModalOpen(false)}
      />
    </section>
  );
};

export default Hero;
