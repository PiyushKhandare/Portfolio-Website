import { motion } from "framer-motion";
import { Code2, Layout, Brain, Database } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full Stack Web Development",
    description: "End-to-end web application development using React, Java, and MySQL with scalable architecture and clean code.",
    color: "primary",
  },
  {
    icon: Layout,
    title: "Frontend Development",
    description: "Building responsive, performant, and beautiful user interfaces with React.js, Tailwind CSS, and modern tooling.",
    color: "secondary",
  },
  {
    icon: Brain,
    title: "Machine Learning Solutions",
    description: "Implementing ML models like CNN, LSTM, and Random Forest for real-world prediction and classification tasks.",
    color: "accent",
  },
  {
    icon: Database,
    title: "Backend & API Development",
    description: "Designing RESTful APIs, database schemas, and server-side logic with Java, PHP, and MySQL.",
    color: "primary",
  },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/10 text-accent",
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Services</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">What I Offer</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${colorMap[service.color]} flex items-center justify-center mb-5`}>
                <service.icon size={26} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
