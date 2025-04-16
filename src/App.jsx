import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <div className="bg-black text-white font-fira min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <span className="font-bold">kyra daphne</span>
        <nav className="space-x-4 text-sm">
          <a href="#home" className="hover:underline text-white">#home</a>
          <a href="#works" className="hover:underline">#works</a>
          <a href="#about-me" className="hover:underline">#about-me</a>
          <a href="#contacts" className="hover:underline">#contacts</a>
        </nav>
      </header>

      {/* Intro */}
      <section className="p-10" id="home">
        <h1 className="text-4xl font-bold">kyra daphne //</h1>
        <p className="text-pink-200">web design</p>
        <p className="text-lime-200">front-end development</p>
        <p className="text-green-200">sap erp solutions</p>
        <button className="mt-4 border border-white px-4 py-1 text-sm hover:bg-white hover:text-pink-300 transition">contact me &gt;&gt;</button>
      </section>

      {/* Quote */}
      <section className="p-10">
        <p className="border-l-4 border-white pl-4 italic">
          “with great power comes great electricity bills”
          <br />
          <span className="block text-right">- Dr. Who</span>
        </p>
      </section>

      {/* Projects */}
      <section className="p-10" id="works">
        <h2 className="text-xl font-bold mb-4 text-pink-200">#projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Wowowin",
              desc: "Minecraft servers hosting",
              tech: "HTML SCSS Python Flask",
            },
            {
              title: "Portfolio",
              desc: "Discord anti-crash bot",
              tech: "React Node.js HTML CSS",
            },
            {
              title: "Flu",
              desc: "AI prescriber",
              tech: "CSS Express Node.js",
            },
          ].map((proj, index) => (
            <div key={index} className="border border-gray-700 p-4">
              <p className="text-xs text-gray-400">{proj.tech}</p>
              <h3 className="font-bold text-lg">{proj.title}</h3>
              <p className="text-sm">{proj.desc}</p>
              <button className="mt-2 border px-2 py-1 text-xs hover:bg-white hover:text-pink-300 transition">Live ⇔</button>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="p-10">
        <h2 className="text-xl font-bold mb-4 text-pink-200">#skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="border border-gray-700 p-5">
            <p className="font-semibold text-pink-100">Languages</p>
            <p>Python</p>
            <p>JavaScript</p>
          </div>
          <div className="border border-gray-700 p-5">
            <p className="font-semibold text-pink-100">Tools</p>
            <p>Figma</p>
            <p>Git</p>
          </div>
          <div className="border border-gray-700 p-5">
            <p className="font-semibold text-pink-100">Other</p>
            <p>Crying</p>
            <p>Help</p>
          </div>
          <div className="border border-gray-700 p-5">
            <p className="font-semibold text-pink-100">Frameworks</p>
            <p>React</p>
            <p>Tailwind</p>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="p-10" id="about-me">
        <h2 className="text-xl font-bold mb-4 text-pink-200">#about-me</h2>
        <p className="text-sm leading-relaxed">
          hello, i’m ky!<br></br>i’m an aspiring web developer and sap erp specialist;<br></br>currently in my second year of studying BSIT & specializing in erp.
        </p>
        <button className="mt-2 border px-3 py-1 text-sm hover:bg-white hover:text-pink-300 transition">Read more →</button>
      </section>

      {/* Contact */}
      <section className="p-10" id="contacts">
        <h2 className="text-xl font-bold mb-4 text-pink-200">#contacts</h2>
        <p className="text-sm">
          i’m interested in freelance opportunities. however, if you have other requests or questions, don’t hesitate to contact me!
        </p>
        <div className="mt-4 border p-4 text-sm">
          <p>Message me here :)</p>
          <a href="mailto:kyradaphnebg@gmail.com" className="underline">kyradaphnebg@gmail.com</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-10 text-xs text-gray-500 text-center border-t border-gray-700">
        <p>©2025. kyradaphnebg</p>
      </footer>
    </div>
  );
}
