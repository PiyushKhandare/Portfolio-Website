import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Know Me More</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a Full Stack Developer with hands-on experience in React and Java-based web development, along with practical exposure to Machine Learning. I have a strong foundation in building scalable web applications, integrating backend services, and delivering clean, optimized code.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about creating intuitive user experiences and solving complex problems through technology. Currently seeking an entry-level software development role where I can contribute and grow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex gap-4 items-start p-5 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap className="text-primary" size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Education</h3>
                <p className="text-sm text-muted-foreground mt-1">B.E. in Information Technology<br />MGM College of Engineering & Technology, 2025</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-5 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <Briefcase className="text-secondary" size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Experience</h3>
                <p className="text-sm text-muted-foreground mt-1">Full Stack Developer Intern<br />Digital Shinobiz · Sep – Dec 2025</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-5 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Target className="text-accent" size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Goal</h3>
                <p className="text-sm text-muted-foreground mt-1">Seeking an entry-level software development role to build impactful products.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
