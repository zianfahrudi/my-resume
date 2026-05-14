import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { profile } from "@/data/portfolio";

const contactSections = [
  {
    title: "General Support",
    paragraphs: [
      "For questions about ZIANDEV apps, website content, product issues, bug reports, or collaboration requests, send a message by email.",
      "Please include the app name, device model, operating system version, screenshots if helpful, and a short description of what happened.",
    ],
  },
  {
    title: "Subscriptions and Purchases",
    paragraphs: [
      "If your question is about an app subscription or purchase, include the product name and store platform used. Do not send passwords, payment card numbers, or private account credentials.",
      "For App Store subscriptions, manage or cancel them from your Apple ID subscription settings. For Google Play subscriptions, manage or cancel them from Google Play subscriptions.",
    ],
  },
  {
    title: "Response Time",
    paragraphs: [
      "ZIANDEV tries to review incoming messages as soon as possible. Response time may vary depending on workload, issue complexity, and available product information.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Contact - ZIANDEV",
  description: "Contact ZIANDEV for support, product questions, and feedback.",
};

export default function ContactPage() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] h-[30%] w-[30%] rounded-full bg-violet-500/5 blur-[120px]" />
      </div>
      <main className="relative min-h-screen">
        <div className="mx-auto max-w-4xl border-x border-[color:var(--border)]">
          <Nav />
          <article>
            <header className="border-y border-[color:var(--border)] px-8 py-10">
              <Link
                href="/"
                className="mb-6 inline-flex text-sm text-[color:var(--muted-foreground)] transition-colors hover:text-[color:var(--foreground)]"
              >
                ← Back to home
              </Link>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-[color:var(--muted-foreground)]">
                ZIANDEV
              </p>
              <h1 className="font-serif text-4xl font-bold md:text-5xl">
                Contact
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-[color:var(--muted-foreground)]">
                Need help, want to report a bug, or have a product question?
                Send a clear message and I will review it.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-6 inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-600"
              >
                {profile.email}
              </a>
            </header>

            <div className="space-y-10 border-b border-[color:var(--border)] px-8 py-10">
              {contactSections.map((section) => (
                <section key={section.title} className="max-w-3xl">
                  <h2 className="mb-3 font-serif text-2xl font-bold md:text-3xl">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-lg leading-8 text-[color:var(--muted-foreground)]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
          <Footer />
        </div>
      </main>
    </>
  );
}
