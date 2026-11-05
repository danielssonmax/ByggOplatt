"use client"

import { useState } from "react"
import { track } from "@vercel/analytics"
import { ArrowUpRight, Check } from "lucide-react"
import { CITIES, SERVICES, SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

// No backend is connected, so the form composes a ready-made e-mail in the visitor's
// mail app. To receive submissions directly instead, swap `onSubmit` for a POST to a
// route handler (e.g. with Resend) and keep the same fields and validation.

type Fields = {
  namn: string
  telefon: string
  epost: string
  ort: string
  projekt: string
  beskrivning: string
}

const EMPTY: Fields = { namn: "", telefon: "", epost: "", ort: "", projekt: "", beskrivning: "" }

function validate(f: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {}
  if (f.namn.trim().length < 2) errors.namn = "Skriv ditt namn."
  const digits = f.telefon.replace(/\D/g, "")
  if (digits.length < 7) errors.telefon = "Skriv ett telefonnummer vi kan nå dig på."
  if (f.epost && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.epost)) errors.epost = "E-postadressen ser inte rätt ut."
  if (!f.projekt) errors.projekt = "Välj vad projektet gäller."
  if (f.beskrivning.trim().length < 10) errors.beskrivning = "Beskriv projektet med några ord."
  return errors
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [sent, setSent] = useState(false)

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [key]: e.target.value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const found = validate(fields)
    setErrors(found)
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0]
      document.getElementById(`kf-${first}`)?.focus()
      return
    }
    const subject = `Offertförfrågan: ${fields.projekt}${fields.ort ? ` i ${fields.ort}` : ""}`
    const body = [
      `Namn: ${fields.namn}`,
      `Telefon: ${fields.telefon}`,
      ...(fields.epost ? [`E-post: ${fields.epost}`] : []),
      ...(fields.ort ? [`Ort: ${fields.ort}`] : []),
      `Gäller: ${fields.projekt}`,
      "",
      fields.beskrivning,
    ].join("\n")
    track("Offertförfrågan", { projekt: fields.projekt, ort: fields.ort || "ej angiven" })
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  if (sent) {
    return (
      <div role="status" className="flex flex-col items-start gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-glacier-400/15 text-glacier-300">
          <Check size={22} aria-hidden />
        </span>
        <h3 className="text-2xl font-bold tracking-tight text-white">Ditt mejl är klart att skicka</h3>
        <p className="max-w-md leading-relaxed text-ink-300">
          Vi öppnade ditt e-postprogram med förfrågan ifylld. Tryck på skicka där, så återkommer vi. Öppnades inget? Ring
          oss på{" "}
          <a href={SITE.phoneHref} className="link tabular-nums">
            {SITE.phoneDisplay}
          </a>{" "}
          eller mejla{" "}
          <a href={`mailto:${SITE.email}`} className="link">
            {SITE.email}
          </a>
          .
        </p>
        <button type="button" onClick={() => setSent(false)} className="text-sm font-medium text-glacier-300 hover:underline">
          Ändra förfrågan
        </button>
      </div>
    )
  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <Field id="namn" label="Namn" error={errors.namn} required>
        <input id="kf-namn" autoComplete="name" value={fields.namn} onChange={set("namn")} className={inputCls(errors.namn)} {...aria("namn", errors.namn)} />
      </Field>
      <Field id="telefon" label="Telefon" error={errors.telefon} required>
        <input
          id="kf-telefon"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={fields.telefon}
          onChange={set("telefon")}
          className={inputCls(errors.telefon)}
          {...aria("telefon", errors.telefon)}
        />
      </Field>
      <Field id="epost" label="E-post" error={errors.epost} hint="Valfritt">
        <input
          id="kf-epost"
          type="email"
          autoComplete="email"
          value={fields.epost}
          onChange={set("epost")}
          className={inputCls(errors.epost)}
          {...aria("epost", errors.epost)}
        />
      </Field>
      <Field id="ort" label="Ort" hint="Valfritt">
        <select id="kf-ort" value={fields.ort} onChange={set("ort")} className={inputCls()}>
          <option value="">Välj ort</option>
          {CITIES.map((c) => (
            <option key={c.slug}>{c.name}</option>
          ))}
          <option>Annan ort</option>
        </select>
      </Field>
      <Field id="projekt" label="Vad gäller det?" error={errors.projekt} required className="sm:col-span-2">
        <select
          id="kf-projekt"
          value={fields.projekt}
          onChange={set("projekt")}
          className={inputCls(errors.projekt)}
          {...aria("projekt", errors.projekt)}
        >
          <option value="">Välj typ av projekt</option>
          {SERVICES.map((s) => (
            <option key={s.slug}>{s.name}</option>
          ))}
          <option>Flytspackling</option>
          <option>Annat</option>
        </select>
      </Field>
      <Field id="beskrivning" label="Beskriv projektet" error={errors.beskrivning} required className="sm:col-span-2">
        <textarea
          id="kf-beskrivning"
          rows={5}
          value={fields.beskrivning}
          onChange={set("beskrivning")}
          placeholder="Till exempel: badrum på ca 5 m² i villa, vill byta till dusch och ha golvvärme."
          className={cn(inputCls(errors.beskrivning), "resize-y")}
          {...aria("beskrivning", errors.beskrivning)}
        />
      </Field>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-400">Formuläret öppnar ditt e-postprogram med förfrågan ifylld.</p>
        <button type="submit" className="btn-cta shrink-0">
          Skicka förfrågan
          <ArrowUpRight size={18} aria-hidden />
        </button>
      </div>
    </form>
  )
}

function aria(key: string, error?: string) {
  return { "aria-invalid": error ? true : undefined, "aria-describedby": error ? `kf-${key}-fel` : undefined }
}

function inputCls(error?: string) {
  return cn(
    "w-full rounded-lg bg-ink-900 px-4 py-3 text-ink-100 placeholder:text-ink-500 ring-1 transition-shadow focus:outline-none focus:ring-2",
    error ? "ring-red-400/70 focus:ring-red-400" : "ring-white/10 hover:ring-white/20 focus:ring-glacier-400",
  )
}

function Field({
  id,
  label,
  hint,
  error,
  required,
  className,
  children,
}: {
  id: string
  label: string
  hint?: string
  error?: string
  required?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={className}>
      <label htmlFor={`kf-${id}`} className="mb-2 flex items-baseline justify-between text-sm font-medium text-ink-200">
        <span>
          {label}
          {required && <span className="text-orange-500"> *</span>}
        </span>
        {hint && <span className="font-normal text-ink-500">{hint}</span>}
      </label>
      {children}
      {error && (
        <p id={`kf-${id}-fel`} className="mt-1.5 text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  )
}
