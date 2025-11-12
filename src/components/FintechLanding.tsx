import React, { useState } from "react";

const sections = ["features", "how-it-works", "pricing", "faq"] as const;

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 72; // altura aproximada do header
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({
    top,
    behavior: "smooth",
  });
};

const FintechLanding: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-48 left-1/2 h-96 w-[580px] -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-400/15 via-indigo-500/15 to-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <header className="sticky top-0 z-40 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-cyan-400 to-indigo-500 shadow-[0_0_0_1px_rgba(148,163,184,0.5),0_15px_35px_rgba(15,23,42,0.9)]">
                <span className="text-xs font-semibold tracking-[0.2em] text-slate-950">
                  FX
                </span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-100">
                  FluxPay
                </span>
                <span className="text-[0.7rem] text-slate-400">
                  Checkout &amp; pagamentos globais
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
              <button
                onClick={() => scrollToSection("features")}
                className="relative pb-0.5 transition-colors hover:text-slate-100"
              >
                <span>Recursos</span>
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-indigo-500 via-emerald-400 to-cyan-400 transition-transform duration-200 group-hover:scale-x-100" />
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="relative pb-0.5 transition-colors hover:text-slate-100"
              >
                Jornada
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="relative pb-0.5 transition-colors hover:text-slate-100"
              >
                Planos
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="relative pb-0.5 transition-colors hover:text-slate-100"
              >
                Dúvidas
              </button>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button className="hidden items-center rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-300 shadow-sm transition hover:border-slate-500 hover:bg-slate-900 md:inline-flex">
                Ver demo do painel
              </button>
              <button
                onClick={() => scrollToSection("cta")}
                className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-[0_12px_32px_rgba(56,189,248,0.45)] transition hover:shadow-[0_16px_40px_rgba(56,189,248,0.65)] md:inline-flex"
              >
                Falar com o time
                <span>↗</span>
              </button>
              {/* Mobile toggle */}
              <button
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 md:hidden"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label="Abrir menu"
                aria-expanded={mobileOpen}
              >
                <div className="space-y-0.5">
                  <span
                    className={`block h-0.5 w-4 rounded-full bg-slate-100 transition ${
                      mobileOpen ? "translate-y-[3px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-4 rounded-full bg-slate-100 transition ${
                      mobileOpen ? "-translate-y-[3px] -rotate-45" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {mobileOpen && (
            <div className="border-t border-slate-800/70 pb-3 pt-2 md:hidden">
              <div className="flex flex-col gap-1.5 text-sm text-slate-300">
                {sections.map((sec) => (
                  <button
                    key={sec}
                    onClick={() => {
                      scrollToSection(sec);
                      setMobileOpen(false);
                    }}
                    className="w-full rounded-lg px-2 py-1.5 text-left hover:bg-slate-900/80"
                  >
                    {sec === "features" && "Recursos"}
                    {sec === "how-it-works" && "Jornada"}
                    {sec === "pricing" && "Planos"}
                    {sec === "faq" && "Dúvidas"}
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  scrollToSection("cta");
                  setMobileOpen(false);
                }}
                className="mt-2 w-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-md"
              >
                Agendar conversa
              </button>
            </div>
          )}
        </header>

        {/* MAIN */}
        <main className="flex-1 pb-16">
          {/* HERO */}
          <section id="inicio" className="py-10 sm:py-14 lg:py-16">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr,1fr]">
              {/* Hero copy */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-2.5 py-1 text-[0.7rem] text-slate-300 shadow-sm backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.35)]" />
                  Front-end nível senior, pensado para conversão em fintech.
                </div>
                <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-[2.6rem]">
                  Checkout e landing com{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                    UX de banco digital
                  </span>{" "}
                  para sua{" "}
                  <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
                    fintech escalar receita
                  </span>
                  .
                </h1>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-[0.95rem]">
                  FluxPay é um front-end de referência para produtos financeiros:{" "}
                  jornada limpa, microinterações discretas e foco absoluto em tirar o
                  usuário da indecisão para o clique de pagamento.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/5 px-3 py-1 text-[0.7rem] font-medium text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Otimizado para KYC, onboarding e checkout.
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-[0.7rem] text-slate-300">
                    PCI mindset • UX sem fricção
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => scrollToSection("cta")}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(56,189,248,0.7)] transition hover:shadow-[0_22px_50px_rgba(56,189,248,0.9)]"
                  >
                    Quero esse nível de front
                    <span>✨</span>
                  </button>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
                  >
                    Ver seções prontas
                    <span className="text-sm">↓</span>
                  </button>
                </div>
                <dl className="mt-6 flex flex-wrap gap-6 text-xs text-slate-400">
                  <div>
                    <dt className="font-medium text-slate-200">+32% conversão</dt>
                    <dd>média ao migrar de landing genérica para fluxo otimizado.</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-slate-200">&lt; 2,2s LCP</dt>
                    <dd>pensado para performance real em 4G &amp; mobile first.</dd>
                  </div>
                </dl>
              </div>

              {/* Hero visual: "painel" fintech */}
              <div className="relative">
                <div className="absolute -right-4 -top-4 hidden rounded-full border border-emerald-400/60 bg-slate-950/90 px-3 py-1 text-[0.7rem] text-emerald-200 shadow-[0_20px_40px_rgba(15,23,42,0.95)] sm:flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Onboarding completo em &lt; 3 minutos
                </div>
                <div className="rounded-3xl border border-slate-700/80 bg-slate-950/95 p-4 shadow-[0_24px_80px_rgba(15,23,42,1)]">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">
                        Painel de pagamentos
                      </p>
                      <p className="mt-0.5 text-xs text-slate-300">
                        Conversão em tempo real por canal.
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/10 px-2 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span className="text-[0.65rem] font-medium text-emerald-100">
                        Live risk scoring
                      </span>
                    </div>
                  </div>

                  {/* Métricas rápidas */}
                  <div className="mt-4 grid grid-cols-3 gap-2.5 text-xs">
                    <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-2.5">
                      <p className="text-[0.65rem] text-slate-400">Aprovação cartão</p>
                      <p className="mt-1 text-sm font-semibold text-emerald-300">
                        94,2%
                      </p>
                      <p className="mt-0.5 text-[0.65rem] text-emerald-400">
                        +12% vs. semana anterior
                      </p>
                    </div>
                    <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-2.5">
                      <p className="text-[0.65rem] text-slate-400">Chargeback</p>
                      <p className="mt-1 text-sm font-semibold text-rose-300">0,34%</p>
                      <p className="mt-0.5 text-[0.65rem] text-rose-400/80">
                        -27% com UX antifraude
                      </p>
                    </div>
                    <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-2.5">
                      <p className="text-[0.65rem] text-slate-400">Tempo de checkout</p>
                      <p className="mt-1 text-sm font-semibold text-sky-300">42s</p>
                      <p className="mt-0.5 text-[0.65rem] text-sky-400/80">
                        fluxo em 3 passos
                      </p>
                    </div>
                  </div>

                  {/* Mini gráfico de barras */}
                  <div className="mt-4 rounded-2xl border border-slate-700 bg-slate-900/80 p-2.5">
                    <div className="flex items-center justify-between text-[0.7rem] text-slate-400">
                      <span>Receita recorrente por região</span>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                          Card
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          Pix/Local
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 grid h-28 grid-cols-6 gap-1.5 items-end">
                      {[60, 72, 68, 80, 64, 76].map((height, i) => (
                        <div
                          key={i}
                          className="flex flex-col items-center justify-end gap-1"
                        >
                          <div className="flex w-2.5 flex-col justify-end gap-0.5 rounded-full bg-slate-800/80 p-0.5">
                            <div
                              className="w-full rounded-full bg-gradient-to-t from-indigo-500 to-indigo-300"
                              style={{ height: `${height * 0.6}%` }}
                            />
                            <div
                              className="w-full rounded-full bg-gradient-to-t from-emerald-500 to-emerald-300"
                              style={{ height: `${height * 0.4}%` }}
                            />
                          </div>
                          <span className="text-[0.6rem] text-slate-500">
                            R{i + 1}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TRUST BAR */}
          <section aria-label="Confiança" className="pb-10">
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/90 px-4 py-3 shadow-sm sm:flex sm:items-center sm:justify-between">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-slate-400">
                Padrão visual de fintech global
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2 sm:mt-0">
                <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[0.7rem] text-slate-300">
                  Flow inspirado em Stripe, Revolut e Nubank.
                </span>
                <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[0.7rem] text-slate-300">
                  Pensado para SaaS, banking-as-a-service e gateways.
                </span>
              </div>
            </div>
          </section>

          {/* FEATURES */}
          <section id="features" className="py-10">
            <header className="max-w-xl space-y-2">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-slate-400">
                Arquitetura de página sênior
              </p>
              <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                Seções desenhadas para levar o usuário do "quem são vocês?" ao
                "deixa eu testar agora".
              </h2>
              <p className="text-sm text-slate-300">
                Hero, prova social, benefícios, jornada, planos e FAQ — tudo em ordem
                lógica, com hierarquia visual clara e foco em reduzir atrito da tomada
                de decisão.
              </p>
            </header>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <article className="group relative flex flex-col rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900/80 to-slate-950/95 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.9)] transition hover:border-emerald-400/70 hover:shadow-[0_24px_60px_rgba(15,23,42,1)]">
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 text-lg">
                  ⚡
                </div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Hero de impacto, sem ruído
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Headline direta, subheadline que traduz valor financeiro e CTAs em
                  hierarquia clara. Nada de carrossel, nada de distração — foco em
                  explicar o produto rápido.
                </p>
                <p className="mt-3 text-[0.7rem] font-medium text-emerald-300">
                  Ideal para aquisições de cartão, conta PJ e soluções B2B.
                </p>
              </article>

              <article className="group relative flex flex-col rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900/80 to-slate-950/95 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.9)] transition hover:border-emerald-400/70 hover:shadow-[0_24px_60px_rgba(15,23,42,1)]">
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/15 text-lg">
                  📱
                </div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Mobile first de verdade
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Layout pensado para dedão: áreas de toque, espessura de fonte e
                  espaçamentos calibrados para telas pequenas. Não é só "se
                  adapta" — ele nasce do mobile.
                </p>
                <p className="mt-3 text-[0.7rem] font-medium text-cyan-300">
                  Pensado para onboarding em 4G e ambiente real.
                </p>
              </article>

              <article className="group relative flex flex-col rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900/80 to-slate-950/95 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.9)] transition hover:border-emerald-400/70 hover:shadow-[0_24px_60px_rgba(15,23,42,1)]">
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/15 text-lg">
                  🧠
                </div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Jornada guiada por objeções
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Cada bloco responde a uma dúvida clássica: segurança, custo, tempo
                  de implantação, suporte, integração. A página já conversa como um
                  time de vendas.
                </p>
                <p className="mt-3 text-[0.7rem] font-medium text-indigo-300">
                  Menos "explicar tudo", mais "remover atrito".
                </p>
              </article>
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section id="how-it-works" className="py-10">
            <header className="max-w-xl space-y-2">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-slate-400">
                Como essa UX entra no seu produto
              </p>
              <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                Integração simples: você pluga o conteúdo, nós entregamos a estrutura
                de conversão.
              </h2>
            </header>
            <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr,1.1fr]">
              <div className="space-y-3">
                {[
                  {
                    title: "1. Alinhamos oferta, persona e jornada",
                    body: "Entendemos ticket, risco, se é B2B ou B2C, canal de aquisição e qual ação vale dinheiro de verdade para você: cadastro, limite aprovado, MRR, volume transacionado.",
                    tag: "Contexto de negócio",
                  },
                  {
                    title: "2. Desenhamos o fluxo visual de decisão",
                    body: "Organizamos a página para que o usuário sempre saiba onde está e qual o próximo passo. Nada de blocos aleatórios — tudo tem motivo.",
                    tag: "Arquitetura da informação",
                  },
                  {
                    title: "3. Entregamos o front pronto para plugar",
                    body: "Você recebe o layout em React + Tailwind, com componentes claros e tokens de estilo que seu time consegue manter sem fricção.",
                    tag: "Dev-friendly",
                  },
                ].map((step, idx) => (
                  <article
                    key={step.title}
                    className="grid grid-cols-[auto,1fr,auto] items-start gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/90 p-3.5 text-xs text-slate-300"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-600 bg-slate-900 text-[0.7rem] font-medium text-slate-100">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-[0.8rem] font-semibold text-slate-50">
                        {step.title}
                      </h3>
                      <p className="mt-0.5 leading-relaxed">{step.body}</p>
                    </div>
                    <span className="mt-0.5 inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-2 py-1 text-[0.65rem] whitespace-nowrap text-slate-300">
                      {step.tag}
                    </span>
                  </article>
                ))}
              </div>
              <aside className="rounded-2xl border border-emerald-500/40 bg-gradient-to-b from-emerald-500/10 via-slate-950 to-slate-950 p-4 text-xs text-emerald-50 shadow-[0_22px_60px_rgba(15,23,42,1)]">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.23em] text-emerald-200">
                  UX não é só "ficar bonito"
                </p>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-emerald-50">
                  É reduzir ruído cognitivo nas telas onde o usuário precisa confiar
                  em você com o{" "}
                  <span className="font-semibold">dinheiro dele</span>: onboarding,
                  limite, PIX, checkout, vinculação de cartão.
                </p>
                <ul className="mt-3 space-y-1.5 text-[0.8rem] text-emerald-100/90">
                  <li>• Fricção baixa onde precisa ser fluido.</li>
                  <li>• Micro-alertas claros onde o risco aumenta.</li>
                  <li>• Cópia que fala de segurança sem assustar.</li>
                  <li>• Hierarquia visual que não deixa o usuário perdido.</li>
                </ul>
                <p className="mt-3 text-[0.75rem] text-emerald-100/90">
                  Todo esse pensamento já está embutido na estrutura que você vai
                  receber.
                </p>
              </aside>
            </div>
          </section>

          {/* SOCIAL PROOF */}
          <section id="social-proof" className="py-10">
            <header className="max-w-xl space-y-2">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-slate-400">
                Prova social
              </p>
              <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                "Parece que nossa fintech finalmente ganhou a cara que merece."
              </h2>
            </header>
            <div className="mt-6 grid gap-5 lg:grid-cols-[1.3fr,1.1fr]">
              <article className="rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900 to-slate-950 p-4 text-sm text-slate-200 shadow-[0_20px_50px_rgba(15,23,42,1)]">
                <p className="leading-relaxed">
                  "Depois que subimos o novo front, o discurso de vendas encaixou com
                  a experiência do site. Nossos leads pararam de perguntar o óbvio e
                  começaram a chegar mais educados, prontos para falar de limite,
                  integração e SLA."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-cyan-400 to-indigo-500 text-sm font-semibold text-slate-950">
                    A
                  </div>
                  <div className="text-xs text-slate-300">
                    <p className="font-semibold text-slate-100">
                      Nome do(a) Founder
                    </p>
                    <p>CEO, Plataforma de Pagamentos B2B</p>
                  </div>
                </div>
              </article>
              <div className="space-y-2.5 text-xs">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/90 px-3 py-1">
                  <div className="flex text-amber-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <span className="text-slate-200">
                    "Layout com cara de produto global. Zero clima de template."
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/90 px-3 py-1 text-slate-200">
                  <span>📉</span>
                  <span>"Menos cliques, menos scroll, mais aprovações."</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/90 px-3 py-1 text-slate-200">
                  <span>🚀</span>
                  <span>"Pitch, produto e front finalmente falam a mesma língua."</span>
                </div>
              </div>
            </div>
          </section>

          {/* PRICING */}
          <section id="pricing" className="py-10">
            <header className="max-w-xl space-y-2">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-slate-400">
                Formatos de entrega
              </p>
              <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                Da base pronta ao acompanhamento contínuo — você escolhe a profundidade.
              </h2>
              <p className="text-sm text-slate-300">
                Use os blocos abaixo como referência e adapte para o seu modelo de
                negócio (projeto, licença, recorrência).
              </p>
            </header>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {/* Plano 1 */}
              <article className="flex flex-col rounded-2xl border border-slate-800/80 bg-slate-950/95 p-4 text-sm text-slate-200">
                <h3 className="text-sm font-semibold text-slate-50">
                  Base FluxPay
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  Para validar rápido, adaptar com seu time e colocar no ar.
                </p>
                <p className="mt-3 text-[0.95rem] font-semibold">
                  R$ —{" "}
                  <span className="text-xs font-normal text-slate-400">
                    / licença de uso
                  </span>
                </p>
                <ul className="mt-3 space-y-1 text-xs text-slate-300">
                  <li>✓ Landing completa em React + Tailwind</li>
                  <li>✓ Seções: hero, benefícios, social proof, jornada, pricing, FAQ</li>
                  <li>✓ Totalmente responsivo</li>
                  <li>✓ Estrutura amigável para dev</li>
                </ul>
                <button className="mt-4 inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-3 py-2 text-xs font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900">
                  Ver código base
                  <span className="ml-1 text-sm">↗</span>
                </button>
              </article>

              {/* Plano destaque */}
              <article className="relative flex flex-col rounded-2xl border border-emerald-500 bg-gradient-to-b from-emerald-500/15 via-slate-950 to-slate-950 p-4 text-sm text-slate-200 shadow-[0_24px_70px_rgba(16,185,129,0.45)]">
                <span className="absolute right-3 top-3 rounded-full border border-emerald-400 bg-slate-950 px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                  Mais escolhido
                </span>
                <h3 className="text-sm font-semibold text-slate-50">
                  Front custom para sua fintech
                </h3>
                <p className="mt-1 text-xs text-slate-200/90">
                  Ideal para produtos que precisam de UX alinhada com marca, risco e
                  estratégia de crescimento.
                </p>
                <p className="mt-3 text-[0.95rem] font-semibold">
                  R$ —{" "}
                  <span className="text-xs font-normal text-slate-200/80">
                    / projeto sob medida
                  </span>
                </p>
                <ul className="mt-3 space-y-1 text-xs text-slate-100/95">
                  <li>✓ Adaptação visual completa à sua identidade</li>
                  <li>✓ Construção de narrativa e hierarquia da página</li>
                  <li>✓ Ajustes finos de UX para onboarding/checkout</li>
                  <li>✓ Hand-off organizado para o time de tecnologia</li>
                </ul>
                <button
                  onClick={() => scrollToSection("cta")}
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-[0_18px_40px_rgba(56,189,248,0.7)] transition hover:shadow-[0_22px_50px_rgba(56,189,248,0.9)]"
                >
                  Conversar sobre um projeto
                  <span className="ml-1">💬</span>
                </button>
              </article>

              {/* Plano 3 */}
              <article className="flex flex-col rounded-2xl border border-slate-800/80 bg-slate-950/95 p-4 text-sm text-slate-200">
                <h3 className="text-sm font-semibold text-slate-50">
                  Parceria contínua de UX
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  Para times que iteram produto, pricing e onboarding o tempo todo.
                </p>
                <p className="mt-3 text-[0.95rem] font-semibold">
                  R$ —{" "}
                  <span className="text-xs font-normal text-slate-400">
                    / mês de acompanhamento
                  </span>
                </p>
                <ul className="mt-3 space-y-1 text-xs text-slate-300">
                  <li>✓ Criação e evolução contínua de telas</li>
                  <li>✓ Experimentação A/B em seções e CTAs</li>
                  <li>✓ Suporte visual para campanhas e novos produtos</li>
                  <li>✓ Revisão contínua de UX baseada em dados</li>
                </ul>
                <button
                  onClick={() => scrollToSection("cta")}
                  className="mt-4 inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-3 py-2 text-xs font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
                >
                  Falar sobre parceria
                  <span className="ml-1 text-sm">→</span>
                </button>
              </article>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="py-10">
            <div className="grid gap-6 lg:grid-cols-[1.1fr,1.1fr]">
              <header className="space-y-2">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Perguntas frequentes
                </p>
                <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                  E se meu time ainda estiver amadurecendo em UX e front?
                </h2>
                <p className="text-sm text-slate-300">
                  A ideia é justamente tirar o peso de começar do zero. Você parte de
                  um front testado, organizado e fácil de manter, sem virar refém de
                  um único dev.
                </p>
              </header>
              <div className="space-y-2">
                {[
                  {
                    q: "Isso funciona se meu produto ainda está em beta?",
                    a: "Sim. Ter uma landing e um fluxo de onboarding bem desenhados ajuda inclusive a validar se a proposta de valor está clara. Você pode ajustar o conteúdo sem precisar refazer o layout.",
                  },
                  {
                    q: "Preciso refazer tudo que tenho hoje?",
                    a: "Não necessariamente. Dá para usar o front como camada para novas campanhas, um fluxo de onboarding paralelo ou uma versão v2 da sua página enquanto você mede resultado.",
                  },
                  {
                    q: "Meu time não domina React + Tailwind, e agora?",
                    a: "O código vem organizado em componentes simples, com classes claras e sem mágicas. Qualquer dev front minimamente experiente consegue manter e evoluir. E você pode contratar só a implementação inicial.",
                  },
                  {
                    q: "Isso não vai deixar meu produto com 'mais uma cara de Stripe clone'?",
                    a: "Não. A referência é de qualidade de experiência, não de copiar layouts. Mantemos o padrão de clareza e fluidez, mas com decisões visuais que respeitam sua marca.",
                  },
                ].map((item, idx) => (
                  <article
                    key={item.q}
                    className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/95 text-sm"
                  >
                    <button
                      className="flex w-full items-center justify-between gap-3 px-3.5 py-2.5 text-left text-slate-100"
                      onClick={() => toggleFaq(idx)}
                    >
                      <span className="text-xs sm:text-[0.85rem]">{item.q}</span>
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-700 text-xs">
                        {openFaq === idx ? "–" : "+"}
                      </span>
                    </button>
                    {openFaq === idx && (
                      <div className="border-t border-slate-800/70 px-3.5 pb-3 pt-2 text-[0.8rem] text-slate-300">
                        {item.a}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CTA FINAL */}
          <section id="cta" className="pt-4">
            <div className="rounded-3xl border border-slate-800/90 bg-gradient-to-b from-indigo-500/15 via-slate-950 to-slate-950 px-5 py-6 text-center shadow-[0_24px_70px_rgba(15,23,42,1)]">
              <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                Vamos dar ao seu produto financeiro a experiência que ele merece?
              </h2>
              <p className="mt-2 text-sm text-slate-200">
                Um front sênior, com cara de fintech global e pensado para conversão,
                já pronto para você plugar no seu stack e iterar em cima.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(56,189,248,0.85)] transition hover:shadow-[0_22px_50px_rgba(56,189,248,1)]">
                  Agendar uma conversa rápida
                  <span>🔥</span>
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/90 px-4 py-2 text-xs font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
                >
                  Ver formatos de entrega
                  <span className="text-sm">→</span>
                </button>
              </div>
              <p className="mt-3 text-[0.75rem] text-slate-400">
                Dica: substitua este bloco por um formulário real (Typeform, HubSpot,
                form próprio, etc.) ou um deep link para o seu WhatsApp/CRM.
              </p>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="border-t border-slate-900/90 py-5 text-[0.75rem] text-slate-500">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <span>
              © {new Date().getFullYear()} FluxPay • UX fintech pensada para escalar
              receita.
            </span>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollToSection("inicio")}
                className="underline decoration-dotted underline-offset-4"
              >
                Voltar ao topo
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="underline decoration-dotted underline-offset-4"
              >
                Ver recursos
              </button>
              <button
                onClick={() => scrollToSection("cta")}
                className="underline decoration-dotted underline-offset-4"
              >
                Falar com o time
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FintechLanding;

