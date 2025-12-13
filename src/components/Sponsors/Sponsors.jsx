import React from 'react';
import { motion } from 'framer-motion';
import partnerLogo from '../../images/All-Confernernce- Alert.png.png';

const Sponsors = () => {
  return (
    <section id="sponsors" className="section-padding section-light relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-slate-900">
              Media Support
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-6"></div>
           
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a 
              href="https://allconferencealert.net/india.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative block p-8 glass-panel rounded-2xl transition-all duration-300 w-full max-w-sm hover:-translate-y-2"
            >
              <div className="flex flex-col items-center justify-center gap-6">
                <div className="w-[240px] h-[100px] flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-slate-100 group-hover:border-blue-200 transition-colors">
                   {/* Main Image */}
                   <img 
                     src={partnerLogo} 
                     alt="Conference in India"
                     className="max-w-full max-h-full object-contain"
                   />
                   {/* Fallback Text */}
                   <div className="hidden text-xl font-bold text-slate-800 text-center font-display">
                     ALL CONFERENCE ALERT
                   </div>
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    All Conference Alert
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                     <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                     <a href="https://allconferencealert.net/india.php">https://allconferencealert.net/india.php</a>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
