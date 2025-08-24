import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import {
  MapPin,
  Award,
  Users,
  Globe,
  Star,
  CheckCircle,
  Factory,
  Truck,
  Shield,
  Sparkles,
  ArrowRight,
  Building2,
} from "lucide-react";

const Partners = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const featuredPartners = [
    {
      name: "Apex Garments Ltd",
      logo: "AG",
      type: "Premium Manufacturer",
      country: "Bangladesh",
      city: "Dhaka",
      specialty: "Woven & Knit Garments",
      capacity: "2M+ pieces/month",
      certifications: ["OEKO-TEX", "GOTS", "BSCI"],
      rating: 4.9,
      yearsPartnership: 8,
      description:
        "Leading manufacturer specializing in high-quality woven and knit garments with sustainable practices.",
      color: "from-blue-500 to-cyan-500",
      icon: Factory,
    },
    {
      name: "Viyellatex Group",
      logo: "VG",
      type: "Integrated Manufacturer",
      country: "Bangladesh",
      city: "Gazipur",
      specialty: "Denim & Casual Wear",
      capacity: "1.5M+ pieces/month",
      certifications: ["WRAP", "SA8000", "ISO 14001"],
      rating: 4.8,
      yearsPartnership: 6,
      description:
        "Vertically integrated textile manufacturer with state-of-the-art denim production facilities.",
      color: "from-purple-500 to-pink-500",
      icon: Building2,
    },
    {
      name: "Square Fashions",
      logo: "SF",
      type: "Knitwear Specialist",
      country: "Bangladesh",
      city: "Dhaka",
      specialty: "T-shirts & Polo Shirts",
      capacity: "3M+ pieces/month",
      certifications: ["OEKO-TEX", "GOTS", "OCS"],
      rating: 4.9,
      yearsPartnership: 10,
      description:
        "Premier knitwear manufacturer known for innovative designs and sustainable production methods.",
      color: "from-green-500 to-emerald-500",
      icon: Factory,
    },
    {
      name: "Texeurop Bangladesh",
      logo: "TB",
      type: "European Standard",
      country: "Bangladesh",
      city: "Chittagong",
      specialty: "Formal & Workwear",
      capacity: "800K+ pieces/month",
      certifications: ["WRAP", "BSCI", "SEDEX"],
      rating: 4.7,
      yearsPartnership: 5,
      description:
        "European-standard manufacturing facility focusing on formal wear and professional clothing.",
      color: "from-orange-500 to-red-500",
      icon: Building2,
    },
  ];

  const partnerLogos = [
    { name: "H&M", logo: "H&M" },
    { name: "Zara", logo: "ZARA" },
    { name: "Uniqlo", logo: "UNIQLO" },
    { name: "C&A", logo: "C&A" },
    { name: "Primark", logo: "PRIMARK" },
    { name: "Next", logo: "NEXT" },
    { name: "Marks & Spencer", logo: "M&S" },
    { name: "Target", logo: "TARGET" },
    { name: "Walmart", logo: "WALMART" },
    { name: "Costco", logo: "COSTCO" },
    { name: "Decathlon", logo: "DECATHLON" },
    { name: "Lidl", logo: "LIDL" },
  ];

  const stats = [
    { number: "500+", label: "Manufacturing Partners", icon: Factory },
    { number: "50+", label: "Countries Covered", icon: Globe },
    { number: "98%", label: "Quality Approval Rate", icon: Award },
    { number: "24/7", label: "Support Available", icon: Shield },
  ];

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-purple-950/30 dark:to-pink-950/30 overflow-hidden"
    >
      {/* Background decorations - consistent with other sections */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Animated grid pattern */}
        <motion.div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
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
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm">
              <Globe className="w-4 h-4" />
              Global Network
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 dark:from-gray-100 dark:via-blue-400 dark:to-gray-100 bg-clip-text text-transparent"
          >
            Trusted Manufacturing Partners
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
          >
            We collaborate with world-class manufacturers and suppliers across
            the globe, ensuring quality, compliance, and sustainable production
            practices.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-4 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Featured Partners */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100"
          >
            Featured Manufacturing Partners
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPartners.map((partner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="h-full border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden relative rounded-2xl p-6">
                  {/* Gradient border */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${partner.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                    style={{ padding: "2px" }}
                  >
                    <div className="h-full w-full bg-white dark:bg-gray-900 rounded-2xl" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <motion.div
                          className={`h-16 w-16 rounded-2xl bg-gradient-to-r ${partner.color} flex items-center justify-center shadow-lg`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <partner.icon className="h-8 w-8 text-white" />
                        </motion.div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                            {partner.name}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {partner.city}, {partner.country}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          {partner.rating}
                        </span>
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge
                        className={`bg-gradient-to-r ${partner.color} text-white border-0`}
                      >
                        {partner.type}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-gray-100 dark:bg-gray-800"
                      >
                        {partner.capacity}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-green-500 text-green-600"
                      >
                        {partner.yearsPartnership}+ years
                      </Badge>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {partner.description}
                    </p>

                    {/* Specialty */}
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Specialty:{" "}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {partner.specialty}
                      </span>
                    </div>

                    {/* Certifications */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {partner.certifications.map((cert, certIndex) => (
                        <div
                          key={certIndex}
                          className="flex items-center gap-1 px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded-full"
                        >
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span className="text-xs text-green-700 dark:text-green-400">
                            {cert}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button
                      variant="ghost"
                      className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-300"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Logos Marquee */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
            Trusted by Leading Brands
          </h3>
          <div className="relative">
            <Marquee className="py-4" pauseOnHover>
              {partnerLogos.map((logo, index) => (
                <div
                  key={index}
                  className="mx-8 flex items-center justify-center w-32 h-16 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <span className="text-lg font-bold text-gray-700 dark:text-gray-300">
                    {logo.logo}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Connect with Our Manufacturing Network?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join our network of successful brands and access vetted
              manufacturers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
              >
                <Users className="w-5 h-5 mr-2" />
                Join Our Network
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold"
              >
                <Globe className="w-5 h-5 mr-2" />
                Explore Partners
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
