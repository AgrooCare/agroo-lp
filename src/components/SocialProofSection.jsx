import { useState } from 'react'


const testimonials = [
    {
        name: 'João Mendes',
        region: 'Sul de Minas Gerais',
        text: 'Desde que instalei o AgrooCare, reduzi o consumo de água em quase um terço. O sistema cancelou ciclos de irrigação três vezes antes de chuvas que eu nem sabia que vinham.',
        metrics: [
            { label: 'Água economizada', value: '-32%' },
            { label: 'Produtividade', value: '+18%' },
        ],
        rating: 5,
    },
    {
        name: 'Carla Souza',
        region: 'Triângulo Mineiro',
        photo: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80',
        text: 'A detecção de doenças por imagem salvou minha safra de tomate. Identifiquei requeima antes de se alastrar. Nunca mais fico sem o sistema.',
        metrics: [
            { label: 'Perda evitada', value: '-45%' },
            { label: 'Custo com defensivos', value: '-20%' },
        ],
        rating: 5,
    },
    {
        name: 'Roberto Alves',
        region: 'Oeste da Bahia',
        text: 'A adubação preditiva mudou minha operação. O sistema ajusta a fertirrigação conforme o diagnóstico da planta. Meu agrônomo ficou impressionado com os resultados.',
        metrics: [
            { label: 'Insumos economizados', value: '-25%' },
            { label: 'Produção', value: '+22%' },
        ],
        rating: 5,
    },
    {
        name: 'Ana Paula Ferreira',
        region: 'Noroeste do Paraná',
        photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
        text: 'Monitorar temperatura e umidade em tempo real me deu uma visão que eu nunca tive antes. Agora tomo decisões com dados, não com achismo.',
        metrics: [
            { label: 'Horas de monitoramento manual', value: '-80%' },
            { label: 'ROI no 1º ciclo', value: '+30%' },
        ],
        rating: 5,
    },
]

function StarRating({ count }) {
    return (
        <div className="flex gap-0.5" aria-label={`${count} estrelas`}>
            {Array.from({ length: count }).map((_, i) => (
                <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    )
}

function Avatar({ name, photo }) {
    const initials = name
        .split(' ')
        .filter((_, i, arr) => i === 0 || i === arr.length - 1)
        .map((n) => n[0])
        .join('')

    return (
        <div className="relative h-12 w-12 shrink-0">
            {photo && (
                <img
                    src={photo}
                    alt={name}
                    className="h-full w-full rounded-full object-cover ring-2 ring-emerald-100 ring-offset-1"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        const fallback = e.currentTarget.nextElementSibling
                        if (fallback) fallback.style.display = 'flex'
                    }}
                />
            )}
            <div
                className="h-full w-full items-center justify-center rounded-full bg-emerald-900 text-sm font-bold text-white ring-2 ring-emerald-100 ring-offset-1"
                style={{ display: photo ? 'none' : 'flex' }}
            >
                {initials}
            </div>
        </div>
    )
}

export function SocialProofSection() {
    const [hovered, setHovered] = useState(null)

    return (
        <section
            id="depoimentos"
            className="scroll-mt-24 border-b border-stone-200/80 bg-white py-16 sm:py-24"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">

                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-700">
                        Resultados reais
                    </span>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
                        Produtores que já transformaram sua lavoura
                    </h2>
                    <p className="mt-4 text-lg text-stone-600">
                        Veja o que quem já usa o AgrooCare tem a dizer sobre os resultados no campo.
                    </p>
                </div>

                <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {testimonials.map((t, i) => (
                        <li
                            key={t.name}
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                            className={`flex flex-col justify-between rounded-3xl border bg-white p-6 shadow-sm transition-all duration-300 ${hovered === i
                                ? '-translate-y-2 border-emerald-300 shadow-lg shadow-emerald-100'
                                : 'border-stone-200 hover:border-emerald-200'
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                <StarRating count={t.rating} />
                                <span className="rounded-full bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                                    Resultado real
                                </span>
                            </div>

                            <p className="mt-4 text-sm leading-relaxed text-stone-600">
                                "{t.text}"
                            </p>



                            <div className="mt-5 flex items-center gap-3 border-t border-stone-100 pt-4">
                                <Avatar name={t.name} photo={t.photo} />
                                <div>
                                    <p className="text-sm font-semibold text-emerald-950">{t.name}</p>
                                    <p className="text-xs text-stone-500">{t.region}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="mt-12 text-center">
                    <a
                        href="#contato"
                        className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 hover:shadow-md"
                    >
                        Quero resultados como esses
                    </a>
                </div>
            </div>
        </section>
    )
}