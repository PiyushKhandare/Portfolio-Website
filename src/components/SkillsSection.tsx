import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Core Java", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 75 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Core Java", level: 85 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "CNN", level: 70 },
      { name: "LSTM", level: 65 },
      { name: "Random Forest", level: 72 },
    ],
  },
];

const tools = ["VS Code", "Eclipse IDE", "Git", "Tailwind CSS"];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">My Skills</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">What I Can Do</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <h3 className="font-heading font-semibold text-lg text-foreground mb-5">{cat.title}</h3>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-full rounded-full bg-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span key={tool} className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
