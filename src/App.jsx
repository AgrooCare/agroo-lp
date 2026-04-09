import { useEffect, useRef, useState } from 'react'
import logoAgroo from './assets/4.png'

const IMG = {
  hero:
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80',
  farmerField:
    'https://images.unsplash.com/photo-1595841050596-5d07c832ad7e?auto=format&fit=crop&w=1200&q=80',
  plantation:
    'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=80',
  cropClose:
    'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80',
}

const team = [
  { name: 'Felipe Seiji Ishii', role: 'Co-fundador' },
  { name: 'Matheus Costa Real', role: 'Co-fundador' },
  { name: 'Hadassa Kelly Assis Dos Santos', role: 'Co-fundador' },
  { name: 'Gabriel Rodrigues da Silva', role: 'Co-fundador' },
  { name: 'Ygor Santos de Oliveira', role: 'Co-fundador' },
  { name: 'Davi Roberto Fernandes da Silva', role: 'Co-fundador' },
  { name: 'Allyson Portella', role: 'Coordenador de Marketing' },
  { name: 'Laura Junqueira', role: 'Especialista em Marketing' },
]

function App() {
  const [headerVisible, setHeaderVisible] = useState(false)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        const delta = y - lastScrollY.current
        const threshold = 6

        if (y <= 24) {
          setHeaderVisible(false)
        } else if (delta > threshold) {
          setHeaderVisible(true)
        } else if (delta < -threshold) {
          setHeaderVisible(false)
        }

        lastScrollY.current = y
        ticking.current = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 antialiased">
      <header
        className={`shadow-lg fixed inset-x-0 top-0 z-50 border-b border-emerald-900/10 bg-stone-50/95 backdrop-blur-md transition-transform duration-300 ease-out ${
          headerVisible ? 'translate-y-0' : '-translate-y-full pointer-events-none'
        }`}
        aria-hidden={!headerVisible}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
          <a href="#topo" className="flex shrink-0 items-center gap-3">
            <img
              src={logoAgroo}
              alt="AgrooCare"
              className="h-10 w-auto sm:h-10 absolute"
              width={5}
              height={5}
            />
          </a>
          <nav className="flex flex-wrap items-center justify-end gap-2 text-sm font-medium text-emerald-900/90 sm:gap-6">
            <a href="#solucoes" className="hover:text-emerald-700">
              Soluções
            </a>
            <a href="#diferencial" className="hover:text-emerald-700">
              Diferencial
            </a>
            <a href="#equipe" className="hover:text-emerald-700">
              Equipe
            </a>
            <a
              href="#contato"
              className="rounded-full bg-emerald-700 px-4 py-2 text-white shadow-sm hover:bg-emerald-800"
            >
              Fale conosco
            </a>
          </nav>
        </div>
      </header>

      <main id="topo">
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${IMG.hero})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/85 via-emerald-900/75 to-stone-900/80" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:py-28">
            <div className="flex-1 space-y-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-200/90">
                Tecnologia a serviço do campo
              </p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                AgrooCare
              </h1>
              <p className="max-w-xl text-lg text-emerald-50/95 sm:text-xl">
                Detecção preditiva de doenças e inteligência para irrigação e
                adubação — com base em umidade, temperatura, sol e chuva, além
                de análise por imagem para orientar o produtor na hora certa.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#solucoes"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-900 shadow-lg hover:bg-emerald-50"
                >
                  Conheça a plataforma
                </a>
                <a
                  href="#diferencial"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Por que somos diferentes
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="solucoes"
          className="scroll-mt-24 border-b border-stone-200/80 bg-white py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
                O que a AgrooCare entrega
              </h2>
              <p className="mt-4 text-lg text-stone-600">
                Monitoramento ambiental, previsão do tempo e visão computacional
                trabalhando juntos para antecipar problemas e ajustar manejo.
              </p>
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <article className="rounded-2xl border border-stone-200 bg-stone-50/80 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-emerald-900">
                    Detecção preditiva por ambiente
                  </h3>
                  <p className="mt-2 text-stone-600">
                    Cruzamos umidade, temperatura, exposição ao sol e chuva para
                    antecipar doenças e sugerir ajustes de irrigação e adubação
                    — ou orientar o produtor a agir antes que o problema
                    escale.
                  </p>
                </article>
                <article className="rounded-2xl border border-stone-200 bg-stone-50/80 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-emerald-900">
                    Detecção de doenças por imagem
                  </h3>
                  <p className="mt-2 text-stone-600">
                    Identificação assistida por imagem para apoiar o controle de
                    pragas e doenças, com base visual no que está acontecendo no
                    talhão.
                  </p>
                </article>
                <article className="rounded-2xl border border-stone-200 bg-stone-50/80 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-emerald-900">
                    Irrigação e adubação inteligentes
                  </h3>
                  <p className="mt-2 text-stone-600">
                    Irrigação e adubação respondem ao clima em tempo real: sol,
                    chuva ou céu nublado, umidade do solo e previsões — incluindo
                    cancelar irrigação quando a chuva está chegando e adubação
                    preditiva alinhada ao tempo.
                  </p>
                </article>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <figure className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={IMG.farmerField}
                    alt="Agricultor em plantação"
                    className="h-full min-h-[220px] w-full object-cover"
                    loading="lazy"
                  />
                  <figcaption className="sr-only">
                    Fotografia de agricultor em campo — Unsplash
                  </figcaption>
                </figure>
                <figure className="overflow-hidden rounded-2xl shadow-lg sm:col-span-2 lg:col-span-1 lg:row-span-1">
                  <img
                    src={IMG.plantation}
                    alt="Plantio em fileiras"
                    className="h-full min-h-[220px] w-full object-cover"
                    loading="lazy"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section
          id="diferencial"
          className="scroll-mt-24 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <figure className="order-2 overflow-hidden rounded-2xl shadow-xl lg:order-1">
                <img
                  src={IMG.cropClose}
                  alt="Detalhe de cultivo e vegetação"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </figure>
              <div className="order-1 space-y-6 lg:order-2">
                <h2 className="text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
                  Nosso diferencial
                </h2>
                <p className="text-lg text-stone-600">
                  Irrigação e adubação influenciadas pela temperatura e pelas
                  condições do céu — sol, chuva ou nublado — além da umidade do
                  solo e de adubação preditiva com base em previsões do tempo.
                </p>
                <div className="rounded-2xl border-l-4 border-emerald-600 bg-emerald-50/80 p-6">
                  <p className="font-semibold text-emerald-950">
                    O ponto forte da AgrooCare
                  </p>
                  <p className="mt-2 text-stone-700">
                    Melhor performance ao saber exatamente qual doença a planta
                    apresenta, elevando a assertividade da fertirrigação e do
                    manejo como um todo — inclusive ajuste de adubação conforme
                    o diagnóstico das doenças.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="equipe"
          className="scroll-mt-24 border-t border-stone-200 bg-white py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-center text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
              Equipe
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-stone-600">
              Co-fundadores e marketing unidos para levar inovação ao agronegócio
              brasileiro.
            </p>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((person) => (
                <li
                  key={person.name}
                  className="rounded-2xl border border-stone-200 bg-stone-50/50 px-5 py-4 text-center shadow-sm"
                >
                  <p className="font-semibold text-emerald-950">{person.name}</p>
                  <p className="mt-1 text-sm text-stone-600">{person.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="contato"
          className="scroll-mt-24 bg-emerald-950 py-16 text-white sm:py-20"
        >
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Pronto para cuidar da lavoura com dados?
            </h2>
            <p className="mt-4 text-lg text-emerald-100/95">
              Entre em contato com a AgrooCare e descubra como antecipar
              doenças e otimizar irrigação e adubação no seu plantio.
            </p>
            <p className="mt-8 text-sm text-emerald-200/80">
              Imagens de agricultores e plantações: banco Unsplash (uso sob
              licença Unsplash).
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-emerald-900/30 bg-stone-900 py-8 text-center text-sm text-stone-400">
        <p>© {new Date().getFullYear()} AgrooCare. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App
