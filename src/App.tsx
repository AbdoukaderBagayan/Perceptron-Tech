/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Lock, 
  Zap, 
  Search, 
  Activity, 
  CheckCircle, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronRight, 
  Globe, 
  Cpu, 
  AlertTriangle,
  Users,
  BarChart3,
  Mail,
  Phone,
  Building2
} from 'lucide-react';

// --- Components ---

const Navbar = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'Solutions', id: 'solutions' },
    { name: 'À propos', id: 'about' },
    { name: 'Ressources', id: 'resources' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cyber-bg/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
          <div className="w-10 h-10 bg-cyber-accent rounded-lg flex items-center justify-center">
            <Shield className="text-cyber-neon w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase">Perceptron<span className="text-cyber-neon">-Tech</span></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => onNavigate(link.id)}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-cyber-accent hover:bg-cyber-accent/80 text-white px-6 py-2 rounded-full text-sm font-bold transition-all uppercase tracking-widest"
          >
            Audit Gratuit
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cyber-card border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <button 
                  key={link.id} 
                  onClick={() => { onNavigate(link.id); setIsOpen(false); }}
                  className="text-left text-lg font-medium text-gray-400"
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => { onNavigate('contact'); setIsOpen(false); }}
                className="bg-cyber-accent text-white px-6 py-3 rounded-lg text-center font-bold"
              >
                Audit Gratuit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyber-accent/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyber-neon/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-accent/10 border border-cyber-accent/30 text-cyber-neon text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Zap className="w-3 h-3" />
            Sécurité de niveau entreprise
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9] mb-6 uppercase"
          >
            Protégez votre entreprise contre les <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-neon to-cyber-accent">cybermenaces</span> avancées
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl"
          >
            Détection proactive, réponse automatisée et surveillance 24/7 par IA. Ne laissez pas votre infrastructure à la merci des attaquants.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-cyber-neon text-black px-8 py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              Demander un audit gratuit <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => onNavigate('solutions')}
              className="border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all text-center"
            >
              Voir la démo
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Ils nous font confiance</span>
            <div className="flex gap-8 items-center">
              <Building2 className="w-8 h-8" />
              <Globe className="w-8 h-8" />
              <Cpu className="w-8 h-8" />
              <Shield className="w-8 h-8" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const risks = [
    { title: "Ransomware", desc: "Blocage complet de vos opérations et demande de rançon.", icon: Lock },
    { title: "Fuite de données", desc: "Perte de confiance client et amendes réglementaires massives.", icon: AlertTriangle },
    { title: "Downtime", desc: "Chaque minute d'arrêt coûte des milliers d'euros à votre business.", icon: Activity },
  ];

  return (
    <section className="py-24 bg-cyber-card/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">Le coût de l'inaction est <span className="text-red-500">fatal</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Les cyberattaques coûtent en moyenne 4,45 millions de dollars par incident. Votre entreprise est-elle prête ?</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {risks.map((risk, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 glass-card rounded-2xl"
            >
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6">
                <risk.icon className="text-red-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase">{risk.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{risk.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  const pillars = [
    { title: "Détecter", desc: "Analyse comportementale par IA pour identifier les menaces inconnues.", icon: Search },
    { title: "Prévenir", desc: "Durcissement de l'infrastructure et blocage proactif des vecteurs d'attaque.", icon: Shield },
    { title: "Réagir", desc: "Réponse automatisée en millisecondes pour isoler les systèmes compromis.", icon: Zap },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyber-accent/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-tight">L'IA au service de votre <span className="text-cyber-neon">sérénité</span></h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Perceptron-Tech utilise une technologie propriétaire de détection comportementale qui apprend de votre réseau pour bloquer les menaces avant même qu'elles ne soient répertoriées.
            </p>
            
            <div className="space-y-6">
              {pillars.map((pillar, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyber-neon/10 rounded-full flex items-center justify-center">
                    <pillar.icon className="text-cyber-neon w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm mb-1 tracking-widest">{pillar.title}</h4>
                    <p className="text-gray-500 text-sm">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square glass-card rounded-3xl p-8 flex items-center justify-center overflow-hidden">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-64 h-64 border-2 border-dashed border-cyber-neon/30 rounded-full flex items-center justify-center"
              >
                <div className="w-48 h-48 border-2 border-dashed border-cyber-accent/30 rounded-full flex items-center justify-center">
                  <Shield className="w-20 h-20 text-cyber-neon glow-text" />
                </div>
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const services = [
    { title: "SOC as a Service", desc: "Surveillance 24/7 par nos experts et notre IA.", icon: Activity },
    { title: "Pentesting", desc: "Tests d'intrusion pour identifier vos failles réelles.", icon: Search },
    { title: "Audit de sécurité", desc: "Analyse complète de votre conformité et risques.", icon: BarChart3 },
    { title: "EDR / XDR", desc: "Protection avancée des terminaux et du réseau.", icon: Cpu },
  ];

  return (
    <section id="services" className="py-24 bg-cyber-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black uppercase mb-4">Nos Services <span className="text-cyber-accent">Experts</span></h2>
            <p className="text-gray-400">Une suite complète de solutions pour une protection à 360 degrés.</p>
          </div>
          <button 
            onClick={() => onNavigate('services')}
            className="text-cyber-neon font-bold uppercase tracking-widest flex items-center gap-2 group"
          >
            Tous nos services <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div key={i} className="p-8 glass-card rounded-2xl hover:border-cyber-neon/50 transition-all group">
              <div className="w-12 h-12 bg-cyber-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyber-neon/10 transition-colors">
                <service.icon className="text-cyber-accent w-6 h-6 group-hover:text-cyber-neon transition-colors" />
              </div>
              <h3 className="text-lg font-bold mb-3 uppercase">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-6">{service.desc}</p>
              <button 
                onClick={() => onNavigate('contact')}
                className="text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors flex items-center gap-1"
              >
                En savoir plus <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const stats = [
    { value: "-85%", label: "Réduction des incidents" },
    { value: "< 5 sec", label: "Temps de détection" },
    { value: "24/7", label: "Surveillance active" },
    { value: "500+", label: "Entreprises sécurisées" },
  ];

  return (
    <section className="py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-cyber-neon mb-2">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyber-accent/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-tight">Prêt à sécuriser votre <span className="text-cyber-neon">futur</span> ?</h2>
            <p className="text-gray-400 text-lg mb-12">
              Obtenez un audit gratuit de votre infrastructure sous 24h. Nos experts analyseront vos vulnérabilités et vous proposeront un plan d'action concret.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyber-card rounded-full flex items-center justify-center border border-white/10">
                  <Mail className="text-cyber-neon w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</div>
                  <div className="font-bold">contact@perceptron-tech.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyber-card rounded-full flex items-center justify-center border border-white/10">
                  <Phone className="text-cyber-neon w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Téléphone</div>
                  <div className="font-bold">+33 (0) 1 23 45 67 89</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-3xl p-8 md:p-12">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-500 w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold uppercase mb-2">Demande envoyée !</h3>
                <p className="text-gray-400">Un expert vous contactera dans les prochaines 24 heures.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Nom complet</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-cyber-neon transition-colors" placeholder="Jean Dupont" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email professionnel</label>
                    <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-cyber-neon transition-colors" placeholder="jean@entreprise.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Entreprise</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-cyber-neon transition-colors" placeholder="Nom de votre société" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message (Optionnel)</label>
                  <textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-cyber-neon transition-colors h-32" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-cyber-neon text-black font-black uppercase tracking-widest py-4 rounded-lg hover:scale-[1.02] transition-transform"
                >
                  Obtenir mon audit gratuit
                </button>
                <p className="text-[10px] text-center text-gray-600 uppercase tracking-widest">En soumettant ce formulaire, vous acceptez notre politique de confidentialité.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-cyber-card/20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Shield className="text-cyber-neon w-5 h-5" />
          <span className="font-bold tracking-tighter uppercase">Perceptron<span className="text-cyber-neon">-Tech</span></span>
        </div>
        
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
        
        <div className="text-xs text-gray-600 font-mono">
          © 2026 PERCEPTRON-TECH. SECURING THE FUTURE.
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <ProblemSection />
            <SolutionSection />
            <ServicesSection onNavigate={setCurrentPage} />
            <SocialProof />
            <ContactForm />
          </>
        );
      case 'services':
        return (
          <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
            <h1 className="text-5xl font-black uppercase mb-8">Nos <span className="text-cyber-neon">Services</span></h1>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "SOC as a Service", desc: "Surveillance continue de votre infrastructure par nos analystes certifiés. Détection d'anomalies en temps réel et réponse immédiate aux incidents." },
                { title: "Pentesting & Red Teaming", desc: "Simulations d'attaques réelles pour tester la robustesse de vos défenses. Nous identifions les failles avant que les pirates ne le fassent." },
                { title: "Audit de Conformité", desc: "Accompagnement ISO 27001, RGPD, HDS. Nous nous assurons que votre entreprise respecte les standards de sécurité les plus stricts." },
                { title: "Réponse aux Incidents", desc: "Une équipe d'intervention rapide disponible 24/7 pour contenir les brèches et restaurer vos services après une attaque." }
              ].map((s, i) => (
                <div key={i} className="p-10 glass-card rounded-3xl">
                  <h3 className="text-2xl font-bold uppercase mb-4">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-8">{s.desc}</p>
                  <button onClick={() => setCurrentPage('contact')} className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all">Demander un devis</button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'solutions':
        return (
          <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
            <h1 className="text-5xl font-black uppercase mb-8">Solutions par <span className="text-cyber-accent">Secteur</span></h1>
            <div className="grid md:grid-cols-3 gap-6">
              {['Finance', 'Santé', 'SaaS', 'Industrie', 'Retail', 'Secteur Public'].map((sector, i) => (
                <div key={i} className="p-8 glass-card rounded-2xl border-l-4 border-cyber-neon">
                  <h3 className="text-xl font-bold uppercase mb-2">{sector}</h3>
                  <p className="text-gray-500 text-sm">Protection spécifique adaptée aux régulations et menaces de votre secteur d'activité.</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-black uppercase mb-8">À propos de <span className="text-cyber-neon">Perceptron</span></h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Fondée par des experts en renseignement et en IA, Perceptron-Tech est à la pointe de la cybersécurité moderne. Notre mission est de rendre la sécurité de haut niveau accessible à toutes les entreprises.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <div className="text-3xl font-bold text-cyber-neon mb-1">50+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Experts Certifiés</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyber-neon mb-1">10+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Brevets IA</div>
                </div>
              </div>
              <button onClick={() => setCurrentPage('contact')} className="bg-cyber-accent px-8 py-4 rounded-full font-bold uppercase tracking-widest">Rejoindre l'aventure</button>
            </div>
          </div>
        );
      case 'resources':
        return (
          <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
            <h1 className="text-5xl font-black uppercase mb-8">Centre de <span className="text-cyber-neon">Ressources</span></h1>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Guide : Prévenir le Ransomware", type: "Livre Blanc" },
                { title: "L'état de la cybermenace 2026", type: "Rapport" },
                { title: "Sécuriser son infrastructure Cloud", type: "Webinaire" }
              ].map((r, i) => (
                <div key={i} className="glass-card rounded-2xl overflow-hidden group cursor-pointer">
                  <div className="h-48 bg-cyber-accent/20 flex items-center justify-center">
                    <Shield className="w-12 h-12 text-cyber-neon opacity-30 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-cyber-neon mb-2">{r.type}</div>
                    <h3 className="text-lg font-bold uppercase group-hover:text-cyber-neon transition-colors">{r.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'contact':
        return <ContactForm />;
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen selection:bg-cyber-neon selection:text-black">
      <Navbar onNavigate={setCurrentPage} />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
