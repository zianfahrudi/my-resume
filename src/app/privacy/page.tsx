import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { profile } from "@/data/portfolio";

const privacySections = [
  {
    title: "Information We Collect",
    paragraphs: [
      "ZIANDEV may collect basic information needed to provide and improve its websites, applications, and services. This can include information you choose to provide, such as your name, email address, or messages sent through contact channels.",
      "Some technical information may also be collected automatically, such as device type, browser type, operating system, app usage data, crash logs, and general analytics. This information helps us understand how the service is used and how it can be improved.",
    ],
  },
  {
    title: "How We Use Information",
    paragraphs: [
      "We use collected information to operate, maintain, and improve ZIANDEV products, respond to support requests, fix bugs, analyze performance, and keep services reliable.",
      "We may also use information to communicate updates, answer questions, and improve the user experience across our apps and websites.",
    ],
  },
  {
    title: "Third-Party Services",
    paragraphs: [
      "ZIANDEV products may use third-party services for hosting, analytics, crash reporting, app distribution, advertising, or payment processing. These providers may process data according to their own privacy policies.",
      "Examples may include services such as Google Play, Firebase, analytics tools, or other infrastructure providers used to run and improve the product.",
    ],
  },
  {
    title: "Data Sharing",
    paragraphs: [
      "We do not sell personal information. Information may be shared only when required to operate the service, comply with legal obligations, prevent abuse, protect users, or work with trusted service providers.",
      "Any third-party provider used by ZIANDEV is expected to handle data responsibly and only for the purpose of providing the related service.",
    ],
  },
  {
    title: "Data Security",
    paragraphs: [
      "We take reasonable steps to protect user information from unauthorized access, misuse, loss, or disclosure. However, no internet-based service can guarantee absolute security.",
      "Users should also take care when sharing information online and keep their own devices and accounts secure.",
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      "ZIANDEV services are not intended to knowingly collect personal information from children without appropriate consent. If you believe a child has provided personal information, please contact us so we can review and remove it where required.",
    ],
  },
  {
    title: "Your Choices",
    paragraphs: [
      "You may contact us to ask questions about your data, request corrections, or request deletion where applicable. You may also control certain permissions through your device, browser, or app settings.",
    ],
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      "This Privacy Policy may be updated from time to time. When changes are made, the updated version will be posted on this page with a revised effective date.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      `For privacy questions or support, contact ZIANDEV at ${profile.email}.`,
      "Website: https://ziandev.site",
    ],
  },
];

export const metadata: Metadata = {
  title: "Privacy Policy - ZIANDEV",
  description:
    "Privacy Policy for ZIANDEV websites, applications, and services.",
};

export default function PrivacyPage() {
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
                Privacy Policy
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-[color:var(--muted-foreground)]">
                Effective Date: May 15, 2026
              </p>
            </header>

            <div className="space-y-10 border-b border-[color:var(--border)] px-8 py-10">
              {privacySections.map((section) => (
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
                        {paragraph.includes(profile.email) ? (
                          <>
                            For privacy questions or support, contact ZIANDEV at{" "}
                            <a
                              href={`mailto:${profile.email}`}
                              className="text-emerald-500 underline underline-offset-4 transition-colors hover:text-emerald-400"
                            >
                              {profile.email}
                            </a>
                            .
                          </>
                        ) : paragraph.includes("https://ziandev.site") ? (
                          <>
                            Website:{" "}
                            <a
                              href="https://ziandev.site"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-emerald-500 underline underline-offset-4 transition-colors hover:text-emerald-400"
                            >
                              https://ziandev.site
                            </a>
                          </>
                        ) : (
                          paragraph
                        )}
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
