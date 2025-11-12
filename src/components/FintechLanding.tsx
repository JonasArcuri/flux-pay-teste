import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-[#050816]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          <div className="text-lg font-semibold tracking-tight">
            <span className="text-white">studio</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#sobre" className="hover:text-white transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="hover:text-white transition-colors">
              Serviços
            </a>
            <a href="#processo" className="hover:text-white transition-colors">
              Processo
            </a>
            <a href="#casos" className="hover:text-white transition-colors">
              Casos
            </a>
            <a href="#contato" className="hover:text-white transition-colors">
              Contato
            </a>
            <a
              href="#contato"
              className="rounded-full bg-[#6366F1] px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
            >
              Agendar conversa
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pt-24 md:pt-28">
        {/* Hero */}
        <section
          id="hero"
          className="flex flex-col items-start gap-10 pb-20 pt-10 md:flex-row md:items-center md:justify-between"
        >
          <div className="max-w-xl space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#22C55E]">
              Studio de tecnologia
            </p>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Tecnologia clara, previsível e escalável para o seu produto.
            </h1>
            <p className="text-base text-white/70 md:text-lg">
              Somos um studio de tecnologia que transforma ideia em produto
              real — com arquitetura bem pensada, comunicação transparente e
              entregas que não viram um caos no meio do caminho.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-full bg-[#6366F1] px-6 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105"
              >
                Agendar conversa
              </a>
              <a
                href="#casos"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-2.5 text-sm font-medium text-white/80 transition-colors hover:border-[#6366F1] hover:text-white"
              >
                Ver projetos
              </a>
            </div>
            <p className="text-xs text-white/50">
              Projetos entregues para startups e empresas em crescimento.
            </p>
          </div>

          {/* Mockup simples */}
          <div className="mt-4 w-full max-w-sm md:mt-0">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-[#6366F1]/20 p-4">
              <div className="mb-3 flex items-center justify-between text-xs text-white/50">
                <span>Visão de produto</span>
                <span>v1.0</span>
              </div>
              <div className="space-y-3">
                <div className="rounded-2xl bg-[#050816] p-3">
                  <p className="text-xs text-white/60">
                    Alinhamento de visão
                  </p>
                  <p className="text-sm font-medium">
                    Menos ruído, mais clareza no que precisa ser construído.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-2xl border border-white/10 bg-[#050816] p-3">
                    <p className="text-white/60">Sprints</p>
                    <p className="text-sm font-semibold text-[#22C55E]">
                      Incrementais
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-[#050816] p-3">
                    <p className="text-white/60">Risco</p>
                    <p className="text-sm font-semibold text-[#6366F1]">
                      Reduzido
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-dashed border-white/15 p-3 text-xs text-white/60">
                  Nada de promessas vagas. Cada entrega tem dono, prazo e
                  critério de pronto.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="space-y-4 pb-16">
          <h2 className="text-xl font-semibold md:text-2xl">
            Quem somos por trás do código
          </h2>
          <p className="max-w-2xl text-sm text-white/70 md:text-base">
            A gente sabe que, para um founder, tecnologia não é "tela bonita":
            é risco, tempo e dinheiro na mesa. Por isso, trabalhamos com um
            processo direto, sem promessas vazias nem escopo nebuloso. Entramos
            no detalhe do seu modelo de negócio, desenhamos a arquitetura certa
            e entregamos produto que aguenta crescer.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Previsibilidade",
                desc: "Escopo, marcos e critérios de pronto definidos antes de codar.",
              },
              {
                title: "Transparência",
                desc: "Acompanhamento contínuo, feedbacks frequentes e visibilidade real.",
              },
              {
                title: "Foco em produto",
                desc: "Cada tela nasce de um fluxo de negócio, não de um template genérico.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="mt-2 text-xs text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="space-y-4 pb-16">
          <h2 className="text-xl font-semibold md:text-2xl">O que construímos</h2>
          <p className="max-w-2xl text-sm text-white/70 md:text-base">
            Do primeiro MVP ao sistema que segura o crescimento da operação,
            entregamos tecnologia alinhada com o estágio do seu negócio.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {/* Card service */}
            <ServiceCard
              title="Aplicativos mobile"
              body="Apps focados em experiência e retenção, do onboarding ao último toque na tela."
              problem="Apps confusos e travados espantam o usuário e queimam seu CAC."
              value="Experiências fluidas e métricas melhores de engajamento e retorno."
            />

            <ServiceCard
              title="Desenvolvimento web"
              body="Sites, painéis e plataformas web com performance, clareza e manutenção simples."
              problem="Sites lentos derrubam credibilidade e complicam suas campanhas."
              value="Uma presença digital que transmite confiança e sustenta aquisição."
            />

            <ServiceCard
              title="ERP e sistemas internos"
              body="Ferramentas internas e ERPs desenhados para o seu fluxo real, não para um manual genérico."
              problem="Planilhas e sistemas engessados criam retrabalho e gargalos diários."
              value="Controles claros, dados confiáveis e uma operação mais leve."
            />

            <ServiceCard
              title="Plataformas sob medida & integrações"
              body="Plataformas customizadas e integrações que unem o seu stack em um fluxo único."
              problem="Sistemas que não conversam entre si geram dados duplicados e processos quebrados."
              value="Menos atrito operacional e um produto pronto para escalar sem remendos."
            />
          </div>
        </section>

        {/* Processo */}
        <section id="processo" className="space-y-4 pb-16">
          <h2 className="text-xl font-semibold md:text-2xl">
            Como trabalhamos (sem surpresa no meio do caminho)
          </h2>
          <p className="max-w-2xl text-sm text-white/70 md:text-base">
            Um fluxo pensado para reduzir risco, evitar retrabalho e deixar
            muito claro onde o seu produto está em cada etapa.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-5">
            {[
              {
                step: "01",
                title: "Alinhamento",
                desc: "Contexto, objetivos, restrições e prioridades na mesma página.",
              },
              {
                step: "02",
                title: "Arquitetura",
                desc: "Fluxos, jornadas e dados desenhados antes do código.",
              },
              {
                step: "03",
                title: "Protótipo",
                desc: "Protótipo navegável para validar expectativas cedo.",
              },
              {
                step: "04",
                title: "Desenvolvimento",
                desc: "Sprints com entregas testáveis e critérios claros.",
              },
              {
                step: "05",
                title: "Evolução",
                desc: "Melhorias guiadas por uso real e dados.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <span className="text-xs font-medium text-[#22C55E]">
                  {item.step}
                </span>
                <h3 className="mt-1 text-sm font-semibold">{item.title}</h3>
                <p className="mt-2 text-xs text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/60">
            Nada de promessas vagas. Cada etapa tem dono, prazo e critério
            objetivo de pronto.
          </p>
        </section>

        {/* Casos */}
        <section id="casos" className="space-y-4 pb-16">
          <h2 className="text-xl font-semibold md:text-2xl">Casos e resultados</h2>
          <p className="max-w-2xl text-sm text-white/70 md:text-base">
            Histórias de produto onde saímos do "precisamos de um sistema" para
            "isso está rodando e dando resultado".
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <CaseCard
              context="Startup SaaS em tração com operação em planilhas."
              problem="Time perdia horas conciliando dados e atualizando relatórios."
              solution="Plataforma web + módulo interno com painéis em tempo real."
              result="Redução significativa de retrabalho e ganho de clareza sobre métricas chave."
            />

            <CaseCard
              context="Negócio B2C com app antigo e baixa retenção."
              problem="Usuários instalavam, testavam e não voltavam."
              solution="Redesenho da jornada mobile, onboarding simplificado e área logada objetiva."
              result="Aumento consistente de uso recorrente e melhora nas avaliações do app."
            />

            <CaseCard
              context="Empresa tradicional com múltiplos sistemas desconectados."
              problem="Dados desencontrados e retrabalho entre equipes."
              solution="Camada de integrações + painel unificado executivo."
              result="Processos mais alinhados e decisões baseadas em dados confiáveis."
            />
          </div>
        </section>

        {/* Prova social */}
        <section className="space-y-4 pb-16">
          <h2 className="text-xl font-semibold md:text-2xl">
            Confiança é construída em entrega
          </h2>
          <p className="max-w-2xl text-sm text-white/70 md:text-base">
            Já colaboramos com empresas em diferentes estágios — de founders no
            primeiro MVP a operações em escala.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-white/40">
            <span>[Logo Cliente 1]</span>
            <span>[Logo Cliente 2]</span>
            <span>[Logo Cliente 3]</span>
            <span>[Logo Cliente 4]</span>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <TestimonialCard
              quote="Eu sabia o que queria em termos de resultado, mas não em termos técnicos. Eles traduziram a visão do negócio para produto, sem me jogar buzzword."
              name="Founder de SaaS B2B"
            />

            <TestimonialCard
              quote="A maior diferença foi ter clareza do escopo e visibilidade a cada entrega. Eu não precisei torcer para dar certo, eu acompanhava o progresso."
              name="CEO de operação de serviços"
            />
          </div>
        </section>

        {/* CTA final / contato */}
        <section id="contato" className="space-y-4 pb-20">
          <h2 className="text-xl font-semibold md:text-2xl">
            Vamos tirar o seu produto do papel — com clareza
          </h2>
          <p className="max-w-2xl text-sm text-white/70 md:text-base">
            Se você está entre "tenho a ideia" e "preciso que isso rode de
            verdade", a próxima etapa é uma conversa curta e direta. Sem
            compromisso, sem empurrão de venda — só entendimento de contexto.
          </p>
          <form className="mt-4 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs text-white/70" htmlFor="nome">
                Nome
              </label>
              <input
                id="nome"
                className="w-full rounded-lg border border-white/10 bg-[#050816] px-3 py-2 text-sm outline-none transition-colors focus:border-[#6366F1]"
                placeholder="Seu nome"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-white/70" htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                className="w-full rounded-lg border border-white/10 bg-[#050816] px-3 py-2 text-sm outline-none transition-colors focus:border-[#6366F1]"
                placeholder="seu@email.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-white/70" htmlFor="empresa">
                Empresa
              </label>
              <input
                id="empresa"
                className="w-full rounded-lg border border-white/10 bg-[#050816] px-3 py-2 text-sm outline-none transition-colors focus:border-[#6366F1]"
                placeholder="Nome da empresa"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-white/70" htmlFor="estagio">
                Estágio do projeto
              </label>
              <select
                id="estagio"
                className="w-full rounded-lg border border-white/10 bg-[#050816] px-3 py-2 text-sm outline-none transition-colors focus:border-[#6366F1]"
              >
                <option>Ideia</option>
                <option>MVP em validação</option>
                <option>Produto rodando</option>
                <option>Escala / Refatoração</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs text-white/70" htmlFor="mensagem">
                Conte um pouco do que você precisa
              </label>
              <textarea
                id="mensagem"
                rows={4}
                className="w-full rounded-lg border border-white/10 bg-[#050816] px-3 py-2 text-sm outline-none transition-colors focus:border-[#6366F1]"
                placeholder="Contexto rápido, objetivos e o que você espera da tecnologia."
              />
            </div>
            <div className="md:col-span-2 flex items-center justify-between">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-[#6366F1] px-6 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105"
              >
                Enviar / Agendar conversa
              </button>
              <p className="text-xs text-white/50">
                Recebemos seu contato e respondemos em breve com próximos passos.
              </p>
            </div>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050816] py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-4 text-xs text-white/50 md:flex-row md:items-center">
          <span>studio — tecnologia clara para produtos que precisam funcionar.</span>
          <span>contato@studio.com · © {new Date().getFullYear()} studio</span>
        </div>
      </footer>
    </div>
  );
};

type ServiceCardProps = {
  title: string;
  body: string;
  problem: string;
  value: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  body,
  problem,
  value,
}) => (
  <div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-4 text-sm transition-transform hover:-translate-y-1">
    <h3 className="text-sm font-semibold">{title}</h3>
    <p className="mt-2 text-xs text-white/70">{body}</p>
    <div className="mt-3 space-y-1 text-xs text-white/60">
      <p>
        <span className="font-semibold text-white">Problema: </span>
        {problem}
      </p>
      <p>
        <span className="font-semibold text-white">Valor: </span>
        {value}
      </p>
    </div>
  </div>
);

type CaseCardProps = {
  context: string;
  problem: string;
  solution: string;
  result: string;
};

const CaseCard: React.FC<CaseCardProps> = ({
  context,
  problem,
  solution,
  result,
}) => (
  <div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/70">
    <p>
      <span className="font-semibold text-white">Contexto: </span>
      {context}
    </p>
    <p className="mt-1">
      <span className="font-semibold text-white">Problema: </span>
      {problem}
    </p>
    <p className="mt-1">
      <span className="font-semibold text-white">Solução: </span>
      {solution}
    </p>
    <p className="mt-1">
      <span className="font-semibold text-white">Resultado: </span>
      {result}
    </p>
  </div>
);

type TestimonialCardProps = {
  quote: string;
  name: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name }) => (
  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/70">
    <p>"{quote}"</p>
    <p className="mt-3 font-medium text-white">{name}</p>
  </div>
);

export default LandingPage;
