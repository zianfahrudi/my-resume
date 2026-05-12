import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { blogPosts, getBlogPost } from "@/data/blog";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

const urlPattern = /(https?:\/\/[^\s]+)/g;
const exactUrlPattern = /^https?:\/\/[^\s]+$/;

function renderParagraph(paragraph: string) {
  return paragraph.split(urlPattern).map((part) => {
    if (!exactUrlPattern.test(part)) {
      return part;
    }

    return (
      <a
        key={part}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-500 underline underline-offset-4 transition-colors hover:text-emerald-400"
      >
        {part}
      </a>
    );
  });
}

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found - Zian Fahrudi",
    };
  }

  return {
    title: `${post.title} - Zian Fahrudi`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

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
                href="/blog"
                className="mb-6 inline-flex text-sm text-[color:var(--muted-foreground)] transition-colors hover:text-[color:var(--foreground)]"
              >
                ← Back to blog
              </Link>
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
              <h1 className="max-w-3xl font-serif text-4xl font-bold md:text-5xl">
                {post.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-[color:var(--muted-foreground)]">
                {post.excerpt}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[color:var(--border)] bg-[color:var(--muted)]/60 px-3 py-1 text-xs font-medium text-[color:var(--muted-foreground)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div className="space-y-10 border-b border-[color:var(--border)] px-8 py-10">
              {post.sections.map((section, index) => (
                <section key={section.heading ?? index} className="max-w-3xl">
                  {section.heading ? (
                    <h2 className="mb-3 font-serif text-2xl font-bold md:text-3xl">
                      {section.heading}
                    </h2>
                  ) : null}
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-lg leading-8 text-[color:var(--muted-foreground)]"
                      >
                        {renderParagraph(paragraph)}
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
