import { useState, useEffect, useRef } from 'react'
import { Droplets, TrendingUp, ShieldAlert, Radio } from 'lucide-react'


const metrics = [
    {
        value: '-30%',
        label: 'Uso de água',
        description: 'Irrigação inteligente que cancela ciclos quando a chuva está chegando.',
        Icon: Droplets,
        highlight: false,
    },
    {
        value: '+20%',
        label: 'Produtividade',
        description: 'Manejo preciso baseado em dados reais do solo e do clima.',
        Icon: TrendingUp,
        highlight: true,
    },
    {
        value: '-40%',
        label: 'Perdas por doenças',
        description: 'Detecção precoce por imagem antes que o problema se alastre.',
        Icon: ShieldAlert,
        highlight: false,
    },
    {
        value: '24/7',
        label: 'Monitoramento',
        description: 'Sensores ativos o tempo todo, com alertas em tempo real no seu celular.',
        Icon: Radio,
        highlight: false,
    },
]

function useInView(threshold = 0.15) {
    const ref = useRef(null)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                    observer.disconnect()
                }
            },
            { threshold }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [threshold])

    return { ref, inView }
}

function MetricCard({ metric, index, inView }) {
    const [hovered, setHovered] = useState(false)
    const { Icon } = metric

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                transitionDelay: `${index * 100}ms`,
                opacity: inView ? 1 : 0,
                transform: inView
                    ? hovered ? 'translateY(-8px)' : 'translateY(0)'
                    : 'translateY(28px)',
                transition: 'opacity 0.55s ease, transform 0.35s ease',
                boxShadow: hovered
                    ? '0 20px 40px -12px rgba(0,0,0,0.18)'
                    : '0 1px 3px rgba(0,0,0,0.06)',
            }}
            className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border p-7
        ${metric.highlight
                    ? 'border-emerald-500/40 bg-emerald-900 text-white'
                    : 'border-stone-200 bg-white text-stone-900'
                }
      `}
        >
            {metric.highlight && (
                <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-emerald-500/20 blur-2xl" />
            )}

            <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl
          ${metric.highlight ? 'bg-white/10 text-emerald-300' : 'bg-emerald-50 text-emerald-700'}
        `}
            >
                <Icon className="h-6 w-6" />
            </div>

            <p
                className={`text-5xl font-extrabold tracking-tight leading-none
          ${metric.highlight ? 'text-white' : 'text-emerald-900'}
        `}
            >
                {metric.value}
            </p>

            <p
                className={`mt-2 text-base font-semibold
          ${metric.highlight ? 'text-emerald-200' : 'text-stone-800'}
        `}
            >
                {metric.label}
            </p>

            <p
                className={`mt-3 text-sm leading-relaxed
          ${metric.highlight ? 'text-emerald-100/80' : 'text-stone-500'}
        `}
            >
                {metric.description}
            </p>

            <div
                style={{
                    width: hovered ? '5rem' : '3rem',
                    transition: 'width 0.3s ease',
                }}
                className={`mt-6 h-1 rounded-full
          ${metric.highlight ? 'bg-emerald-400' : 'bg-emerald-200'}
        `}
            />
        </div>
    )
}

export function ResultSection() {
    const { ref, inView } = useInView()

    return (
        <section
            id="resultados"
            className="scroll-mt-24 relative overflow-hidden bg-emerald-950 py-20 sm:py-28"
        >
            <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-800/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-emerald-700/20 blur-3xl" />

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

                <div className="mx-auto max-w-3xl text-center">

                    <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                        Mais produtividade.{' '}
                        <span className="text-emerald-400">Menos desperdício.</span>
                    </h2>

                    <p className="mt-5 text-lg leading-relaxed text-emerald-100/70">
                        Produtores que usam o AgrooCare colhem resultados mensuráveis já no
                        primeiro ciclo. Veja o que a tecnologia entrega na prática.
                    </p>
                </div>

                <div
                    ref={ref}
                    className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {metrics.map((metric, i) => (
                        <MetricCard key={metric.label} metric={metric} index={i} inView={inView} />
                    ))}
                </div>
                <div
                    style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'translateY(0)' : 'translateY(16px)',
                        transition: 'opacity 0.6s ease 0.45s, transform 0.6s ease 0.45s',
                    }}
                    className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-emerald-800/60 bg-emerald-900/50 px-6 py-5 backdrop-blur-sm sm:flex-row"
                >
                    <p className="text-sm text-emerald-200/80 text-center sm:text-left">
                        <b>Importante</b>: Dados baseados em resultados médios de produtores que utilizam o AgrooCare.
                        Resultados individuais podem variar conforme cultura e região.
                    </p>
                </div>

                <div
                    style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'translateY(0)' : 'translateY(16px)',
                        transition: 'opacity 0.6s ease 0.55s, transform 0.6s ease 0.55s',
                    }}
                    className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                >
                    <a
                        href="#contato"
                        className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-3.5 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-900/40 transition hover:bg-emerald-400 hover:-translate-y-0.5"
                    >
                        Quero esses resultados
                    </a>
                    <a
                        href="#como-funciona"
                        className="inline-flex items-center justify-center rounded-full border border-emerald-700/60 px-8 py-3.5 text-sm font-semibold text-emerald-300 transition hover:border-emerald-500 hover:text-emerald-200"
                    >
                        Ver como funciona →
                    </a>
                </div>

            </div>
        </section>
    )
}