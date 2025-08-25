import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Award,
  Shield,
  Clock,
  Users,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Partners", href: "#partners" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Custom Garment Development", href: "#services" },
    { name: "Global Manufacturer Network", href: "#services" },
    { name: "Quality Control & Assurance", href: "#services" },
    { name: "Supply Chain Management", href: "#services" },
    { name: "Compliance & Sustainability", href: "#services" },
  ];

  const industries = [
    "Casual Wear",
    "Formal Clothing",
    "Sportswear",
    "Denim Products",
    "Knitwear",
    "Children's Clothing",
  ];

  const certifications = [
    "OEKO-TEX Standard",
    "GOTS Certified",
    "WRAP Compliance",
    "BSCI Approved",
    "ISO 14001",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-950 text-white overflow-hidden">
      {/* Enhanced Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary glow orbs */}
        <motion.div
          className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Additional accent orbs */}
        <motion.div
          className="absolute top-1/2 left-1/3 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/3 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Enhanced animated grid pattern */}
        <motion.div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.6) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Top decorative wave */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Enhanced Company Info */}
            <div className="lg:col-span-1">
              <motion.div
                className="flex items-center gap-1 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/images/logo.png"
                  alt="R Trade Logo"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
                <div>
                  <motion.span
                    className="block text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    R TRADE
                  </motion.span>
                  <motion.span
                    className="block text-sm text-blue-300/80 font-medium tracking-wider"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    GARMENT SOURCING
                  </motion.span>
                </div>
              </motion.div>

              <motion.p
                className="text-gray-300 mb-8 leading-relaxed text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Your trusted partner in global garment sourcing and
                manufacturing. Connecting brands with premium manufacturers
                since 2009 with a focus on quality, sustainability, and ethical
                practices.
              </motion.p>

              {/* Enhanced Contact Info */}
              <motion.div
                className="space-y-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {[
                  {
                    icon: MapPin,
                    text: "House 123, Road 45, Gulshan-2, Dhaka, Bangladesh",
                    color: "text-emerald-400",
                  },
                  {
                    icon: Phone,
                    text: "+880 1711-123456",
                    color: "text-blue-400",
                  },
                  {
                    icon: Mail,
                    text: "info@rtrade.com",
                    color: "text-purple-400",
                  },
                  {
                    icon: Globe,
                    text: "www.trtrade.co",
                    color: "text-cyan-400",
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="group flex items-start gap-3 text-sm p-3 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer"
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`${contact.color} flex-shrink-0 mt-0.5`}>
                      <contact.icon className="w-4 h-4" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {contact.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced Social Links */}
              <motion.div
                className="flex gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="relative group w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 border border-white/10 hover:border-white/20"
                    whileHover={{ scale: 1.1, y: -3, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    aria-label={social.label}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                    <social.icon className="relative z-10 w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Enhanced Quick Links */}
            <div>
              <motion.h3
                className="text-xl font-bold mb-6 text-white flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full" />
                Quick Links
              </motion.h3>
              <motion.ul
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="group"
                  >
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center gap-3 group p-2 rounded-lg hover:bg-white/5"
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-blue-400/50 group-hover:bg-blue-400 transition-all duration-300"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0" />
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Enhanced Services & Industries */}
            <div>
              <motion.h3
                className="text-xl font-bold mb-6 text-white flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full" />
                Our Services
              </motion.h3>
              <motion.ul
                className="space-y-3 mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="group"
                  >
                    <a
                      href={service.href}
                      className="text-gray-300 hover:text-purple-400 transition-all duration-300 flex items-center gap-3 group text-sm p-2 rounded-lg hover:bg-white/5"
                    >
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-purple-400/50 group-hover:bg-purple-400 transition-all duration-300"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {service.name}
                      </span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-8px] group-hover:translate-x-0" />
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Enhanced Newsletter & Certifications */}
            <div>
              <motion.h3
                className="text-xl font-bold mb-6 text-white flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full" />
                Stay Updated
              </motion.h3>
              <motion.p
                className="text-gray-300 mb-6 text-sm leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Subscribe to our newsletter for industry insights, trends, and
                updates from the world of garment manufacturing.
              </motion.p>

              <motion.form
                onSubmit={handleNewsletterSubmit}
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pr-14 h-12 rounded-xl backdrop-blur-sm hover:bg-white/15 focus:bg-white/15 transition-all duration-300"
                    required
                  />
                  <Button
                    type="submit"
                    size="sm"
                    className="absolute right-2 top-2 h-8 w-8 p-0 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg shadow-lg"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.form>

              {/* Enhanced Certifications */}

              {/* Enhanced Stats */}
              <motion.div
                className="mt-8 grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {[
                  {
                    value: "500+",
                    label: "Partners",
                    color: "from-blue-500 to-cyan-500",
                    icon: Users,
                  },
                  {
                    value: "15+",
                    label: "Years",
                    color: "from-purple-500 to-pink-500",
                    icon: Clock,
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-xl blur-sm group-hover:blur-none transition-all duration-300" />
                    <div className="relative text-center p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-300">
                      <div
                        className={`w-8 h-8 mx-auto mb-2 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                      >
                        <stat.icon className="w-4 h-4 text-white" />
                      </div>
                      <div
                        className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                      >
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <motion.div
            className="flex flex-col lg:flex-row justify-between items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
              <motion.p
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                &copy; {currentYear} R Trade. All rights reserved.
              </motion.p>
              <motion.div
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 font-medium">
                  Trusted Garment Sourcing Partner
                </span>
              </motion.div>
            </div>

            <motion.div
              className="flex flex-wrap items-center gap-6 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Sitemap",
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 relative group"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Additional Info */}
          <motion.div
            className="mt-8 pt-6 border-t border-white/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-xs text-gray-500">
              <motion.p
                className="max-w-2xl text-center lg:text-left leading-relaxed"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                TR Trade is a leading garment sourcing company based in
                Bangladesh, connecting global brands with premium manufacturers
                since 2009. We specialize in quality assurance, sustainable
                practices, and ethical manufacturing partnerships.
              </motion.p>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <motion.div
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-gray-400 text-xs">
                    Powered by{" "}
                    <span className="text-purple-400 font-semibold">
                      AAtron Solution
                    </span>
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
