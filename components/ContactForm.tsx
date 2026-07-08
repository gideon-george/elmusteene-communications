"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { waLink } from "@/lib/whatsapp";
import { SERVICES } from "@/lib/services";

/**
 * Simple enquiry form. On submit it opens WhatsApp with the details
 * pre-filled — no backend required.
 * TODO(owner): if you later want enquiries by email too, connect this form
 * to a form service (e.g. Formspree) or an API route.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = [
      `Hello Elmusteene Communications! My name is ${name.trim()}.`,
      service && `Service needed: ${service}.`,
      message.trim() && `Message: ${message.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const inputClasses =
    "w-full rounded-xl border border-navy/20 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/30";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Enquiry form">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy">
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Aisha Bello"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-navy">
          Service needed
        </label>
        <select
          id="service"
          name="service"
          required
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={inputClasses}
        >
          <option value="" disabled>
            Choose a service…
          </option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Laptops & Computers for Sale">Laptops &amp; Computers for Sale</option>
          <option value="Something else">Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us briefly what you need…"
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-navy-dark transition-colors hover:bg-[#1FBF5B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp sm:w-auto"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Send via WhatsApp
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>

      {sent && (
        <p role="status" className="rounded-xl bg-electric-light px-4 py-3 text-sm text-navy">
          WhatsApp should have opened with your message ready to send. If it didn&apos;t,
          please call us instead — the numbers are just beside this form.
        </p>
      )}
    </form>
  );
}
