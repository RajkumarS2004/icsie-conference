// src/components/CallForPapers/SubmissionGuidelines.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, AlertTriangle, Mail } from 'lucide-react';

const SubmissionGuidelines = () => {
  const guidelines = [
    "Ensure Similarity Index is less than 30%",
    "Minimum of 15 references required",
    "No salutations in author details",
    "Include affiliations and email IDs of all authors",
    "Thorough spellcheck and proofreading",
    "High-quality figures/graphics",
    "Tables and equations in text format",
    "In-text citations in ascending order"
  ];

  return (
    <section className="py-24 bg-light-bg relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-bg mb-6">
            Submission <span className="text-secondary">Guidelines</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Please follow these guidelines to ensure your paper is accepted for the conference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Guidelines List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-secondary/10 rounded-xl">
                <FileText className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-dark-bg">Paper Requirements</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5"></div>
                <p className="text-gray-600">Full papers in <span className="font-semibold text-dark-bg">DOC or DOCX</span> format.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5"></div>
                <p className="text-gray-600">Length should be <span className="font-semibold text-dark-bg">6-8 pages</span> in double-column layout.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5"></div>
                <p className="text-gray-600">Send submissions to <a href="mailto:icsie@kahedu.edu.in" className="text-primary font-semibold hover:underline">icsie@kahedu.edu.in</a></p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <h4 className="font-bold text-dark-bg mb-6 flex items-center">
                <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
                Plagiarism Check
              </h4>
              <ul className="space-y-4">
                {guidelines.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-gray-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-gradient-to-br from-dark-bg to-dark-card p-10 rounded-3xl shadow-2xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 transition-all duration-500 group-hover:bg-primary/20"></div>
              
              <Mail className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-3xl font-bold mb-4">Submit Your Paper</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Ready to share your research? Send your full paper via email. Make sure to follow all the guidelines listed.
              </p>
              
              <a 
                href="mailto:icsie@kahedu.edu.in"
                className="inline-flex items-center space-x-2 bg-white text-dark-bg px-8 py-4 rounded-xl font-bold hover:bg-primary transition-colors duration-300"
              >
                <span>icsie@kahedu.edu.in</span>
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SubmissionGuidelines;
