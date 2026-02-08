import { notFound } from "next/navigation";

import { Container } from "@/components/elements/container";
import { Eyebrow } from "@/components/elements/eyebrow";
import { Heading } from "@/components/elements/heading";
import { Text } from "@/components/elements/text";
import posts from "@/data/blog-posts.json";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="py-16">
      <Container>
        <article className="mx-auto flex max-w-2xl flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <Eyebrow>{post.topic}</Eyebrow>
            <Heading>{post.title}</Heading>
            <div className="flex items-center gap-2 text-sm text-mist-500 dark:text-mist-500">
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
          </div>

          {/* Content */}
          <Text size="lg" className="flex flex-col gap-6">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </Text>
        </article>
      </Container>
    </section>
  );
}
