"use client";
import React from "react";


import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
// import profilelImage from "./public/profile.png"; // Adjust the path as necessary
// import LinkfreeLanding from "./public/Linkfreelanding.png"; // Adjust the path as necessary
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("home");
  const handleClick = (link: string) => {
    router.push(link);
  };
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-xl text-black">
            Lingampally Shravan kumar
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {/* <button
              onClick={() =>router.replace("/")}
              className={`text-sm transition-colors ${
                activeSection === "home"
                  ? "text-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Home
            </button> */}
            {/* <button
              onClick={() => router.push("/work")}
              className={`text-sm transition-colors ${
                activeSection === "about"
                  ? "text-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Work
            </button> */}
          
          
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/shravankumar8"
              target="_blank"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shravankumar8"
              target="_blank"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://x.com/Shravankumar8_"
              target="_blank"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
