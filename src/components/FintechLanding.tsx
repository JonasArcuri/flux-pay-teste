import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Inovação", href: "#innovation" },
  { label: "Resultados", href: "#metrics" },
  { label: "Como Funciona", href: "#process" },
  { label: "Feedbacks", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const faqs = [
  {
    question: "Como começa o projeto?",
    answer:
      "Tudo começa com uma chamada estratégica de diagnóstico. Entendemos seu contexto, mapeamos gargalos e definimos onde a solução digital gera mais retorno no curto prazo.",
  },
  {
    question: "Em quanto tempo vejo resultado?",
    answer:
      "Projetos enxutos começam a gerar impacto em semanas, não em meses. Nosso foco é colocar algo funcional no ar rápido, medir e iterar com base em dados.",
  },
  {
    question: "Vocês cuidam da parte técnica inteira?",
    answer:
      "Sim. Cuidamos de produto, UX/UI, arquitetura, desenvolvimento e integração com as ferramentas que você já usa — sempre com documentação e handoff limpo.",
  },
  {
    question: "Minha operação precisa parar para implementar?",
    answer:
      "Não. A arquitetura é pensada para rodar em paralelo, entrando de forma progressiva na sua rotina. A ideia é tirar atrito, não criar.",
  },
  {
    question: "Vocês atendem empresas em estágio inicial?",
    answer:
      "Sim. Atendemos desde founders solo até operações enterprise. O que muda é a profundidade da solução e o nível de personalização.",
  },
];

const stats = [
  {
    label: "Projetos entregues",
    value: "+120",
    detail: "Produtos digitais e automações em produção.",
  },
  {
    label: "Tempo médio de payback",
    value: "3–6 meses",
    detail: "Em projetos orientados a eficiência operacional.",
  },
  {
    label: "Satisfação dos clientes",
    value: "NPS 92",
    detail: "Relacionamento direto com founders e times.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Imersão no negócio",
    description:
      "Entendemos jornada, operação, restrições e métricas que realmente importam para o seu contexto.",
  },
  {
    step: "02",
    title: "Estratégia de produto",
    description:
      "Desenhamos a solução, o fluxo ideal de usuário e as integrações necessárias para evitar retrabalho.",
  },
  {
    step: "03",
    title: "Construção e validação",
    description:
      "Desenvolvimento sênior, com releases rápidos, testes contínuos e ajustes guiados por dados reais.",
  },
  {
    step: "04",
    title: "Escala e suporte",
    description:
      "Ajustes finos, melhoria contínua, dashboards e acompanhamento próximo do time.",
  },
];

const testimonials = [
  {
    initials: "GC",
    name: "Gabriel Costa",
    role: "Founder, SaaS B2B",
    quote:
      "Finalmente alguém que fala a língua do negócio e entrega código de gente grande. A experiência foi fluida do início ao fim.",
  },
  {
    initials: "LR",
    name: "Larissa Rocha",
    role: "Head de Operações",
    quote:
      "Reduzimos trabalho manual, erros operacionais e tempo de resposta do time. O produto parece que sempre existiu aqui dentro.",
  },
  {
    initials: "MP",
    name: "Matheus Prado",
    role: "CTO, Fintech",
    quote:
      "Arquitetura limpa, documentação consistente e decisões técnicas sempre justificadas. Elevou a barra do nosso stack.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

const App: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(faqs[0]?.question);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      {/* Glow de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(94,234,212,0.16)_0,_transparent_55%),radial-gradient(circle_at_bottom,_rgba(79,70,229,0.32)_0,_transparent_55%)]"
      />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main id="main" className="mx-auto max-w-6xl px-4 pb-16 pt-24 lg:pt-32">
        <Hero />

        <section id="innovation" className="mt-24 space-y-10 lg:mt-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
              Produto • Arquitetura • Experiência
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Tudo que um{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-indigo-400 bg-clip-text text-transparent">
                site sênior
              </span>{" "}
              precisa ter — em um só lugar.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Do primeiro contato à navegação profunda, cada detalhe foi pensado
              para reduzir fricção, guiar o olhar e aumentar a confiança de quem
              está do outro lado da tela.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {[
              {
                title: "Hero focado em decisão",
                description:
                  "Headline clara, subtexto objetivo e CTAs bem posicionados, sem ruído visual ou distrações desnecessárias.",
              },
              {
                title: "Fluxo de leitura guiado",
                description:
                  "Seções em sequência lógica: proposta de valor, prova social, processo, diferenciais e próxima ação.",
              },
              {
                title: "Microinterações elegantes",
                description:
                  "Animações suaves em hover, foco e scroll, adicionando vida sem comprometer a performance.",
              },
              {
                title: "Acessibilidade real",
                description:
                  "Contraste, navegação por teclado, landmarks semânticos e texto legível em qualquer tela.",
              },
              {
                title: "Copy orientada a contexto",
                description:
                  "Conversamos com founders, decisores e times, sem jargão gratuito nem buzzword vazia.",
              },
              {
                title: "Mobile-first de verdade",
                description:
                  "A experiência na tela pequena é tão boa quanto no desktop — nada de blocos quebrados.",
              },
            ].map((item, index) => (
              <motion.article
                key={item.title}
                custom={0.05 * index}
                variants={scaleIn}
                className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 shadow-[0_0_0_1px_rgba(15,23,42,0.6)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-[0_18px_45px_rgba(15,23,42,0.9)]"
              >
                <div className="mb-3 h-8 w-8 rounded-xl bg-slate-800/80 ring-1 ring-slate-700/80 transition group-hover:bg-emerald-400/10 group-hover:ring-emerald-400/70" />
                <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section
          id="metrics"
          className="mt-24 grid gap-10 lg:mt-32 lg:grid-cols-[1.2fr,1fr] lg:items-center"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
              Resultados
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Uma vitrine bonita não basta. A experiência precisa{" "}
              <span className="bg-gradient-to-r from-indigo-300 to-emerald-300 bg-clip-text text-transparent">
                performar
              </span>
              .
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              O site não é só cartão de visita: ele precisa converter atenção em
              conversa e conversa em oportunidade. Por isso cada seção foi
              desenhada como um degrau até o contato qualificado.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-4 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 backdrop-blur-sm sm:grid-cols-3 lg:p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                custom={0.06 * index}
                variants={fadeUp}
                className="rounded-xl bg-slate-900/60 p-4 text-left sm:text-center"
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  {stat.label}
                </p>
                <p className="mt-2 text-xl font-semibold text-emerald-300 sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  {stat.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="process" className="mt-24 lg:mt-32">
          <motion.div
            className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
                Como funciona
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Processo simples, comunicação clara, entregas previsíveis.
              </h2>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-slate-300 sm:text-sm">
              Nada de túnel escuro de desenvolvimento. Você acompanha o avanço,
              entende as decisões e participa das escolhas que impactam o
              resultado final.
            </p>
          </motion.div>

          <motion.ol
            className="mt-8 grid gap-6 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {processSteps.map((step, index) => (
              <motion.li
                key={step.title}
                custom={0.05 * index}
                variants={fadeUp}
                className="relative flex gap-4 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 backdrop-blur-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400/90 to-indigo-500 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/30">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </section>

        <section id="testimonials" className="mt-24 lg:mt-32">
          <motion.div
            className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
                Feedbacks
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Prova social que inspira confiança em segundos.
              </h2>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-slate-300 sm:text-sm">
              A página destaca depoimentos enxutos, com contexto e cargos
              claros, focando em impacto real — não em frases genéricas.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 grid gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {testimonials.map((t, index) => (
              <motion.figure
                key={t.name}
                custom={0.04 * index}
                variants={scaleIn}
                className="flex h-full flex-col rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400/80 to-indigo-500 text-xs font-semibold text-slate-950">
                    {t.initials}
                  </div>
                  <div>
                    <figcaption className="text-sm font-semibold text-slate-50">
                      {t.name}
                    </figcaption>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>
                <blockquote className="mt-4 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  "{t.quote}"
                </blockquote>
              </motion.figure>
            ))}
          </motion.div>
        </section>

        <section id="faq" className="mt-24 lg:mt-32">
          <motion.div
            className="grid gap-10 lg:grid-cols-[1.1fr,1.2fr]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
                FAQ
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Perguntas frequentes de quem valoriza um site sênior.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300">
                Respondemos de forma direta, sem texto burocrático, para que
                você tome decisões mais rápido.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-300">
                <span className="rounded-full bg-slate-900/60 px-3 py-1">
                  • Navegação fluida
                </span>
                <span className="rounded-full bg-slate-900/60 px-3 py-1">
                  • Estrutura orientada a conversão
                </span>
                <span className="rounded-full bg-slate-900/60 px-3 py-1">
                  • Visual limpo, sem ruído
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {faqs.map((item) => {
                const isOpen = openFaq === item.question;

                return (
                  <motion.div
                    key={item.question}
                    className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40"
                    variants={scaleIn}
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-slate-50 sm:px-5 sm:py-4"
                      onClick={() =>
                        setOpenFaq((prev) =>
                          prev === item.question ? null : item.question
                        )
                      }
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>
                      <span
                        className={`ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs transition ${
                          isOpen
                            ? "rotate-45 border-emerald-400 text-emerald-300"
                            : "border-slate-500 text-slate-300"
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="px-4 pb-4 text-xs leading-relaxed text-slate-300 sm:px-5 sm:pb-5 sm:text-sm">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        <FinalCta />
      </main>

      <Footer />
    </div>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const offset = window.scrollY + rect.top - 80;
    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-900/80 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-indigo-500 text-sm font-semibold text-slate-950">
            S
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-slate-50">
              Sênior Studio
            </span>
            <span className="text-[11px] text-slate-400">
              Produto, UX/UI e Software sob medida
            </span>
          </div>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 text-xs font-medium text-slate-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  type="button"
                  onClick={() => scrollTo(item.href)}
                  className="transition hover:text-emerald-300"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
            >
              Ver portfólio
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-to-r from-emerald-400 to-indigo-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:brightness-110"
            >
              Conversar sobre um projeto
            </a>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/70 text-slate-200 md:hidden"
          onClick={() => setIsOpen((p) => !p)}
          aria-label="Abrir menu"
        >
          <span className="sr-only">Abrir menu</span>
          <div className="space-y-1.5">
            <span className="block h-[2px] w-4 rounded-full bg-slate-200" />
            <span className="block h-[2px] w-3 rounded-full bg-slate-400" />
          </div>
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-slate-900/80 bg-slate-950/95 md:hidden"
          >
            <div className="mx-auto max-w-6xl px-4 pb-4 pt-2">
              <ul className="flex flex-col gap-3 text-sm text-slate-200">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <button
                      type="button"
                      onClick={() => {
                        setIsOpen(false);
                        scrollTo(item.href);
                      }}
                      className="w-full rounded-lg px-2 py-2 text-left hover:bg-slate-900"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-center text-xs font-medium"
                >
                  Ver portfólio
                </a>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-full bg-gradient-to-r from-emerald-400 to-indigo-500 px-4 py-2 text-center text-xs font-semibold text-slate-950"
                >
                  Conversar sobre um projeto
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="grid gap-12 lg:grid-cols-[1.1fr,1fr] lg:items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-slate-900/70 px-3 py-1 text-[11px] text-emerald-200 shadow-[0_0_0_1px_rgba(16,185,129,0.16)]">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Sites desenhados por quem vive produto, não só código.
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
          Um site{" "}
          <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
            sênior
          </span>{" "}
          que fala a língua de quem decide.
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
          Estruturamos sua presença digital com foco em clareza, confiança e
          conversão. Templates, nunca; produto sob medida, sempre — inspirado
          nas experiências mais modernas da web.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-indigo-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:brightness-110"
          >
            Agendar uma conversa
          </a>
          <a
            href="#metrics"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-xs font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
          >
            Entender a experiência
          </a>
        </div>
        <dl className="mt-6 flex flex-wrap gap-4 text-[11px] text-slate-300">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Arquitetura pensada antes do layout</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            <span>UX focado em jornada real do usuário</span>
          </div>
        </dl>
      </motion.div>

      <motion.div
        className="relative"
        initial="hidden"
        animate="visible"
        custom={0.15}
        variants={scaleIn}
      >
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -bottom-10 -right-6 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="relative rounded-3xl border border-slate-800/80 bg-slate-900/60 p-4 shadow-[0_18px_70px_rgba(15,23,42,0.9)] backdrop-blur-xl">
          {/* Simulação de "dashboard" da hero, estilo oxeno */}
          <div className="mb-3 flex items-center justify-between">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-rose-400/80" />
              <span className="h-2 w-2 rounded-full bg-amber-300/80" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
            </div>
            <div className="h-5 w-24 rounded-full bg-slate-800/80" />
          </div>
          <div className="grid gap-3 md:grid-cols-[1.2fr,1fr]">
            <div className="space-y-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                <p className="text-[11px] font-medium text-slate-300">
                  Jornada do usuário
                </p>
                <div className="mt-3 h-20 rounded-xl bg-gradient-to-tr from-emerald-400/15 via-indigo-500/10 to-sky-500/10" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                  <p className="text-[10px] text-slate-400">Tempo médio</p>
                  <p className="mt-1 text-sm font-semibold text-slate-50">
                    1m 32s
                  </p>
                  <p className="mt-1 text-[10px] text-emerald-300">
                    +27% vs site antigo
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                  <p className="text-[10px] text-slate-400">Taxa de clique</p>
                  <p className="mt-1 text-sm font-semibold text-slate-50">
                    4,8x
                  </p>
                  <p className="mt-1 text-[10px] text-indigo-300">
                    mais conversas iniciadas
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                <p className="text-[11px] font-medium text-slate-300">
                  Pipeline de oportunidades
                </p>
                <div className="mt-3 space-y-2">
                  {["Descoberta", "Diagnóstico", "Proposta"].map((stage, i) => (
                    <div key={stage} className="flex items-center justify-between">
                      <span className="text-[11px] text-slate-300">
                        {stage}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-16 overflow-hidden rounded-full bg-slate-800">
                          <div
                            className="h-full rounded-full bg-emerald-400"
                            style={{ width: `${40 + i * 20}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-slate-400">
                          {40 + i * 20}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                <p className="text-[11px] font-medium text-slate-300">
                  Dispositivos
                </p>
                <div className="mt-3 flex items-end gap-2">
                  {[60, 85, 45].map((h, idx) => (
                    <div
                      key={idx}
                      className="flex-1 rounded-full bg-slate-800/80"
                      style={{ height: "3.25rem" }}
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-t from-indigo-500 via-emerald-400 to-emerald-200"
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-[10px] text-slate-400">
            Layout inspirado em dashboards de fintech/SaaS — mas adaptado para
            contar a história do seu produto.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

const FinalCta: React.FC = () => (
  <section className="mt-24 lg:mt-32">
    <motion.div
      className="overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-950/95 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.95)] sm:p-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={scaleIn}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Pronto para ter um site com cara e postura de produto sênior?
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
            Envie uma mensagem contando seu contexto atual e onde você quer
            chegar. Na primeira conversa, já trazemos ideias práticas de
            melhoria de experiência.
          </p>
        </div>
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-indigo-500 px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:brightness-110"
          >
            Falar agora no WhatsApp
          </a>
          <p className="text-[11px] text-slate-400">
            Resposta direta, sem formulário longo. Conte seu cenário e analisamos
            juntos o próximo passo.
          </p>
        </div>
      </div>
    </motion.div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="border-t border-slate-900/80 bg-slate-950/95">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} Sênior Studio. Presença digital com foco em
        produto e experiência.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href="#" className="hover:text-slate-200">
          Política de Privacidade
        </a>
        <a href="#" className="hover:text-slate-200">
          Termos de Uso
        </a>
      </div>
    </div>
  </footer>
);

export default App;
