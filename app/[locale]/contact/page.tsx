"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"

export default function ContactPage() {
  const t = useTranslations("contact")
  const [fields, setFields] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Partial<typeof fields>>({})
  const [serverError, setServerError] = useState("")

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof typeof fields]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setServerError("")
    setStatus("sending")

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields),
    })

    if (res.ok) {
      const mailto = `mailto:info@al-fiker.com?subject=${encodeURIComponent(`Message from ${fields.name}`)}&body=${encodeURIComponent(`Name: ${fields.name}\nEmail: ${fields.email}\n\n${fields.message}`)}`
      window.location.href = mailto
      setStatus("success")
      setFields({ name: "", email: "", message: "" })
      return
    }

    const data = await res.json().catch(() => ({}))
    if (res.status === 422 && data.errors) {
      setErrors(data.errors)
      setStatus("idle")
    } else if (res.status === 429) {
      setServerError(data.error ?? t("tooManyRequests"))
      setStatus("error")
    } else {
      setServerError(data.error ?? t("submitError"))
      setStatus("error")
    }
  }

  const inputClass =
    "w-full px-[18px] py-3.5 mb-1 rounded-[10px] text-[0.95rem] text-[#1e2a3a] bg-white outline-none transition-all focus:shadow-[0_0_0_3px_rgba(37,99,168,0.1)]"
  const inputStyle = { border: "1.5px solid rgba(37,99,168,0.18)" }
  const errorStyle = { border: "1.5px solid rgba(220,38,38,0.5)" }

  return (
    <>
      <section
        className="pt-32 pb-16 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #07070f 0%, #0c1a2e 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,113,227,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,113,227,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-6xl mx-auto px-7 relative z-10">
          <h1 className="text-[clamp(2.2rem,5vw,3.8rem)] font-bold tracking-[-0.02em] text-white">{t("title")}</h1>
          <p className="text-white/50 mt-3 text-[1.1rem]">{t("subtitle")}</p>
        </div>
      </section>
      <section className="py-[110px] bg-[#f4f6fb]">
        <div className="max-w-6xl mx-auto px-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
            <div>
              <h2 className="text-[1.8rem] font-bold text-[#1e2a3a] mb-7">{t("formTitle")}</h2>
              {serverError && (
                <div className="mb-4 p-4 rounded-[10px] text-sm text-red-600" style={{ background: "rgba(220,38,38,0.06)", border: "1.5px solid rgba(220,38,38,0.2)" }}>
                  {serverError}
                </div>
              )}
              {status === "success" ? (
                <div
                  className="p-6 rounded-[12px] text-center"
                  style={{ background: "rgba(37,99,168,0.08)", border: "1.5px solid rgba(37,99,168,0.2)" }}
                >
                  <p className="text-[#2563a8] font-semibold text-[1.05rem] mb-1">{t("successTitle")}</p>
                  <p className="text-[#6b7c99] text-[0.92rem]">{t("successDesc")}</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-[0.9rem] text-[#2563a8] underline underline-offset-2"
                  >
                    {t("sendAnother")}
                  </button>
                </div>
              ) : (
                <form className="flex flex-col" onSubmit={handleSubmit} noValidate>
                  <div className="mb-[18px]">
                    <input
                      type="text"
                      name="name"
                      placeholder={t("namePlaceholder")}
                      value={fields.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      style={errors.name ? errorStyle : inputStyle}
                    />
                    {errors.name && <p className="text-red-500 text-[0.8rem] mt-1 ml-1">{errors.name}</p>}
                  </div>
                  <div className="mb-[18px]">
                    <input
                      type="email"
                      name="email"
                      placeholder={t("emailPlaceholder")}
                      value={fields.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      style={errors.email ? errorStyle : inputStyle}
                    />
                    {errors.email && <p className="text-red-500 text-[0.8rem] mt-1 ml-1">{errors.email}</p>}
                  </div>
                  <div className="mb-[18px]">
                    <textarea
                      rows={6}
                      name="message"
                      placeholder={t("messagePlaceholder")}
                      value={fields.message}
                      onChange={handleChange}
                      required
                      className={`${inputClass} resize-none`}
                      style={errors.message ? errorStyle : inputStyle}
                    />
                    {errors.message && <p className="text-red-500 text-[0.8rem] mt-1 ml-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="self-start text-white border-0 px-[34px] py-3.5 rounded-full cursor-pointer font-semibold text-[0.95rem] transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background: "linear-gradient(135deg, #2563a8, #1a4f8a)",
                      boxShadow: "0 4px 16px rgba(37,99,168,0.28)",
                    }}
                  >
                    {status === "sending" ? t("sending") : t("submit")}
                  </button>
                </form>
              )}
            </div>
            <div>
              <h3 className="text-[1.6rem] font-bold text-[#1e2a3a] mb-3.5">{t("infoTitle")}</h3>
              <p className="text-[#6b7c99] leading-[1.7] mb-2.5">{t("infoDesc")}</p>
              <div
                className="flex items-start gap-4 mt-7 p-5 bg-white rounded-[10px] shadow-[0_2px_10px_rgba(37,99,168,0.06)]"
                style={{ border: "1px solid rgba(37,99,168,0.1)" }}
              >
                <span className="text-[#2563a8] text-[1.2rem] mt-0.5">📞</span>
                <div>
                  <h4 className="text-[0.85rem] font-semibold uppercase tracking-[0.05em] text-[#6b7c99] mb-1">
                    {t("websiteLabel")}
                  </h4>
                  <a
                    href="tel:+9647701009005"
                    className="text-[#1e2a3a] font-medium hover:text-[#2563a8] transition-colors"
                  >
                    <bdo dir="ltr">+964 770 100 9005</bdo>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
