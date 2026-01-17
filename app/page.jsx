"use client";

import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [material, setMaterial] = useState("PLA");
  const [color, setColor] = useState("");
  const [infill, setInfill] = useState(20);
  const [result, setResult] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const materialMultiplier =
      material === "PETG" ? 1.2 : material === "ABS" ? 1.3 : 1.0;
    const infillFactor = Math.min(Math.max(infill, 0), 100) / 100;
    const base = 25;
    const estimate = (base + base * infillFactor) * materialMultiplier;
    setResult(estimate);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-100 to-emerald-50">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 right-[-80px] h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-[-80px] h-80 w-80 rounded-full bg-amber-200/50 blur-3xl" />

        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <section className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 shadow-sm">
                Orcamento rapido
              </div>
              <h1 className="font-display text-4xl font-semibold leading-tight text-stone-900 md:text-5xl">
                Orcamento de Impressao 3D feito para projetos exigentes
              </h1>
              <p className="text-lg text-stone-700">
                Envie seu arquivo, escolha o material e receba uma estimativa
                imediata. Sem complicacao, com foco em qualidade.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-stone-200 bg-white/80 p-4 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Prazo medio
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-stone-900">
                    2-4 dias
                  </div>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white/80 p-4 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Materiais
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-stone-900">
                    PLA, PETG, ABS
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-lg backdrop-blur">
              <h2 className="font-display text-2xl font-semibold text-stone-900">
                Seu arquivo e preferencias
              </h2>
              <p className="mt-1 text-sm text-stone-600">
                Preencha os detalhes abaixo para calcular a estimativa.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">
                    Arquivo 3D (STL, OBJ, 3MF)
                  </label>
                  <input
                    className="block w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700 file:mr-4 file:rounded-lg file:border-0 file:bg-emerald-600 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-emerald-700"
                    type="file"
                    accept=".stl,.obj,.3mf"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                  />
                  {file ? (
                    <div className="text-xs text-stone-500">{file.name}</div>
                  ) : null}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">
                    Email
                  </label>
                  <input
                    className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">
                      Material
                    </label>
                    <select
                      className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                      value={material}
                      onChange={(e) => setMaterial(e.target.value)}
                    >
                      <option>PLA</option>
                      <option>PETG</option>
                      <option>ABS</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">
                      Cor do filamento
                    </label>
                    <input
                      className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                      type="text"
                      placeholder="Ex: Preto"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">
                    Infill (%)
                  </label>
                  <input
                    className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                    type="number"
                    min={0}
                    max={100}
                    value={infill}
                    onChange={(e) => setInfill(Number(e.target.value))}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200/60 transition hover:-translate-y-0.5 hover:bg-emerald-700"
                >
                  Calcular orcamento
                </button>
              </form>

              {result !== null && (
                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4">
                  <h3 className="font-display text-lg font-semibold text-emerald-900">
                    Resultado
                  </h3>
                  <p className="mt-2 text-sm text-emerald-900">
                    <strong>Valor estimado:</strong> R$ {result.toFixed(2)}
                  </p>
                  <p className="mt-2 text-xs text-emerald-800/80">
                    * Valor estimado. O preco final pode variar apos analise.
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
