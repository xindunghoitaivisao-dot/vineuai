import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import { blogPosts } from '../mock';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="display-large mb-4">Post Not Found</h1>
          <button onClick={() => navigate('/')} className="btn-primary">Go Back Home</button>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 2);

  const scrollToSection = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black border-b border-[rgba(255,255,255,0.25)] z-50">
        <div className="max-w-[1400px] mx-auto px-[7.6923%] py-4 flex items-center justify-between h-20">
          <button 
            onClick={() => navigate('/')}
            className="text-2xl font-semibold text-[#00FFD1] hover:opacity-80 transition-all duration-400 cursor-pointer"
          >
            VINAEU AI
          </button>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => { navigate('/'); setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="body-medium text-[#4D4D4D] hover:text-white transition-colors duration-300">Services</button>
            <button onClick={() => { navigate('/'); setTimeout(() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="body-medium text-[#4D4D4D] hover:text-white transition-colors duration-300">Solutions</button>
            <button onClick={() => { navigate('/'); setTimeout(() => document.getElementById('insights')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="body-medium text-[#4D4D4D] hover:text-white transition-colors duration-300">Insights</button>
            <button onClick={() => { navigate('/'); setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="body-medium text-[#4D4D4D] hover:text-white transition-colors duration-300">About</button>
            <button onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="body-medium text-[#4D4D4D] hover:text-white transition-colors duration-300">Contact</button>
            <button onClick={() => navigate('/login')} className="btn-primary">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-[7.6923%]">
        <div className="max-w-[900px] mx-auto">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[#00FFD1] hover:gap-3 transition-all duration-300 mb-8"
          >
            <ArrowLeft size={20} /> Back to Insights
          </button>
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[rgba(0,255,209,0.1)] text-[#00FFD1] text-sm font-medium mb-4">{post.category}</span>
          </div>
          <h1 className="display-large mb-6">{post.title}</h1>
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-[#4D4D4D]">
              <Calendar size={18} />
              <span className="body-medium">{post.date}</span>
            </div>
            <div className="flex items-center gap-2 text-[#4D4D4D]">
              <Clock size={18} />
              <span className="body-medium">{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-[7.6923%] mb-12">
        <div className="max-w-[1200px] mx-auto">
          <img src={post.image} alt={post.title} className="w-full h-[500px] object-cover" />
        </div>
      </section>

      {/* Article Content */}
      <article className="px-[7.6923%] pb-20">
        <div className="max-w-[800px] mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={idx} className="heading-1 mt-12 mb-6">{paragraph.replace('## ', '')}</h2>;
              } else if (paragraph.startsWith('### ')) {
                return <h3 key={idx} className="heading-2 mt-8 mb-4">{paragraph.replace('### ', '')}</h3>;
              } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <h4 key={idx} className="heading-3 mt-6 mb-3">{paragraph.replace(/\*\*/g, '')}</h4>;
              } else if (paragraph.startsWith('```')) {
                return <pre key={idx} className="bg-[#121212] p-6 my-6 overflow-x-auto border border-[rgba(255,255,255,0.25)]"><code className="body-medium">{paragraph.replace(/```/g, '')}</code></pre>;
              } else if (paragraph.startsWith('- ') || paragraph.startsWith('• ')) {
                const items = paragraph.split('\n').filter(line => line.startsWith('- ') || line.startsWith('• '));
                return (
                  <ul key={idx} className="list-disc list-inside space-y-2 my-6">
                    {items.map((item, i) => (
                      <li key={i} className="body-medium text-[rgba(255,255,255,0.85)] ml-4">{item.replace(/^[\-•]\s/, '')}</li>
                    ))}
                  </ul>
                );
              } else {
                return <p key={idx} className="body-medium text-[rgba(255,255,255,0.85)] mb-6 leading-relaxed">{paragraph}</p>;
              }
            })}
          </div>

          {/* Author Bio */}
          <div className="mt-16 p-8 bg-[#121212] border border-[rgba(255,255,255,0.25)]">
            <div className="flex items-start gap-6">
              <img src={post.author.image} alt={post.author.name} className="w-20 h-20 rounded-full" />
              <div>
                <h4 className="heading-3 mb-2">{post.author.name}</h4>
                <p className="body-medium text-[#4D4D4D] mb-4">{post.author.role}</p>
                <p className="body-medium text-[rgba(255,255,255,0.85)]">
                  A thought leader in AI transformation with over 15 years of experience helping enterprises navigate complex digital change initiatives.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-10 bg-[rgba(0,255,209,0.05)] border border-[#00FFD1] text-center">
            <h3 className="heading-2 mb-4">Ready to Start Your AI Journey?</h3>
            <p className="body-medium text-[rgba(255,255,255,0.85)] mb-6">
              Let's discuss how these insights can be applied to your organization
            </p>
            <button onClick={() => navigate('/login')} className="btn-primary">Schedule Consultation</button>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-[7.6923%] border-t border-[rgba(255,255,255,0.25)]">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="display-medium mb-12">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="bg-[#121212] border border-[rgba(255,255,255,0.25)] overflow-hidden dark-hover dark-transition group cursor-pointer" onClick={() => navigate(`/insights/${relatedPost.id}`)}>
                  <img src={relatedPost.image} alt={relatedPost.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm text-[#00FFD1]">{relatedPost.category}</span>
                      <span className="text-sm text-[#4D4D4D]">{relatedPost.readTime}</span>
                    </div>
                    <h3 className="heading-3 mb-3">{relatedPost.title}</h3>
                    <p className="body-medium">{relatedPost.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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

export default BlogPost;