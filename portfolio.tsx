"use client"

import { Github, Linkedin, Mail, Twitter,ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import profilelImage from "./public/profile.png" // Adjust the path as necessary
import hireflowLandiing from "./public/hireflowPrev.png" // Adjust the path as necessary
import LinkfreeLanding from "./public/Linkfreelanding.png"; // Adjust the path as necessary
import pokedexLanding from "./public/pokedex.png"; // Adjust the path as necessary
import { useRouter } from "next/navigation"
import Navbar from "./components/navbar"
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
const router = useRouter();

const handleClick = (link:string) => {
  router.push(link);
};
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar></Navbar> */}
      {/* Top Navigation */}
      {/* <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-semibold text-xl text-black">
              Lingampally Shravan kumar
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className={`text-sm transition-colors ${
                  activeSection === "home"
                    ? "text-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`text-sm transition-colors ${
                  activeSection === "about"
                    ? "text-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`text-sm transition-colors ${
                  activeSection === "projects"
                    ? "text-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`text-sm transition-colors ${
                  activeSection === "contact"
                    ? "text-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                Contact
              </button>
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
      </header> */}

      {/* Hero Section */}
      <section id="home" className="p-24">
        <div className="max-w-6xl align-middle text-center justify-self-center mx-auto">
          <div className="text-2xl md:text-6xl font-bold text-black mb-8">
            Full-Stack Developer
          </div>
          <p className="text-xl max-w-3xl text-gray-600 mb-8 leading-relaxed">
            I craft digital experiences with clean code and thoughtful design.
            Specializing in React, Next.js, and modern web technologies.
          </p>

          <div className="">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-black mr-4 text-white hover:bg-gray-800"
            >
              View Resume
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-gray-300 text-black hover:bg-gray-50"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">About Me</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a full-stack developer passionate about building clean,
                scalable web apps. I work with modern tech like React, Node.js,
                and PostgreSQL, and I enjoy solving real-world problems through
                thoughtful design and efficient code. Always learning, always
                building.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open source projects, or sharing knowledge with
                the developer community.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-black mb-3">Frontend</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>React / Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Framer Motion</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-3">Backend</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Node.js</li>
                    <li>PostgreSQL</li>
                    <li>Prisma</li>
                    <li>Vercel</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-full h-64 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                <div className="max-w">
                  <Image
                    className="rounded-lg object-cover"
                    width={256}
                    src={profilelImage}
                    alt="profile picture loading"
                  ></Image>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-black mb-2">
                  Lingampally Shravan
                </h3>
                <p className="text-gray-600">Hyderabad , India</p>
              </div>
            </div> */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 max-w-md mx-auto">
              <div className="w-full aspect-[2/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                <Image
                  src={profilelImage}
                  alt="Profile picture"
                  height={300}
                  className="object-cover"
                  priority
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-black text-lg mb-2">
                  Lingampally Shravan
                </h3>
                <p className="text-gray-600 text-sm">Hyderabad, India</p>
              </div>
            </div>
            ;
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <Image
                    src={LinkfreeLanding}
                    alt="profile picture loading"
                  ></Image>
                </div>
                <CardTitle className="text-black">Linkfree</CardTitle>
                <CardDescription>
                  A free and open-source alternative to Linktree — create sleek,
                  stylish, and efficient bio link pages with ease .
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      Reactjs
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      NodeJs
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <Link
                      href="https://github.com/shravankumar8/LinkFree-Frontend"
                      className="text-gray-600 hover:text-black"
                    >
                      <Github className="w-4 h-4" />
                    </Link>
                    <Link
                      href="https://linkfree.tech"
                      className="text-gray-600 hover:text-black"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <Image
                    src={pokedexLanding}
                    alt="profile picture loading"
                  ></Image>
                </div>
                <CardTitle className="text-black">Pokedex</CardTitle>
                <CardDescription>
                  a simple Pokedex app that allows users to search for Pokémon
                  and view their details.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      nextjs
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <Link
                      target="_blank"
                      href="https://github.com/shravankumar8/Pokemon_Explorer"
                      className="text-gray-600 hover:text-black"
                    >
                      <Github className="w-4 h-4" />
                    </Link>
                    <Link
                      target="_blank"
                      href="https://pokemon-explorer-chi.vercel.app/"
                      className="text-gray-600 hover:text-black"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <Image
                    src={hireflowLandiing}
                    alt="profile picture loading"
                  ></Image>
                </div>
                <CardTitle className="text-black">HireFlow </CardTitle>
                <CardDescription>
                  HireFlow is your all-in-one GenAI-powered HR solution built to
                  simplify and supercharge your hiring process!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      Gemini
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      Nodejs
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      ReactJs
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <Link
                      target="_blankl"
                      href="https://github.com/shravankumar8/hireflow"
                      className="text-gray-600 hover:text-black"
                    >
                      <Github className="w-4 h-4" />
                    </Link>
                    <Link
                      target="_blank"
                      href="https://www.youtube.com/watch?v=VS-wceCgYfw"
                      className="text-gray-600 hover:text-black"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-black mb-12 text-center">
              Experience
        </h2>
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row justify-center gap-6">
          {/* Experience Card 1 */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 w-full md:w-1/2">
            <div className="flex flex-wrap items-center gap-1 text-lg font-semibold">
              <span>Full-Stack Software Developer Intern</span>
              <span className="text-gray-400">@</span>
              <span className="text-gray-600">Stepx Technologies Pvt Ltd</span>
            </div>
            <div className="text-sm text-gray-500">Dec 2024 – Mar 2025</div>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-md text-sm">
                React.js
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-md text-sm">
                Node.js
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-md text-sm">
                MongoDB
              </span>
            </div>
          </div>

          {/* Experience Card 2 */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 w-full md:w-1/2">
            <div className="flex flex-wrap items-center gap-1 text-lg font-semibold">
              <span>Full-Stack Contractor</span>

              <span className="text-gray-600">
                Ai Certs @ netcom learnings pvt ltd
              </span>
            </div>
            <div className="text-sm text-gray-500">Mar 2025 – Apr 2025</div>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-md text-sm">
                Kafka
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-md text-sm">
                Kubernetes
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-md text-sm">
                Docker
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <footer className="bg-white border-t border-gray-200 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-black mb-4">
                Full Stack Devloper Contractor
              </h3>
              <div>
                <p className="text-gray-600 text-wrap text-sm">
                  Full-stack developer crafting digital experiences with clean
                  code and thoughtful design.
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-black mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-gray-600 hover:text-black text-sm transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-600 hover:text-black text-sm transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-gray-600 hover:text-black text-sm transition-colors"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-600 hover:text-black text-sm transition-colors"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-600 hover:text-black text-sm transition-colors"
                  >
                    Blogs
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-black mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://github.com/shravankumar8"
                    className="text-gray-600 hover:text-black text-sm transition-colors"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/shravankumar8"
                    className="text-gray-600 hover:text-black text-sm transition-colors"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=kumashravan5@gmail.com@&su=Hello&body=This%20is%20the%20message"
                    className="text-gray-600 hover:text-black text-sm transition-colors"
                  >
                    Email
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-black mb-4">Location</h4>
              <p className="text-gray-600 text-sm">
                Hyderabad, Telangana , India
                <br />
                Available for remote work
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

