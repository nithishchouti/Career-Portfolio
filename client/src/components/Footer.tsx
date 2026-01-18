import { Github, Instagram, Linkedin, Mail, X } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-800 pb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-white">Nithish Chouti.</h3>
            <p className="text-slate-400 max-w-sm">
              Innovation and Networking with a focus on Banking, Project Management, Technology, Analytics and Entrepreneurship.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider text-sm">Navigation</h4>
            <nav className="flex flex-col gap-2 text-slate-400">
              <a href="#about" className="hover:text-white transition-colors w-fit">About</a>
              <a href="#projects" className="hover:text-white transition-colors w-fit">Projects</a>
              <a href="#skills" className="hover:text-white transition-colors w-fit">Skills</a>
              <a href="#contact" className="hover:text-white transition-colors w-fit">Contact</a>
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider text-sm">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="www.linkedin.com/in/nithish-chouti-179425228" 
                target="_blank" 
                rel="noreferrer"
                className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="mailto:nithishchouti2003@gmail.com" 
                className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/nithish_chouti/" 
                target="_blank" 
                rel="noreferrer"
                className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/NithishChouti" 
                target="_blank" 
                rel="noreferrer"
                className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Nithish Chouti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
