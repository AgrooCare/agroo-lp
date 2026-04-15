import { useState } from 'react'
import { Cpu, CloudRain, Zap, Smartphone } from 'lucide-react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
const steps = [
    {
        id: 1,
        title: 'Sensores coletam dados',
        description:
            'Sensores instalados na lavoura capturam umidade do solo, temperatura, luminosidade e precipitação em tempo real, 24 horas por dia.',
        icon: <Cpu className="h-5 w-5" />,
        image: img1,
        tags: ['Umidade', 'Temperatura', 'Chuva'],
    },
    {
        id: 2,
        title: 'IA analisa clima e solo',
        description:
            'Nossa inteligência artificial cruza os dados dos sensores com previsões meteorológicas e histórico da cultura para identificar riscos e oportunidades.',
        icon: <CloudRain className="h-5 w-5" />,
        image: img2,
        tags: ['Machine Learning', 'Previsão', 'Análise'],
    },
    {
        id: 3,
        title: 'Sistema toma decisões automáticas',
        description:
            'Com base na análise, o sistema aciona ou cancela irrigação, ajusta adubação e emite alertas de doenças — sem precisar de intervenção manual.',
        icon: <Zap className="h-5 w-5" />,
        image: img3,
        tags: ['Automação', 'Irrigação', 'Adubação'],
    },
    {
        id: 4,
        title: 'Produtor acompanha via app',
        description:
            'Tudo visível no celular: histórico de ações, alertas, relatórios de economia e recomendações do agrônomo digital — onde você estiver.',
        icon: <Smartphone className="h-5 w-5" />,
        image: img4,
        tags: ['App', 'Relatórios', 'Alertas'],
    },
]

export function HowItWorksSection() {
    const [activeStep, setActiveStep] = useState(0)

    const current = steps[activeStep]

    return (
        <section
            id="como-funciona"
            className="scroll-mt-24 border-b border-stone-200/80 bg-white py-16 sm:py-24"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">

                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-700">
                        Como funciona
                    </span>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
                        Do sensor ao celular em 4 etapas
                    </h2>
                    <p className="mt-4 text-lg text-stone-600">
                        Tecnologia complexa, operação simples. Veja como o AgrooCare trabalha por você.
                    </p>
                </div>

                <div className="mt-14 hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">

                    <div className="flex flex-col gap-3">
                        {steps.map((step, i) => (
                            <button
                                key={step.id}
                                onClick={() => setActiveStep(i)}
                                className={`group flex items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${activeStep === i
                                    ? 'border-emerald-300 bg-emerald-50 shadow-md shadow-emerald-100'
                                    : 'border-stone-200 bg-white hover:border-emerald-200 hover:bg-emerald-50/40'
                                    }`}
                            >
                                <div
                                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 ${activeStep === i
                                        ? 'bg-emerald-900 text-white'
                                        : 'bg-stone-100 text-stone-500 group-hover:bg-emerald-100 group-hover:text-emerald-700'
                                        }`}
                                >
                                    {step.icon}
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <span
                                            className={`text-xs font-bold uppercase tracking-widest ${activeStep === i ? 'text-emerald-600' : 'text-stone-400'
                                                }`}
                                        >
                                            Etapa {step.id}
                                        </span>
                                    </div>
                                    <p
                                        className={`mt-0.5 font-semibold leading-snug ${activeStep === i ? 'text-emerald-950' : 'text-stone-700'
                                            }`}
                                    >
                                        {step.title}
                                    </p>
                                    {activeStep === i && (
                                        <p className="mt-2 text-sm leading-relaxed text-stone-600 animate-fade-in">
                                            {step.description}
                                        </p>
                                    )}
                                    {activeStep === i && (
                                        <div className="mt-3 flex flex-wrap gap-1.5">
                                            {step.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full border border-emerald-200 bg-white px-2.5 py-0.5 text-xs font-medium text-emerald-700"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {activeStep === i && (
                                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="relative overflow-hidden rounded-3xl shadow-xl">
                        <img
                            key={current.image}
                            src={current.image}
                            alt={current.title}
                            className="aspect-4/3 w-full object-cover transition-opacity duration-500"
                            loading="lazy"
                        />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl border border-white/20 bg-emerald-950/80 px-4 py-3 backdrop-blur-sm">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
                                {current.icon}
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
                                    Etapa {current.id}
                                </p>
                                <p className="text-sm font-semibold text-white">{current.title}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <ol className="mt-12 flex flex-col gap-0 lg:hidden">
                    {steps.map((step, i) => (
                        <li key={step.id} className="relative flex gap-4">
                            {i < steps.length - 1 && (
                                <div className="absolute left-5 top-12 h-full w-px bg-emerald-100" />
                            )}

                            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-900 text-white shadow-sm">
                                {step.icon}
                            </div>

                            <div className="pb-10 flex-1">
                                <span className="text-xs font-bold uppercase tracking-widest text-emerald-500">
                                    Etapa {step.id}
                                </span>
                                <h3 className="mt-0.5 font-semibold text-emerald-950">{step.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-stone-600">{step.description}</p>
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                    {step.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="mt-4 w-full rounded-2xl object-cover shadow-sm aspect-video"
                                    loading="lazy"
                                />
                            </div>
                        </li>
                    ))}
                </ol>

                <div className="mt-12 text-center">
                    <a
                        href="#contato"
                        className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 hover:shadow-md"
                    >
                        Ver demonstração
                    </a>
                </div>
            </div>
        </section>
    )
}