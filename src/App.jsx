import React, { Suspense, lazy } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

// Lazy load non-critical components
const About = lazy(() => import('./components/About/About'));
const Speakers = lazy(() => import('./components/Speakers/Speakers'));
const CallForPapers = lazy(() => import('./components/CallForPapers/CallForPapers'));
const SubmissionGuidelines = lazy(() => import('./components/SubmissionGuidelines/SubmissionGuidelines'));
const Registration = lazy(() => import('./components/Registration/Registration'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Sponsors = lazy(() => import('./components/Sponsors/Sponsors'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-luxury-black text-white relative">
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        
        <Suspense fallback={<div className="py-20 text-center text-slate-500">Loading content...</div>}>
          <About />
          <Speakers />
          <CallForPapers />
          <SubmissionGuidelines />
          <Registration />
          <Contact />
          <Sponsors />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;