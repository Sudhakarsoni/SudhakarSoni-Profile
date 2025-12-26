"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {portfolioData.summary}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Expertise
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✓ Infrastructure as Code (Terraform, Ansible)</li>
                <li>✓ Kubernetes & Container Orchestration</li>
                <li>✓ CI/CD Pipeline Design & Implementation</li>
                <li>✓ Cloud Platforms (AWS, Azure, GCP)</li>
                <li>✓ Monitoring & Observability Solutions</li>
                <li>✓ Linux System Administration</li>
              </ul>
            </motion.div>

            {/* Education & Certs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Education & Certifications
              </h3>
              <div className="space-y-4">
                {portfolioData.education.map((edu, idx) => (
                  <div key={idx}>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {edu.degree}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {edu.institution} • {edu.year}
                    </p>
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="font-medium text-gray-900 dark:text-white mb-2">
                    Certifications:
                  </p>
                  <ul className="space-y-1">
                    {portfolioData.certifications.map((cert, idx) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-400">
                        • {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
