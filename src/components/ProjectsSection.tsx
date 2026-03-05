import { motion } from "framer-motion";

const projects = [
  {
    title: "Apna Doctor",
    subtitle: "AI Health Prediction System",
    description:
      "AI-powered web application to predict diseases using symptoms and image data. Integrated ML models with Flask backend and React frontend.",
    tags: ["React", "Flask", "ML", "Python"],
    link: "https://your-healthscout-link.com",
  },
  {
    title: "Ecommerce Website",
    subtitle: "Responsive Online Store",
    description:
      "Responsive e-commerce web application with product listings, cart functionality, and interactive UI components.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://piyushkhandare.github.io/Ecommerce-Website/",
  },
  {
    title: "The Unpuzzle Project",
    subtitle: "Community Hub",
    description:
      "Web-based community hub for high-level networking and mentorship with modern responsive UI and secure backend.",
    tags: ["HTML", "CSS", "JS","MySQL"],
    link: "https://www.theunpuzzleproject.com/",
  },
  {
    title: "NisaKi Giin",
    subtitle: "Digital Operations App",
    description:
      "Dynamic web application to streamline digital operations and content management for high-performance and scalability.",
    tags: ["HTML", "CSS", "JS", "MySQL"],
    link: "https://nisakigiin.theimaginarymedia.com/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            My Projects
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-primary via-secondary to-accent" />

              <div className="p-6">
                <div className="mb-3">
                  <h3 className="font-heading font-bold text-xl text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Live Demo Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;