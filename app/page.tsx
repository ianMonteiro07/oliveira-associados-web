"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- CORREÇÃO AQUI ---
// Adicionei 'as const' no transition para o TypeScript entender o tipo de 'ease'
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" } as const
};

const FAQItem = ({ pergunta, resposta }: { pergunta: string, resposta: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 md:py-6 flex justify-between items-center text-left hover:text-amber-500 transition-colors group active:bg-white/5 px-2 rounded-lg"
      >
        <span className="text-sm md:text-xl font-bold pr-4 leading-tight">{pergunta}</span>
        <motion.span 
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-xl md:text-2xl text-amber-500 flex-shrink-0"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-5 md:pb-6 px-2 text-slate-400 leading-relaxed font-light text-xs md:text-base">
              {resposta}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Home() {
  const whatsappLink = "https://wa.me/5582993610512?text=Olá,%20gostaria%20de%20agendar%20uma%20consultoria.";

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-amber-500/30 bg-[#050810] overflow-x-hidden">
      
      {/* --- BACKGROUND DINÂMICO --- */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-5%] right-[-10%] w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-amber-600/10 rounded-full blur-[80px] md:blur-[140px] animate-pulse" />
        <div className="absolute bottom-[10%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
      </div>

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-[100] px-4 md:px-6 py-4 md:py-6">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-6xl mx-auto bg-slate-900/80 backdrop-blur-2xl border border-white/10 p-3 md:p-4 rounded-2xl md:rounded-3xl flex justify-between items-center shadow-2xl"
        >
          <div className="flex items-center gap-2 pl-2">
            <span className="text-sm md:text-xl font-black tracking-tighter uppercase italic text-white">
              Oliveira<span className="text-amber-500">.</span>Associados
            </span>
          </div>
          <div className="hidden md:flex gap-8 items-center pr-2 text-slate-300">
            <a href="#sobre" className="text-xs font-bold uppercase tracking-widest hover:text-amber-400 transition">O Escritório</a>
            <a href="#atuacao" className="text-xs font-bold uppercase tracking-widest hover:text-amber-400 transition">Expertise</a>
            <a href="#faq" className="text-xs font-bold uppercase tracking-widest hover:text-amber-400 transition">Dúvidas</a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-amber-500 text-black px-6 py-2.5 rounded-xl font-black text-xs hover:bg-amber-400 transition-all active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              CONSULTA AGORA
            </a>
          </div>
          <div className="md:hidden">
             <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-amber-500 text-black px-4 py-2 rounded-xl font-black text-[10px] uppercase active:scale-90 transition-transform">Contato</a>
          </div>
        </motion.div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 md:pt-64 pb-16 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 border border-amber-500/20 rounded-full text-amber-500 text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] mb-8 bg-amber-500/5 shadow-inner"
          >
            Referência em Direito de Alta Complexidade
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl md:text-[115px] font-black leading-tight mb-8 md:mb-14 tracking-tight text-white flex flex-col items-center"
          >
            <span className="block drop-shadow-2xl">DEDICAÇÃO</span>
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-orange-600 py-6 inline-block leading-none">
              IMPLACÁVEL.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm md:text-2xl max-w-3xl mx-auto mb-10 md:mb-16 font-light leading-relaxed px-2 md:px-0"
          >
            Protegemos o que é seu por direito com estratégia inovadora e vigor técnico.
          </motion.p>
          
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-10 md:px-12 py-4 md:py-6 rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest hover:bg-amber-500 transition-all shadow-xl inline-block w-full md:w-auto text-center">
              Falar com Especialista
            </a>
          </motion.div>
        </div>
      </section>

      {/* --- SEÇÃO DE PARCEIROS --- */}
      <section className="py-10 md:py-12 bg-white/[0.01] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-500 text-[8px] md:text-[10px] uppercase tracking-[0.3em] mb-8 font-bold">Confiança em gestão jurídica</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 opacity-30 grayscale contrast-125">
            <span className="text-sm md:text-2xl font-black tracking-tighter">TECHCORP</span>
            <span className="text-sm md:text-2xl font-black tracking-tighter">GLOBAL.LOG</span>
            <span className="text-sm md:text-2xl font-black tracking-tighter">URBAN.BANK</span>
            <span className="text-sm md:text-2xl font-black tracking-tighter">PRIME.HLD</span>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO SOBRE --- */}
      <section id="sobre" className="py-16 md:py-32 px-6 bg-white/[0.02] backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div 
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={{ once: true }}
            transition={fadeInUp.transition}
            className="relative group order-2 md:order-1"
          >
            <div className="absolute -inset-2 md:-inset-4 bg-amber-500/10 rounded-[2.5rem] md:rounded-[3rem] blur-2xl transition duration-500" />
            <div className="relative aspect-square md:aspect-[4/5] bg-slate-800 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" 
                alt="Advogado Senior" 
                className="w-full h-full object-cover object-top grayscale md:group-hover:grayscale-0 transition duration-1000 scale-100 md:group-hover:scale-105"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={{ once: true }}
            transition={fadeInUp.transition}
            className="order-1 md:order-2 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 leading-tight text-white uppercase italic">
              Solidez <br className="hidden md:block"/> Gera <span className="text-amber-500">Resultados.</span>
            </h2>
            <p className="text-slate-300 text-sm md:text-lg mb-8 leading-relaxed font-light">
              Escritório focado na necessidade de um atendimento jurídico que entenda a velocidade do mundo moderno sem abrir mão do rigor técnico.
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-8 py-6 border-t border-white/10">
              <div className="text-center md:text-left">
                <h4 className="text-2xl md:text-4xl font-black text-amber-500 mb-1">+1.5k</h4>
                <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Causas Ganhas</p>
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-2xl md:text-4xl font-black text-amber-500 mb-1">15 ANOS</h4>
                <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">De Experiência</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- ÁREAS DE ATUAÇÃO --- */}
      <section id="atuacao" className="py-16 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={{ once: true }}
            transition={fadeInUp.transition}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-white uppercase tracking-tighter">Expertise</h2>
            <div className="h-1 w-16 md:w-24 bg-amber-500 mx-auto rounded-full" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { t: "Compliance Digital", d: "Segurança jurídica total para empresas de tecnologia e proteção de dados (LGPD)." },
              { t: "Blindagem Patrimonial", d: "Estratégias avançadas de holding e proteção de bens para sucessão familiar." },
              { t: "Direito Tributário", d: "Otimização fiscal inteligente e recuperação ativa de créditos tributários." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-slate-900/40 border border-white/5 shadow-xl hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 text-amber-500 font-bold">
                   {i + 1}
                </div>
                <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 text-white">{item.t}</h3>
                <p className="text-slate-400 text-xs md:text-base leading-relaxed font-light">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEÇÃO FAQ --- */}
      <section id="faq" className="py-16 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={{ once: true }}
            transition={fadeInUp.transition}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">FAQ</h2>
            <p className="text-slate-500 text-xs md:text-base px-4">Respostas rápidas sobre nossos processos jurídicos.</p>
          </motion.div>
          <motion.div 
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={{ once: true }}
            transition={fadeInUp.transition}
            className="bg-slate-900/40 rounded-[2rem] md:rounded-[3rem] p-4 md:p-12 border border-white/5 backdrop-blur-sm"
          >
            <FAQItem 
              pergunta="Como funciona a primeira consultoria?" 
              resposta="Analisamos a viabilidade do caso e traçamos uma estratégia preliminar de forma presencial ou videoconferência." 
            />
            <FAQItem 
              pergunta="O escritório atende em outros estados?" 
              resposta="Sim, possuímos estrutura tecnológica para atendimento digital em todo o território nacional." 
            />
            <FAQItem 
              pergunta="Quais os custos envolvidos?" 
              resposta="Os honorários variam conforme a complexidade da causa com total transparência contratual." 
            />
          </motion.div>
        </div>
      </section>

      {/* --- LOCALIZAÇÃO --- */}
      <section id="local" className="py-16 md:py-32 px-6 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto rounded-[2rem] md:rounded-[3.5rem] overflow-hidden bg-slate-900/40 border border-white/10 flex flex-col md:flex-row shadow-2xl">
          <div className="p-8 md:p-20 md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-3xl font-black mb-8 text-white uppercase italic">Onde Estamos</h2>
            <div className="space-y-6 md:space-y-8 mb-10">
              <div className="flex items-start gap-4 justify-center md:justify-start">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 border border-amber-500/20 text-amber-500 text-[10px] font-black">
                  01
                </div>
                <p className="text-slate-300 text-sm md:text-lg leading-relaxed font-light">Av. Maria Coelho Aguiar, 215 - Jardim São Luís<br/> <span className="text-slate-500 text-[10px] md:text-sm tracking-widest">São Paulo - SP</span></p>
              </div>
            </div>
            <a 
              href="https://www.google.com/maps" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 md:px-12 py-4 rounded-xl md:rounded-2xl font-black text-center text-[10px] md:text-sm uppercase tracking-widest active:scale-95 transition-transform"
            >
              ABRIR MAPS
            </a>
          </div>
          <div className="md:w-1/2 h-[250px] md:h-auto grayscale opacity-60">
             <img 
               src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80" 
               alt="Localização" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 md:py-24 px-6 bg-[#03060c] border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-[180px] font-black opacity-[0.03] mb-4 md:mb-[-90px] tracking-tighter text-white uppercase select-none">ADVOGADOS</h2>
          <div className="relative z-10">
            <div className="flex justify-center gap-6 md:gap-12 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-10">
              <a href="#" className="hover:text-amber-500 transition-colors px-2">Instagram</a>
              <a href="#" className="hover:text-white transition-colors px-2">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors px-2">Políticas</a>
            </div>
            <p className="text-slate-600 text-[8px] md:text-[10px] uppercase tracking-widest font-medium text-center">
              © 2025 Silva & Associados • OAB/SP 123.456
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}