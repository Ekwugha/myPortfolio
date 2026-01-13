import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Church Mobile App",
    category: "React Native",
    description:
      "A community-focused church app with live streaming, event management, devotionals, and giving features.",
    longDescription:
      "Built a comprehensive church mobile application using React Native and Expo. Features include live service streaming, sermon archives, event calendar with RSVP, daily devotionals with push notifications, online giving integration, prayer request submissions, and community group management.",
    tech: ["React Native", "Expo", "Redux", "Firebase", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    category: "Next.js",
    description:
      "Analytics dashboard with real-time data visualization, team collaboration features, and customizable widgets.",
    longDescription:
      "Developed a modern SaaS analytics dashboard using Next.js 14 with App Router. Includes real-time data streaming with WebSockets, interactive charts using Recharts, role-based access control, and a fully customizable widget system.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "AI Content Platform",
    category: "React",
    description:
      "AI-powered content generation tool with multi-language support and SEO optimization features.",
    longDescription:
      "Created an AI-powered content platform that helps creators generate blog posts, social media content, and marketing copy. Integrates with OpenAI GPT-4, supports 20+ languages, includes SEO analysis tools, and provides content scheduling.",
    tech: ["React", "OpenAI API", "Node.js", "MongoDB", "AWS"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    liveUrl: "https://afrocreate.vercel.app/",
    githubUrl: "https://github.com/Ekwugha/AI-content-platform",
  },
  {
    id: 4,
    title: "Fitness Tracking App",
    category: "React Native",
    description:
      "Cross-platform fitness app with workout tracking, nutrition planning, and social challenges.",
    longDescription:
      "Designed and developed a comprehensive fitness tracking application. Features include custom workout builders, nutrition tracking with barcode scanning, progress analytics, social features for challenges with friends, and integration with wearable devices.",
    tech: ["React Native", "TypeScript", "GraphQL", "Node.js", "Redis"],
    image:
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Real Estate Platform",
    category: "Next.js",
    description:
      "Property listing platform with virtual tours, mortgage calculator, and agent matching.",
    longDescription:
      "Built a modern real estate platform featuring interactive property listings with 3D virtual tours, advanced search with map integration, mortgage and affordability calculators, and an intelligent agent matching system.",
    tech: ["Next.js", "Three.js", "Mapbox", "Supabase", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "AI Day Orchestrator",
    category: "Next.js",
    description:
      "Intelligent day-planning system with smart negotiation and clear tradeoffs for overwhelming schedules.",
    longDescription:
      "Built Pace, an AI-powered day orchestrator that helps users schedule intense days through smart negotiation. Features intensity-based scheduling, priority protection (work is always protected), automatic break allocation, and clear tradeoff communication. Uses a rule-based scheduling engine with no external AI APIs.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Zustand"],
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    liveUrl: "https://pace-pearl-one.vercel.app/",
    githubUrl: "https://github.com/Ekwugha/pace",
  },
];

function ProjectCard({
  project,
  onClick,
}: {
  project: (typeof projects)[0];
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="glass-card-hover group cursor-pointer overflow-hidden rounded-2xl"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 dark:from-gray-900 via-gray-900/50 dark:via-gray-900/50 to-transparent opacity-60" />
        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-mono bg-primary-500/20 dark:bg-primary-400/20 text-primary-600 dark:text-primary-400 rounded-full backdrop-blur-sm border border-primary-500/30 dark:border-primary-400/30">
          {project.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-gray-700 dark:text-gray-300">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="glass-card max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl"
      >
        <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 dark:from-gray-900 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 glass-card hover:bg-primary-500/20 dark:hover:bg-primary-400/20 transition-colors rounded-full"
          >
            <FiX size={20} className="text-gray-900 dark:text-white" />
          </button>
        </div>
        <div className="p-8">
          <span className="inline-block px-3 py-1 text-xs font-mono bg-primary-500/20 dark:bg-primary-400/20 text-primary-600 dark:text-primary-400 rounded-full mb-4">
            {project.category}
          </span>
          <h3 className="text-3xl font-bold mb-4 gradient-text">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            {project.longDescription}
          </p>
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm text-gray-900 dark:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <FiExternalLink size={18} />
                Live Demo
              </span>
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub size={18} />
              Source Code
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section
      id="projects"
      className="py-24 relative bg-gray-50 dark:bg-gray-800"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-500/5 dark:from-primary-400/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mx-auto max-w-2xl">
            A selection of my recent work across web and mobile platforms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
