import { useEffect, useRef, useState } from 'react'
import logoAgroo from './assets/4.png'
import crop from './assets/crop.png'
import planta from './assets/planta_sistema.png'

const IMG = {
  hero:
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80',
  farmerField:
    'https://images.unsplash.com/photo-1595841050596-5d07c832ad7e?auto=format&fit=crop&w=1200&q=80',
  plantation:
    'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=80',
}

const team = [
  { name: 'Felipe Seiji Ishii', role: 'Co-fundador', photo: 'https://media.licdn.com/dms/image/v2/D4D03AQF_jvDvBugitg/profile-displayphoto-scale_200_200/B4DZgP_1PkGkAg-/0/1752615055300?e=1777507200&v=beta&t=cnVrvJPOPPPM111B5QeyHvCTvaPZyStS2uH66ptWius' },
  { name: 'Matheus Costa Real', role: 'Co-fundador', photo: 'https://...' },
  { name: 'Hadassa Kelly Assis Dos Santos', role: 'Co-fundador', photo: 'https://...' },
  { name: 'Gabriel Rodrigues da Silva', role: 'Co-fundador', photo: 'https://media.licdn.com/dms/image/v2/D4D03AQFQ7tcQuEvt3g/profile-displayphoto-scale_200_200/B4DZ1qQLI6KoAc-/0/1775604120609?e=1777507200&v=beta&t=3hyHGjfS-xuUYclP5TNE-Zvuv2EJIjqaMTYYXBLL6Rc' },
  { name: 'Ygor Santos de Oliveira', role: 'Co-fundador', photo: 'https://...' },
  { name: 'Davi Roberto Fernandes da Silva', role: 'Co-fundador', photo: 'https://...' },
  { name: 'Allyson Portella', role: 'Coordenador de Marketing', photo: 'https://...' },
  { name: 'Laura Junqueira', role: 'Especialista em Marketing', photo: 'https://...' },
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
        className={`shadow-lg fixed inset-x-0 top-0 z-50 border-b border-emerald-900/10 bg-stone-50/95 backdrop-blur-md transition-transform duration-300 ease-out ${headerVisible ? 'translate-y-0' : '-translate-y-full pointer-events-none'
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
        <section className="relative overflow-hidden lg:h-screen h-120">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${IMG.hero})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/85 via-emerald-900/75 to-stone-900/80" />

          <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-0">

            <div className="flex-1 space-y-5 text-white text-center lg:text-left">

              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-200/90">
                Tecnologia a serviço do campo
              </p>

              <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                AgrooCare
              </h1>

              <p className="mx-auto max-w-md text-base text-emerald-50/95 sm:text-lg lg:mx-0 lg:max-w-xl">
                Detecção preditiva de doenças e inteligência para irrigação e
                adubação — com base em umidade, temperatura, sol e chuva, além
                de análise por imagem para orientar o produtor na hora certa.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#solucoes"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-900 shadow-lg hover:bg-emerald-50"
                >
                  Conheça a plataforma
                </a>

                <a
                  href="#diferencial"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Por que somos diferentes
                </a>
              </div>
            </div>

          </div>
        </section>

        <section
          id="Planta"
          className="scroll-mt-24 border-b border-stone-200/80 bg-white py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
                A Inteligência Artifical chegou no campo
              </h2>
              <p className="mt-4 text-lg text-stone-600">
                Usando o monitoramento ambiental, previsão do tempo e visão computacional
                trabalhando juntos para antecipar problemas e ajustar manejo de sua plantação.
              </p>
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <img src={planta} alt="Planta do sistema" />
              </div>
              <div className="flex flex-col items-center gap-2 text-lg lg:w-2/3 justify-center ">
                <span>
                  O <span className='font-bold'>AgrooCare</span> vai além do sensor de solo. Ele atua como um agrônomo digital 24/7, utilizando dados ambientais para decisões autônomas:
                  Gestão Preditiva de Irrigação e Clima
                </span>
                <span>
                  Por que gastar água se vai chover? O sistema cruza previsões meteorológicas com a umidade real do solo para cancelar ou ajustar ciclos de irrigação automaticamente. Temperatura, incidência solar e umidade relativa não são apenas números, são parâmetros que moldam a entrega exata do que a planta precisa.
                </span>
                <button type='button' className='w-80 mt-4 p-2 rounded-2xl text-white bg-emerald-900 transition-all cursor-pointer hover:scale-105'>
                  Quero conhecer a solução
                </button>
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

            <div className="mt-14 grid gap-6 sm:grid-cols-3">

              <article className="relative overflow-hidden rounded-3xl border border-stone-200 bg-gradient-to-b from-emerald-50 to-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-emerald-900 ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9V3m0 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 6v6m0 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-6-3H3m3 0a6 6 0 1 0 12 0 6 6 0 0 0-12 0zm15 0h-3" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-emerald-950">
                  Detecção preditiva por ambiente
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  Cruzamos umidade, temperatura, exposição ao sol e chuva para
                  antecipar doenças e sugerir ajustes de irrigação e adubação —
                  orientando o produtor antes que o problema escale.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['Umidade', 'Temperatura', 'Chuva'].map((tag) => (
                    <span key={tag} className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-0.5 text-xs font-medium text-emerald-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>

              <article className="relative overflow-hidden rounded-3xl bg-emerald-900 p-7 text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Detecção de doenças por imagem
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-emerald-100/90">
                  Identificação assistida por visão computacional para apoiar o
                  controle de pragas e doenças com base visual no que está
                  acontecendo no talhão.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['IA', 'Visão Computacional', 'Pragas'].map((tag) => (
                    <span key={tag} className="rounded-full border border-white/20 bg-white/10 px-3 py-0.5 text-xs font-medium text-emerald-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>

              <article className="relative overflow-hidden rounded-3xl border border-stone-200 bg-gradient-to-b from-emerald-50 to-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-emerald-900 ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C12 3 5.25 10.5 5.25 14.25a6.75 6.75 0 0 0 13.5 0C18.75 10.5 12 3 12 3Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-emerald-950">
                  Irrigação e adubação inteligentes
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  Irrigação e adubação respondem ao clima em tempo real — incluindo
                  cancelar ciclos quando a chuva está chegando e adubação preditiva
                  alinhada às previsões do tempo.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['Irrigação', 'Adubação', 'Clima'].map((tag) => (
                    <span key={tag} className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-0.5 text-xs font-medium text-emerald-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>

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
                  src={crop}
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
                  condições do céu sol, chuva ou nublado além da umidade do
                  solo e de adubação preditiva com base em previsões do tempo.
                </p>
                <div className="rounded-2xl border-l-4 border-emerald-600 bg-emerald-50/80 p-6">
                  <p className="font-semibold text-emerald-950">
                    O ponto forte da AgrooCare
                  </p>
                  <p className="mt-2 text-stone-700">
                    Melhor performance ao saber exatamente qual doença a planta
                    apresenta, elevando a assertividade da fertirrigação e do
                    manejo como um todo inclusive ajuste de adubação conforme
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
              Co-fundadores e marketing unidos para levar inovação ao agronegócio brasileiro.
            </p>

            <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((person) => {
                const initials = person.name
                  .split(' ')
                  .filter((_, i, arr) => i === 0 || i === arr.length - 1)
                  .map((n) => n[0])
                  .join('')

                return (
                  <li
                    key={person.name}
                    className="group flex flex-col items-center rounded-2xl border border-stone-200 bg-stone-50/60 px-5 py-8 text-center shadow-sm transition hover:border-emerald-200 hover:shadow-md hover:-translate-y-1"
                  >
                    {/* Avatar */}
                    <div className="relative mb-4 h-20 w-20 shrink-0">
                      {person.photo ? (
                        <img
                          src={person.photo}
                          alt={person.name}
                          className="h-full w-full rounded-full object-cover ring-2 ring-emerald-100 ring-offset-2"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                            e.currentTarget.nextElementSibling?.removeAttribute('style')
                          }}
                        />
                      ) : null}
                      <div
                        className="flex h-full w-full items-center justify-center rounded-full bg-emerald-900 text-lg font-bold text-white ring-2 ring-emerald-100 ring-offset-2"
                        style={person.photo ? { display: 'none' } : undefined}
                      >
                        {initials}
                      </div>
                    </div>

                    <p className="font-semibold text-emerald-950 leading-snug">{person.name}</p>
                    <span className="mt-1.5 inline-block rounded-full bg-emerald-50 px-3 py-0.5 text-xs font-medium text-emerald-700 border border-emerald-100">
                      {person.role}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>


      </main>


      <footer className="border-t border-emerald-900/30 bg-emerald-950 py-12 text-stone-400">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

            <div className="space-y-3 lg:col-span-2">
              <img src={logoAgroo} alt="AgrooCare" className="h-10 w-auto brightness-0 invert opacity-80" />
              <p className="text-sm leading-relaxed text-stone-300 max-w-xs">
                Tecnologia a serviço do campo. Detecção preditiva de doenças e inteligência para irrigação e adubação.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-700 text-stone-400 transition hover:border-emerald-600 hover:text-emerald-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.053.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.856.601 3.698 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.856-.085 3.698-.601 5.038-1.942 1.341-1.34 1.857-3.182 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.085-1.856-.601-3.698-1.942-5.038C20.646.673 18.804.157 16.948.072 15.668.014 15.259 0 12 0z" />
                    <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-700 text-stone-400 transition hover:border-emerald-600 hover:text-emerald-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/55"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-700 text-stone-400 transition hover:border-emerald-600 hover:text-emerald-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-300">Navegação</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Início', href: '#topo' },
                  { label: 'Soluções', href: '#solucoes' },
                  { label: 'Diferencial', href: '#diferencial' },
                  { label: 'Equipe', href: '#equipe' },
                  { label: 'Contato', href: '#contato' },
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="transition hover:text-emerald-400">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-500">Contato</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:contato@agroocare.com.br"
                    className="break-all transition hover:text-emerald-400"
                  >
                    contato@agroocare.com.br
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/55"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-emerald-400"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

          </div>


          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-stone-800 pt-6 text-xs text-stone-600 sm:flex-row">
            <p>© {new Date().getFullYear()} AgrooCare. Todos os direitos reservados.</p>
            <p>Imagens: Unsplash (licença Unsplash)</p>
          </div>
        </div>
      </footer >
    </div >
  )
}

export default App
