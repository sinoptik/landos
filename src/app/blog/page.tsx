import NextLink from "next/link";

import { Container } from "@/components/elements/container";
import { Eyebrow } from "@/components/elements/eyebrow";
import { Heading } from "@/components/elements/heading";
import { Text } from "@/components/elements/text";
import posts from "@/data/blog-posts.json";

export default function BlogPage() {
  return (
    <section className="py-16">
      <Container className="flex flex-col gap-10 sm:gap-16">
        {/* Header */}
        <div className="flex max-w-2xl flex-col gap-6">
          <Heading>Blog</Heading>
          <Text size="lg" className="text-pretty">
            <p>
              Insights, guides, and stories about customer support, AI, and
              building better teams.
            </p>
          </Text>
        </div>

        {/* Post grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <NextLink
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-4 rounded-2xl border border-mist-200 p-6 transition-colors hover:border-mist-400 dark:border-mist-800 dark:hover:border-mist-600"
            >
              <Eyebrow>{post.topic}</Eyebrow>

              <h2 className="font-display text-xl/7 font-medium tracking-tight text-mist-950 group-hover:text-mist-700 dark:text-white dark:group-hover:text-mist-300">
                {post.title}
              </h2>

              <Text>
                <p>{post.excerpt}</p>
              </Text>

              <div className="mt-auto flex items-center gap-2 pt-4 text-sm text-mist-500 dark:text-mist-500">
                <span>{post.writtenBy}</span>
                <span aria-hidden="true">&middot;</span>
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </NextLink>
          ))}
        </div>
      </Container>
    </section>
  );
}
