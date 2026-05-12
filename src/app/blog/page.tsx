import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog - Zian Fahrudi",
  description:
    "Notes on Flutter, indie apps, productivity tools, and shipping small products.",
};

export default function BlogPage() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] h-[30%] w-[30%] rounded-full bg-violet-500/5 blur-[120px]" />
      </div>
      <main className="relative min-h-screen">
        <div className="mx-auto max-w-4xl border-x border-[color:var(--border)]">
          <Nav />
          <section className="border-y border-[color:var(--border)] px-8 py-10">
            <Link
              href="/"
              className="mb-6 inline-flex text-sm text-[color:var(--muted-foreground)] transition-colors hover:text-[color:var(--foreground)]"
            >
              ← Back to home
            </Link>
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-[color:var(--muted-foreground)]">
              Blog
            </p>
            <h1 className="font-serif text-4xl font-bold md:text-5xl">
              Notes from building apps and tools.
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-[color:var(--muted-foreground)]">
              Short field notes on Flutter, indie hacking, personal
              productivity, and the small decisions behind shipping.
            </p>
          </section>

          <section className="divide-y divide-[color:var(--border)] border-b border-[color:var(--border)]">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group px-8 py-8 transition-colors hover:bg-[color:var(--muted)]/40"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium uppercase tracking-widest text-[color:var(--muted-foreground)] opacity-70">
                      {post.publishedAt}
                    </span>
                    <span className="text-xs text-[color:var(--muted-foreground)]">
                      •
                    </span>
                    <span className="text-xs font-medium uppercase tracking-widest text-[color:var(--muted-foreground)] opacity-70">
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl font-bold transition-colors group-hover:text-emerald-500 md:text-3xl">
                    {post.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-[color:var(--muted-foreground)]">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[color:var(--border)] bg-[color:var(--muted)]/60 px-3 py-1 text-xs font-medium text-[color:var(--muted-foreground)]"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="ml-auto text-sm text-emerald-500 opacity-0 transition-opacity group-hover:opacity-100">
                      Read →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
}
