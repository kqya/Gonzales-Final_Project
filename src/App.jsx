import { useState } from 'react';
import Modal from './components/Modal';
import './App.css';

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-black text-white font-fira min-h-screen relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-6 h-6 bg-pink-500 opacity-20 rounded-sm animate-pulse" />
      <div className="absolute bottom-10 right-10 w-3 h-3 bg-white rounded-full opacity-30" />
      <div className="absolute top-1/2 left-1/3 w-10 h-10 border-2 border-pink-300 rotate-12 opacity-10" />

      {/* MORE CUTE BITS */}
      <div className="absolute top-1/4 right-10 w-2 h-2 bg-pink-400 rounded-full opacity-40 animate-bounce" />
      <div className="absolute bottom-1/4 left-5 w-4 h-4 bg-white opacity-20 rounded-sm rotate-6" />
      <div className="absolute bottom-10 left-1/2 w-8 h-8 border border-white opacity-10 rotate-45 animate-[float_6s_ease-in-out_infinite]" />
      <div className="absolute top-5 left-1/2 w-1 h-1 bg-pink-300 rounded-full opacity-30 animate-ping" />
      <div className="absolute top-1/3 right-1/3 w-5 h-5 border border-pink-200 rotate-45 opacity-20" />
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white rounded-full opacity-20" />
      <div className="absolute bottom-[8%] left-[15%] w-6 h-6 border border-pink-500 opacity-10 rotate-12" />

      {/* Floating animation keyframe */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>

      {/* Smooth Scrolling Style */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

      <header className="flex justify-between items-center p-8">
        <span className="font-bold text-lg">kyra daphne</span>
        <nav className="space-x-6 text-sm">
          <a href="#home" className="hover:underline">#home</a>
          <a href="#works" className="hover:underline">#works</a>
          <a href="#about-me" className="hover:underline">#about-me</a>
          <a href="#contacts" className="hover:underline">#contacts</a>
        </nav>
      </header>

      <section className="p-16 flex flex-col items-start" id="home">
        <h1 className="text-5xl font-bold">kyra daphne //</h1>
        <nav className="text-3xl font-bold flex flex-col items-start text-pink-lime-gradient mt-4">
          <p>web design</p>
          <p>front-end development</p>
          <p>sap erp solutions</p>
        </nav>
        <button
          onClick={() => setShowModal(true)}
          className="mt-8 border border-white px-6 py-3 text-sm hover:bg-white transition hover-gradient-text"
        >
          contact me &gt;&gt;
        </button>
      </section>

      <section className="p-16">
        <p className="border-l-4 pl-6 italic">
          “with great power comes great electricity bills”
          <br />
          <span className="block text-right">- Dr. Who</span>
        </p>
      </section>

      <section className="p-16" id="works">
        <h2 className="text-2xl font-bold mb-6 text-pink-lime-gradient">#projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[ 
            { title: "Wowowin", desc: "Minecraft servers hosting", tech: "HTML SCSS Python Flask" },
            { title: "Portfolio", desc: "Discord anti-crash bot", tech: "React Node.js HTML CSS" },
            { title: "Flu", desc: "AI prescriber", tech: "CSS Express Node.js" }
          ].map((proj, index) => (
            <div key={index} className="border border-gray-700 p-8 rounded-lg">
              <p className="text-xs text-gray-400">{proj.tech}</p>
              <h3 className="font-bold text-xl mt-4">{proj.title}</h3>
              <p className="text-sm mt-2">{proj.desc}</p>
              <button className="mt-4 text-white border border-[#636363] hover:bg-white transition hover-gradient-text px-6 py-3">Live ⇔</button>
            </div>
          ))}
        </div>
      </section>

      <section className="p-16">
        <h2 className="text-2xl font-bold mb-6 text-pink-lime-gradient">#skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
          <div className="border border-gray-700 p-6 rounded-lg">
            <p className="font-semibold text-pink-100">Languages</p>
            <p>Python</p>
            <p>JavaScript</p>
          </div>
          <div className="border border-gray-700 p-6 rounded-lg">
            <p className="font-semibold text-pink-100">Tools</p>
            <p>Figma</p>
            <p>Git</p>
          </div>
          <div className="border border-gray-700 p-6 rounded-lg">
            <p className="font-semibold text-pink-100">Other</p>
            <p>Crying</p>
            <p>Help</p>
          </div>
          <div className="border border-gray-700 p-6 rounded-lg">
            <p className="font-semibold text-pink-100">Frameworks</p>
            <p>React</p>
            <p>Tailwind</p>
          </div>
        </div>
      </section>

      <section className="p-16" id="about-me">
        <h2 className="text-2xl font-bold mb-6 text-pink-lime-gradient">#about-me</h2>
        <p className="text-sm leading-relaxed text-left">
          hello, i’m ky!<br />i’m an aspiring web developer and sap erp specialist;<br />currently in my second year of studying BSIT & specializing in erp.
        </p>
        <button className="mt-4 border px-4 py-2 text-xs hover:bg-white transition hover-gradient-text">Read more →</button>
      </section>

      <section className="p-16" id="contacts">
        <h2 className="text-2xl font-bold mb-6 text-pink-lime-gradient">#contacts</h2>
        <p className="text-sm text-left">
          i’m interested in freelance opportunities. <br />if you have other requests or questions,<br />don’t hesitate to contact me!
        </p>
        <div className="mt-6 border p-6 text-sm">
          <p>Message me here :)</p>
          <a href="mailto:kyradaphnebg@gmail.com" className="underline text-pink-300">kyradaphnebg@gmail.com</a>
        </div>
      </section>

      <footer className="p-8 text-xs text-gray-500 text-center border-t border-gray-700">
        <p>©2025. kyradaphnebg</p>
      </footer>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2 className="text-lg font-bold mb-4 text-pink-lime-gradient">Send me an email</h2>
          <form action="mailto:yourname@example.com" method="POST" encType="text/plain">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full border p-2 mb-2 rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full border p-2 mb-2 rounded-lg"
            />
            <textarea
              name="message"
              placeholder="Your message"
              className="w-full border p-2 mb-4 rounded-lg"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 hover:bg-white transition hover-gradient-text"
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none',
                }}
              >
                Send
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}
