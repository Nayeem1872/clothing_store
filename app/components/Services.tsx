import {
  Shirt,
  PackageCheck,
  Search,
  BarChart4,
  Globe,
  Shield,
  Clock,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
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

  const services = [
    {
      icon: Shirt,
      title: "Custom Garment Development",
      description:
        "From initial sketches to final production, we transform your vision into high-quality garments with precision manufacturing.",
      features: [
        "Design Consultation",
        "Pattern Making",
        "Sample Production",
        "Technical Specifications",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Search,
      title: "Global Manufacturer Network",
      description:
        "Access our curated network of 500+ verified manufacturers across Asia, ensuring ethical practices and competitive pricing.",
      features: [
        "Factory Audits",
        "Compliance Verification",
        "Cost Optimization",
        "Lead Time Management",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: PackageCheck,
      title: "End-to-End Quality Control",
      description:
        "Multi-stage quality assurance from raw materials to finished products, guaranteeing 98% defect-free delivery.",
      features: [
        "Material Testing",
        "In-Line Inspection",
        "Final QC",
        "Packaging Standards",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Globe,
      title: "Supply Chain Management",
      description:
        "Streamlined logistics and inventory management ensuring on-time delivery and cost-effective distribution worldwide.",
      features: [
        "Inventory Planning",
        "Shipping Coordination",
        "Customs Clearance",
        "Real-time Tracking",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: BarChart4,
      title: "Market Intelligence & Trends",
      description:
        "Stay ahead with comprehensive market analysis, trend forecasting, and competitive insights for strategic decisions.",
      features: [
        "Trend Analysis",
        "Market Research",
        "Competitor Insights",
        "Price Benchmarking",
      ],
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Shield,
      title: "Compliance & Sustainability",
      description:
        "Ensure ethical manufacturing with our sustainability programs and compliance with international standards.",
      features: [
        "OEKO-TEX Certified",
        "Fair Trade Practices",
        "Carbon Footprint Reduction",
        "Social Compliance",
      ],
      color: "from-teal-500 to-green-500",
    },
  ];

  const stats = [
    { number: "100+", label: "Factories", icon: Users },
    { number: "98%", label: "On-time delivery rate", icon: Clock },
    { number: "50+", label: "Countries served", icon: Globe },
    { number: "24/7", label: "Customer support", icon: Shield },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-blue-50/30 dark:from-slate-900 dark:via-indigo-950/30 dark:to-blue-950/30 overflow-hidden"
    >
      {/* Background decorations - consistent with other sections */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl"
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
              <Sparkles className="w-4 h-4" />
              Our Services
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 dark:from-gray-100 dark:via-blue-400 dark:to-gray-100 bg-clip-text text-transparent"
          >
            Complete Garment Solutions
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
          >
            From concept to delivery, we provide comprehensive clothing
            manufacturing and sourcing services that ensure quality, efficiency,
            and sustainability at every step.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
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

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                {/* Gradient border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
                  style={{ padding: "2px" }}
                >
                  <div className="h-full w-full bg-white dark:bg-gray-900 rounded-lg" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  <CardHeader className="p-0 mb-6">
                    <motion.div
                      className={`h-16 w-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-0">
                    <CardDescription className="text-gray-600 dark:text-gray-300 text-base mb-6 leading-relaxed">
                      {service.description}
                    </CardDescription>

                    {/* Features list */}
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * featureIndex }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    {/* <Button
                      variant="ghost"
                      className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button> */}
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
