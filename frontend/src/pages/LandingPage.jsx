import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Target, Zap, Lightbulb, TrendingUp, Shield, Globe, ChevronRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { blogPosts, industryLogos } from '../mock';

const LandingPage = () => {
  const navigate = useNavigate();
  const servicesRef = useRef(null);
  const solutionsRef = useRef(null);
  const insightsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black border-b border-[rgba(255,255,255,0.25)] z-50">
        <div className="max-w-[1400px] mx-auto px-[7.6923%] py-4 flex items-center justify-between h-20">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-semibold text-[#00FFD1] hover:opacity-80 transition-all duration-400 cursor-pointer"
          >
            VINAEU AI
          </button>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection(servicesRef)} className="body-medium text-[#4D4D4D] hover:text-white transition-colors duration-300">Services</button>
            <button onClick={() => scrollToSection(solutionsRef)} className="body-medium text-[#4D4D4D] hover:text-white transition-colors duration-300">Solutions</button>
            <button onClick={() => scrollToSection(insightsRef)} className="body-medium text-[#4D4D4D] hover:text-white transition-colors duration-300">Insights</button>
            <button onClick={() => scrollToSection(aboutRef)} className="body-medium text-[#4D4D4D] hover:text-white transition-colors duration-300">About</button>
            <button onClick={() => scrollToSection(contactRef)} className="body-medium text-[#4D4D4D] hover:text-white transition-colors duration-300">Contact</button>
            <button onClick={handleGetStarted} className="btn-primary">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-[7.6923%] min-h-screen flex items-center">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="display-huge mb-6">Transform Your Business with AI</h1>
            <p className="body-large text-[rgba(255,255,255,0.85)] mb-10">
              We help enterprises deploy AI solutions that drive real business value. From strategy to implementation, we're your partner in AI transformation.
            </p>
            <button onClick={handleGetStarted} className="btn-primary">
              Start Your AI Journey <ArrowRight size={20} />
            </button>
          </div>
          <div className="relative w-full h-[700px] flex items-center justify-center">
            <div style={{ width: '700px', height: '700px', overflow: 'visible', position: 'relative' }}>
              <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section ref={aboutRef} className="py-20 px-[7.6923%]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="display-large mb-6">Our Holistic Approach</h2>
          <p className="body-large text-[rgba(255,255,255,0.85)] max-w-3xl mb-12">
            We believe successful AI transformation requires balance across three critical dimensions: Strategy (20%), Technology & Data (30%), and People & Process (50%). This proven framework ensures sustainable, measurable business impact.
          </p>
        </div>
      </section>

      {/* Three Strategic Pillars */}
      <section ref={servicesRef} className="py-20 px-[7.6923%]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#121212] p-10 border border-[rgba(255,255,255,0.25)] dark-hover dark-transition group">
              <Zap size={48} className="text-[#00FFD1] mb-6" />
              <h3 className="heading-2 mb-4">Deploy AI Solutions</h3>
              <p className="body-medium mb-6">
                Launch high-impact AI applications quickly. From chatbots to predictive analytics, we implement proven solutions that deliver immediate ROI.
              </p>
              <div className="pt-6 border-t border-[rgba(255,255,255,0.25)]">
                <p className="body-small italic text-[rgba(255,255,255,0.85)]">
                  "Quick wins build momentum and stakeholder confidence for larger transformation initiatives."
                </p>
                <p className="body-small text-[#4D4D4D] mt-2">- AI Strategy Team</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#121212] p-10 border border-[rgba(255,255,255,0.25)] dark-hover dark-transition group">
              <Target size={48} className="text-[#00FFD1] mb-6" />
              <h3 className="heading-2 mb-4">Transform Operations</h3>
              <p className="body-medium mb-6">
                Reimagine end-to-end business functions with AI at the core. We redesign processes, upskill teams, and embed AI into daily workflows.
              </p>
              <div className="pt-6 border-t border-[rgba(255,255,255,0.25)]">
                <p className="body-small italic text-[rgba(255,255,255,0.85)]">
                  "Sustainable transformation happens when technology and people evolve together."
                </p>
                <p className="body-small text-[#4D4D4D] mt-2">- Change Management Lead</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#121212] p-10 border border-[rgba(255,255,255,0.25)] dark-hover dark-transition group">
              <Lightbulb size={48} className="text-[#00FFD1] mb-6" />
              <h3 className="heading-2 mb-4">Innovate Business Models</h3>
              <p className="body-medium mb-6">
                Discover new revenue streams and competitive advantages. We help you leverage AI to create entirely new value propositions.
              </p>
              <div className="pt-6 border-t border-[rgba(255,255,255,0.25)]">
                <p className="body-small italic text-[rgba(255,255,255,0.85)]">
                  "The most successful AI initiatives don't just optimize—they fundamentally reimagine what's possible."
                </p>
                <p className="body-small text-[#4D4D4D] mt-2">- Innovation Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section ref={solutionsRef} className="py-20 px-[7.6923%]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="display-large mb-12">Industry Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Retail AI', desc: 'Personalization, inventory optimization, demand forecasting', icon: Globe },
              { title: 'Healthcare AI', desc: 'Diagnostic assistance, operational efficiency, patient outcomes', icon: Shield },
              { title: 'Finance AI', desc: 'Fraud detection, risk modeling, algorithmic trading', icon: TrendingUp },
              { title: 'Manufacturing AI', desc: 'Predictive maintenance, quality control, supply chain optimization', icon: Target },
              { title: 'Supply Chain AI', desc: 'Route optimization, demand planning, warehouse automation', icon: Zap },
              { title: 'Enterprise AI', desc: 'Custom solutions for unique business challenges', icon: Lightbulb }
            ].map((solution, idx) => (
              <div key={idx} className="bg-[#121212] p-8 border border-[rgba(255,255,255,0.25)] dark-hover dark-transition">
                <solution.icon size={40} className="text-[#00FFD1] mb-4" />
                <h3 className="heading-3 mb-3">{solution.title}</h3>
                <p className="body-medium">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-20 px-[7.6923%]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="display-large mb-6 text-center">Our AI Ecosystem</h2>
          <p className="body-large text-[rgba(255,255,255,0.85)] text-center mb-12 max-w-2xl mx-auto">
            We partner with leading technology providers to deliver best-in-class AI solutions
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {industryLogos.map((partner, idx) => (
              <div key={idx} className="flex items-center justify-center p-6 bg-[#121212] border border-[rgba(255,255,255,0.25)] dark-hover dark-transition">
                <img src={partner.logo} alt={partner.name} className="h-12 w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-[7.6923%]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="display-huge text-[#00FFD1] mb-4">250+</div>
              <p className="body-large">Companies Transformed</p>
            </div>
            <div className="text-center">
              <div className="display-huge text-[#00FFD1] mb-4">$2.4B</div>
              <p className="body-large">Value Created</p>
            </div>
            <div className="text-center">
              <div className="display-huge text-[#00FFD1] mb-4">94%</div>
              <p className="body-large">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="display-huge text-[#00FFD1] mb-4">500+</div>
              <p className="body-large">AI Models Deployed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section ref={insightsRef} className="py-20 px-[7.6923%]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="display-large mb-12">Latest Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-[#121212] border border-[rgba(255,255,255,0.25)] overflow-hidden dark-hover dark-transition group">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-[#00FFD1]">{post.category}</span>
                    <span className="text-sm text-[#4D4D4D]">{post.readTime}</span>
                  </div>
                  <h3 className="heading-3 mb-3">{post.title}</h3>
                  <p className="body-medium mb-6">{post.excerpt}</p>
                  <button 
                    onClick={() => navigate(`/insights/${post.id}`)}
                    className="text-[#00FFD1] flex items-center gap-2 hover:gap-4 transition-all duration-300"
                  >
                    Read More <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={contactRef} className="py-20 px-[7.6923%] bg-[#121212]">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="display-large mb-6">Ready to Transform with AI?</h2>
          <p className="body-large text-[rgba(255,255,255,0.85)] mb-10 max-w-2xl mx-auto">
            Let's discuss how AI can drive measurable impact for your organization
          </p>
          <button onClick={handleGetStarted} className="btn-primary">
            Schedule Consultation <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-[7.6923%] border-t border-[rgba(255,255,255,0.25)]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="heading-3 mb-4 text-[#00FFD1]">VINAEU AI</h4>
            <p className="body-medium text-[#4D4D4D]">Transforming enterprises through intelligent AI solutions</p>
          </div>
          <div>
            <h5 className="body-large font-semibold mb-4">Services</h5>
            <ul className="space-y-2">
              <li><a href="#" className="body-medium text-[#4D4D4D] hover:text-white transition-colors">AI Strategy</a></li>
              <li><a href="#" className="body-medium text-[#4D4D4D] hover:text-white transition-colors">Implementation</a></li>
              <li><a href="#" className="body-medium text-[#4D4D4D] hover:text-white transition-colors">Training</a></li>
            </ul>
          </div>
          <div>
            <h5 className="body-large font-semibold mb-4">Company</h5>
            <ul className="space-y-2">
              <li><a href="#" className="body-medium text-[#4D4D4D] hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="body-medium text-[#4D4D4D] hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="body-medium text-[#4D4D4D] hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="body-large font-semibold mb-4">Legal</h5>
            <ul className="space-y-2">
              <li><a href="#" className="body-medium text-[#4D4D4D] hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="body-medium text-[#4D4D4D] hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto mt-12 pt-8 border-t border-[rgba(255,255,255,0.25)] text-center">
          <p className="body-medium text-[#4D4D4D]">&copy; 2025 VinaEu AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;