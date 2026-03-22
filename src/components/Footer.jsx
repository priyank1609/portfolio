function Footer() {
  const navLinks = [
    { label: 'About me', href: '#about' },
    { label: 'Skills & Tools', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
  ];

  return (
    <footer id="contact" className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Contact me
        </h2>

        {/* Subtitle */}
        <p className="text-lg bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-10">
          Feel free to reach out me for any questions and opportunities!
        </p>

        {/* Nav Links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8 mb-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-300 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mb-8">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/priyank-sde/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-700/50 text-slate-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/priyank1609"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-700/50 text-slate-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sh.priyank1999@gmail.com&su=Inquiry%20from%20Portfolio&body=Hi%20Priyank%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you%20regarding%20-%20%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ABest%20regards%2C%0A%5BName%5D%20%0A%5BContact%20Number%5D%20"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-700/50 text-slate-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </a>
        </div>

        {/* Designed By */}
        <p className="text-sm text-slate-400 mb-2">
          Designed & Developed by <span className="text-white font-medium">Priyank Sharma</span>
        </p>

        {/* Copyright */}
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Priyank Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
