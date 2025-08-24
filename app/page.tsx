"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Partners from "./components/Partners";
import { Contact } from "lucide-react";
import Footer from "./components/Footer";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Partners />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
