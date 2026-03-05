import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImg from "@/assets/image.png";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-32 right-[35%] w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Social icons */}
          <div className="flex md:flex-col gap-4 mb-8">
            <a href="https://github.com/PiyushKhandare" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/piyush-khandare/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:piyushkhandare50@gmail.com" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <Mail size={18} />
            </a>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
            Hello, I'm<br />
            <span className="text-primary">Piyush Khandare</span><br />
            A Full Stack Developer
          </h1>

          <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
            Full Stack Developer with hands-on experience in React and Java-based web development, along with practical exposure to Machine Learning.
          </p>

          <div className="flex gap-4 mt-8">
            <a href="#projects" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
              Browse Projects
            </a>
            <a href="#contact" className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-primary hover:text-primary transition-colors">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Decorative rectangles */}
          <div className="absolute -top-6 -right-6 w-72 h-80 bg-secondary rounded-2xl rotate-6" />
          <div className="absolute -bottom-4 -left-4 w-72 h-80 bg-accent rounded-2xl -rotate-3" />
          <div className="relative w-72 h-80 rounded-2xl overflow-hidden border-4 border-card shadow-2xl z-10">
            <img src={profileImg} alt="Piyush Khandare" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
