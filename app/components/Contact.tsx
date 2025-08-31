import {
  PhoneCall,
  Mail,
  MapPin,
  Send,
  Clock,
  MessageCircle,
  Globe,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Calendar,
  Users,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // WhatsApp functionality
  const handleWhatsAppClick = () => {
    const phoneNumber = "+8801711123456"; // Replace with your actual WhatsApp number
    const message = encodeURIComponent(
      "Hello! I'm interested in your garment sourcing services. Could you please provide more information?"
    );
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(
      "+",
      ""
    )}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  // Handle contact method clicks
  const handleContactMethodClick = (method: any) => {
    if (method.title === "Live Chat") {
      handleWhatsAppClick();
    }
    // Add other contact method handlers here if needed
  };

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error status when user starts typing
    if (submitStatus === "error") {
      setSubmitStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setErrorMessage(
        "Please fill in all required fields (Name, Email, and Message)"
      );
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
        });
        // Auto-hide success message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          result.error || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: PhoneCall,
      title: "Call Us Directly",
      subtitle: "Speak with our sourcing experts",
      value: "+880 1706613046",
      description: "Available 24/7 for urgent inquiries",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "Email Support",
      subtitle: "Get detailed responses",
      value: "info@rtrade.com",
      description: "Response within 2-4 hours",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      subtitle: "Meet us in person",
      value: "Dhaka, Bangladesh",
      description: "House 123, Road 45, Gulshan-2",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      subtitle: "Instant messaging support",
      value: "Chat Now",
      description: "Available during business hours",
      color: "from-orange-500 to-red-500",
    },
  ];

  const quickActions = [
    {
      icon: Calendar,
      label: "Schedule Meeting",
      description: "Book a consultation call",
    },
    {
      icon: Users,
      label: "Request Quote",
      description: "Get pricing for your project",
    },
    {
      icon: Globe,
      label: "Factory Tour",
      description: "Visit our manufacturing partners",
    },
    {
      icon: Headphones,
      label: "24/7 Support",
      description: "Round-the-clock assistance",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-br from-indigo-50 via-white to-cyan-50/30 dark:from-indigo-950 dark:via-gray-900 dark:to-cyan-950/30 overflow-hidden"
    >
      {/* Background decorations - consistent with other sections */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 rounded-full blur-3xl"
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
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 dark:from-gray-100 dark:via-blue-400 dark:to-gray-100 bg-clip-text text-transparent"
          >
            Let's Start Your Sourcing Journey
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Connect with our garment sourcing experts to discuss your
            manufacturing needs, get quotes, and discover how we can help scale
            your clothing business.
          </motion.p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {quickActions.map((action, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-4 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 cursor-pointer group"
            >
              <action.icon className="w-8 h-8 mx-auto mb-2 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
              <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                {action.label}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {action.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Methods */}
            <motion.div
              className="lg:col-span-2"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100"
              >
                Multiple Ways to Reach Us
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group cursor-pointer"
                    onClick={() => handleContactMethodClick(method)}
                  >
                    <Card className="h-full border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                      {/* Gradient border */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
                        style={{ padding: "2px" }}
                      >
                        <div className="h-full w-full bg-white dark:bg-gray-900 rounded-lg" />
                      </div>

                      <CardContent className="relative z-10 p-6">
                        <div className="flex items-start gap-4">
                          <motion.div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <method.icon className="w-6 h-6 text-white" />
                          </motion.div>

                          <div className="flex-1">
                            <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-1">
                              {method.title}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                              {method.subtitle}
                            </p>
                            <p className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                              {method.value}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500">
                              {method.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Business Hours */}
              <motion.div
                variants={itemVariants}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Business Hours
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">
                      Monday - Friday
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      9:00 AM - 6:00 PM (GMT+6)
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">
                      Saturday
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      10:00 AM - 4:00 PM (GMT+6)
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">
                      Emergency Support
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      24/7 Available
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">
                      Response Time
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Within 2-4 hours
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="lg:col-span-1"
            >
              <Card className="border-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                    <Send className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    Send Us a Message
                  </CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                          <p className="text-green-800 dark:text-green-300 font-medium">
                            Message sent successfully! We'll get back to you
                            within 24 hours.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              !
                            </span>
                          </div>
                          <p className="text-red-800 dark:text-red-300 font-medium">
                            {errorMessage}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                        >
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                          disabled={isSubmitting}
                          className="bg-white/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 disabled:opacity-50"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@company.com"
                          required
                          disabled={isSubmitting}
                          className="bg-white/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                      >
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        disabled={isSubmitting}
                        className="bg-white/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        disabled={isSubmitting}
                        className="bg-white/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What can we help you with?"
                        disabled={isSubmitting}
                        className="bg-white/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your garment sourcing requirements, quantities, timeline, and any specific needs..."
                        rows={4}
                        required
                        disabled={isSubmitting}
                        className="bg-white/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 disabled:opacity-50"
                      />
                    </div>

                    <motion.div
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        size="lg"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            Send Message
                            <ArrowRight className="h-5 w-5 ml-2" />
                          </>
                        )}
                      </Button>
                    </motion.div>

                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      We respect your privacy and will never share your
                      information.
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-20"
        >
          <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Our sourcing experts are standing by to help you find the perfect
              manufacturing solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                Call Now: +880 1706613046
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white/95 backdrop-blur-sm text-blue-600 hover:bg-white hover:text-blue-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/50 hover:border-white"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Video Call
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
