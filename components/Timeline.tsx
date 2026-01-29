import { motion } from 'framer-motion';

const experiences = [
  {
    year: '2023 - Present',
    title: 'Frontend Engineer',
    company: 'ActivEdge Technologies.',
    description: 'Leading frontend architecture for enterprise applications. Mentoring junior developers and establishing best practices for React and TypeScript development.',
    highlights: ['Led team of 5 developers', 'Reduced load time by 40%', 'Implemented design system'],
  },
  { 
    year: '2022 - 2023', 
    title: 'Mobile Developer', 
    company: 'Cyncra Technologies', 
    description: 'Built and maintained React Native applications for iOS and Android. Worked closely with design and backend teams to deliver seamless user experiences.', 
    highlights: [
      'Led development of multiple consumer-facing mobile applications',
      'Maintained consistently high user satisfaction across app platforms',
      'Delivered polished, user-friendly mobile experiences'
    ], 
  },
  {
    year: '2019 - 2021',
    title: 'Intern - Frontend Developer',
    company: 'Digital Agency',
    description: 'Developed responsive web applications for various clients across different industries. Specialized in React and modern JavaScript frameworks.',
    highlights: ['client projects', 'E-commerce focus', 'Performance optimization'],
  },
  {
    year: '2019 - 2020',
    title: "Frontend Developer",
    company: '',
    description: 'Built and maintained websites and web applications for clients across different industries. Learned industry best practices and agile development methodologies.',
    highlights: ['First production app', 'Rapid skill growth', 'Team collaboration'],
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mx-auto max-w-2xl">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-primary-500 dark:from-primary-400 dark:via-purple-400 dark:to-primary-400 md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 bg-primary-500 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-card-hover rounded-2xl p-6"
                >
                  <span className="inline-block px-3 py-1 text-xs font-mono bg-primary-500/20 dark:bg-primary-400/20 text-primary-600 dark:text-primary-400 rounded-full mb-3">
                    {exp.year}
                  </span>
                  <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-primary-600 dark:text-primary-400 mb-3 font-semibold">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-gray-700 dark:text-gray-300"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}