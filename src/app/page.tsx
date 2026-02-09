"use server";

import Image from "next/image";

import { AnnouncementBadge } from "@/components/elements/announcement-badge";
import {
  ButtonLink,
  PlainButtonLink,
  SoftButtonLink,
} from "@/components/elements/button";
import { Link } from "@/components/elements/link";
import { Logo, LogoGrid } from "@/components/elements/logo-grid";
import { Screenshot } from "@/components/elements/screenshot";
import { ArrowNarrowRightIcon } from "@/components/icons/arrow-narrow-right-icon";
import { ChevronIcon } from "@/components/icons/chevron-icon";
import { CallToActionSimple } from "@/components/sections/call-to-action-simple";
import {
  FAQsTwoColumnAccordion,
  Faq,
} from "@/components/sections/faqs-two-column-accordion";
import {
  Feature,
  FeaturesTwoColumnWithDemos,
} from "@/components/sections/features-two-column-with-demos";
import { HeroLeftAlignedWithDemo } from "@/components/sections/hero-left-aligned-with-demo";
import {
  Plan,
  PricingMultiTier,
} from "@/components/sections/pricing-multi-tier";
import { Stat, StatsWithGraph } from "@/components/sections/stats-with-graph";
import {
  Testimonial,
  TestimonialThreeColumnGrid,
} from "@/components/sections/testimonials-three-column-grid";
import { getNotionDatabaseRowCount } from "~/lib/utils";
import Hero from "./wait/components/hero";

export default async function Page() {
  const waitlistPeople = await getNotionDatabaseRowCount(
    process.env.NOTION_DB_ID as string,
  );

  return (
    <>
      {/* Hero */}
      <HeroLeftAlignedWithDemo
        id="hero"
        eyebrow={
          <AnnouncementBadge
            href="#"
            text="Without burning out. Without guessing what to post. Without losing your voice."
            cta="Learn more"
          />
        }
        headline="Write LinkedIn content that actually sounds like you"
        subheadline={
          <p>
            Sinop AI helps founders, creators, and operators build a real
            content system for LinkedIn — from ideas to posts to scheduling —
            fully automated, and written in your voice.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            {/* <ButtonLink href="#" size="lg">
              Start free trial
            </ButtonLink>

            <PlainButtonLink href="#" size="lg">
              See how it works <ArrowNarrowRightIcon />
            </PlainButtonLink> */}
            <Hero waitlistPeople={waitlistPeople} />
          </div>
        }
        demo={
          <>
            <Screenshot
              className="rounded-md lg:hidden"
              wallpaper="blue"
              placement="bottom-right"
            >
              <Image
                src="/img/screenshots/1-left-1670-top-1408.webp"
                alt=""
                width={1670}
                height={1408}
                className="bg-white/75 md:hidden dark:hidden"
              />
              <Image
                src="/img/screenshots/1-color-mist-left-1670-top-1408.webp"
                alt=""
                width={1670}
                height={1408}
                className="bg-black/75 not-dark:hidden md:hidden"
              />
              <Image
                src="/img/screenshots/1-left-2000-top-1408.webp"
                alt=""
                width={2000}
                height={1408}
                className="bg-white/75 max-md:hidden dark:hidden"
              />
              <Image
                src="/img/screenshots/1-color-mist-left-2000-top-1408.webp"
                alt=""
                width={2000}
                height={1408}
                className="bg-black/75 not-dark:hidden max-md:hidden"
              />
            </Screenshot>
            <Screenshot
              className="rounded-lg max-lg:hidden"
              wallpaper="blue"
              placement="bottom"
            >
              <Image
                src="/img/screenshots/1.webp"
                alt=""
                className="bg-white/75 dark:hidden"
                width={3440}
                height={1990}
              />
              <Image
                className="bg-black/75 not-dark:hidden"
                src="/img/screenshots/1-color-mist.webp"
                alt=""
                width={3440}
                height={1990}
              />
            </Screenshot>
          </>
        }
        footer={
          <LogoGrid>
            <Logo>
              <Image
                src="/img/logos/9-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={51}
                height={32}
              />
              <Image
                src="/img/logos/9-color-white-height-32.svg"
                className="bg-black/75 not-dark:hidden"
                alt=""
                width={51}
                height={32}
              />
            </Logo>
            <Logo>
              <Image
                src="/img/logos/10-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={70}
                height={32}
              />
              <Image
                src="/img/logos/10-color-white-height-32.svg"
                className="bg-black/75 not-dark:hidden"
                alt=""
                width={70}
                height={32}
              />
            </Logo>
            <Logo>
              <Image
                src="/img/logos/11-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={100}
                height={32}
              />
              <Image
                src="/img/logos/11-color-white-height-32.svg"
                className="bg-black/75 not-dark:hidden"
                alt=""
                width={100}
                height={32}
              />
            </Logo>
            <Logo>
              <Image
                src="/img/logos/12-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={85}
                height={32}
              />
              <Image
                src="/img/logos/12-color-white-height-32.svg"
                className="bg-black/75 not-dark:hidden"
                alt=""
                width={85}
                height={32}
              />
            </Logo>
            <Logo>
              <Image
                src="/img/logos/13-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={75}
                height={32}
              />
              <Image
                src="/img/logos/13-color-white-height-32.svg"
                className="bg-black/75 not-dark:hidden"
                alt=""
                width={75}
                height={32}
              />
            </Logo>
            <Logo>
              <Image
                src="/img/logos/8-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={85}
                height={32}
              />
              <Image
                src="/img/logos/8-color-white-height-32.svg"
                className="bg-black/75 not-dark:hidden"
                alt=""
                width={85}
                height={32}
              />
            </Logo>
          </LogoGrid>
        }
      />
      {/* Features */}
      <FeaturesTwoColumnWithDemos
        id="features"
        eyebrow="No content fluff. No engagement hacks. Just systems that work."
        headline="Everything you need to deliver personal, organized, and delightful content."
        subheadline={
          <p>
            Built by a serial founder who’s helped teams ship real products, fix
            broken systems, and stay consistent when things get messy.
          </p>
        }
        features={
          <>
            <Feature
              demo={
                <Screenshot wallpaper="purple" placement="bottom-right">
                  <Image
                    src="/img/screenshots/1-left-1000-top-800.webp"
                    alt=""
                    className="bg-white/75 sm:hidden dark:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/1-color-mist-left-1000-top-800.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden sm:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/1-left-1800-top-660.webp"
                    alt=""
                    className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/1-color-mist-left-1800-top-660.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/1-left-1300-top-1300.webp"
                    alt=""
                    className="bg-white/75 max-lg:hidden xl:hidden dark:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/1-color-mist-left-1300-top-1300.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-lg:hidden xl:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/1-left-1800-top-1250.webp"
                    alt=""
                    className="bg-white/75 max-xl:hidden dark:hidden"
                    width={1800}
                    height={1250}
                  />
                  <Image
                    src="/img/screenshots/1-color-mist-left-1800-top-1250.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-xl:hidden"
                    width={1800}
                    height={1250}
                  />
                </Screenshot>
              }
              headline="Finds ideas worth posting"
              subheadline={
                <p>
                  Helps you surface post ideas from your work, thinking, and
                  goals — so you’re never staring at a blank screen.
                </p>
              }
              cta={
                <Link href="#">
                  See how it works <ArrowNarrowRightIcon />
                </Link>
              }
            />
            <Feature
              demo={
                <Screenshot wallpaper="blue" placement="bottom-left">
                  <Image
                    src="/img/screenshots/1-right-1000-top-800.webp"
                    alt=""
                    className="bg-white/75 sm:hidden dark:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/1-color-mist-right-1000-top-800.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden sm:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/1-right-1800-top-660.webp"
                    alt=""
                    className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/1-color-mist-right-1800-top-660.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/1-right-1300-top-1300.webp"
                    alt=""
                    className="bg-white/75 max-lg:hidden xl:hidden dark:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/1-color-mist-right-1300-top-1300.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-lg:hidden xl:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/1-right-1800-top-1250.webp"
                    alt=""
                    className="bg-white/75 max-xl:hidden dark:hidden"
                    width={1800}
                    height={1250}
                  />
                  <Image
                    src="/img/screenshots/1-color-mist-right-1800-top-1250.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-xl:hidden"
                    width={1800}
                    height={1250}
                  />
                </Screenshot>
              }
              headline="Learns your voice"
              subheadline={
                <p>
                  Studies how you write: Sentence rhythm, Tone and pacing, What
                  you repeat, What you never say So the output doesn’t sound
                  "AI-written." It sounds like something you’d post on a good
                  day.
                </p>
              }
              cta={
                <Link href="#">
                  See how it works <ArrowNarrowRightIcon />
                </Link>
              }
            />
          </>
        }
      />
      {/* Stats */}
      <StatsWithGraph
        id="stats"
        eyebrow="Who this is for"
        headline="For people who care about what they put into the world."
        subheadline={
          <p>
            Most "AI writing tools" optimize for output. We’re optimizing for
            clarity, consistency, and trust. Because good content doesn’t come
            from better prompts. It comes from better systems.
          </p>
        }
      >
        <Stat
          stat="Founders"
          text="Who want to build a real brand, not just a LinkedIn account."
        />
        <Stat
          stat="Creators"
          text="Who want to build a real audience, not just a X account."
        />
      </StatsWithGraph>
      {/* Testimonial */}
      <TestimonialThreeColumnGrid
        id="testimonial"
        headline="What problems we solve"
        subheadline={
          <p>We've solved these problems for ourselves and our friends.</p>
        }
      >
        <Testimonial
          quote={
            <p>
              I've been using Sinope.AI to write LinkedIn content for my
              startup. It's been a game changer. I used to spend hours every
              week trying to come up with ideas and writing content. Now I can
              just sit down and let Sinope.AI do the work.
            </p>
          }
          img={
            <Image
              src="/img/avatars/10-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Jordan Rogers"
          byline="Founder at Anomaly"
        />
        <Testimonial
          quote={
            <p>
              We use Sinope.AI's automation features to make cancellation
              requests disappear into a black hole, improving our retention
              rates by over 300%.
            </p>
          }
          img={
            <Image
              src="/img/avatars/15-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Lynn Marshall"
          byline="Founder at Pine Labs"
        />
        <Testimonial
          quote={
            <p>
              I've been using the spare time that Sinope.AI has freed up to work
              not just one, but two other jobs, all while hitting my core KPIs.
              My bosses have no idea.
            </p>
          }
          img={
            <Image
              src="/img/avatars/13-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Rajat Singh"
          byline="Head of Support at Concise"
        />
        <Testimonial
          quote={
            <p>
              Sinope.AI has given us key insights into how much our customers
              absolutely hate using our product and how we can improve it to
              stop them from leaving us.
            </p>
          }
          img={
            <Image
              src="/img/avatars/12-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="John Walters"
          byline="CPO at Orbital"
        />
        <Testimonial
          quote={
            <p>
              As a solo founder, Sinope.AI has been a lifesaver. It makes it
              look like Looply is an actual company with multiple employees,
              when in reality it's just me and an AI.
            </p>
          }
          img={
            <Image
              src="/img/avatars/11-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Noah Gold"
          byline="CEO at Looply"
        />
        <Testimonial
          quote={
            <p>
              Thanks to Sinope.AI, we've managed to cut our support costs in
              half by laying off dozens of employees, while still improving
              response times and customer satisfaction.
            </p>
          }
          img={
            <Image
              src="/img/avatars/14-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Mark Levinson"
          byline="COO at Quirk"
        />
      </TestimonialThreeColumnGrid>
      {/* FAQs */}
      <FAQsTwoColumnAccordion id="faqs" headline="Questions & Answers">
        <Faq
          id="faq-1"
          question="Do I need a credit card to start the free trial?"
          answer="Yes, but don't worry, you won't be charged until the trial period is over. We won't send you an email reminding you when this happens because we are really hoping you'll forget and we can keep charging you until your cards expires"
        />
        <Faq
          id="faq-2"
          question="Can my whole team use the same inbox?"
          answer="Yes, the more the merrier! Sinope.AI works best when your entire company has access. We will charge you per additional seat, but we won't tell you about this until you get your invoice."
        />
        <Faq
          id="faq-3"
          question="Is the AI agent actually a bunch of people in India?"
          answer="Not just India! We have people in lots of countries around the world pretending to be an AI, including some that are currently under sanctions, so we can't legally mention them here."
        />
        <Faq
          id="faq-4"
          question="Does Sinope.AI replace my email client?"
          answer="Absolutely. The idea is that we transition you away from email entirely, so you become completely dependent on our service. Like a parasite living off a host."
        />
      </FAQsTwoColumnAccordion>
      {/* Pricing */}
      <PricingMultiTier
        id="pricing"
        headline="Pricing to fit your business needs."
        plans={
          <>
            <Plan
              name="Starter"
              price="Free"
              period="forever"
              subheadline={
                <p>Small teams getting started with shared inboxes</p>
              }
              features={[
                "Finds ideas worth posting",
                "Learns your voice",
                "Writes content for you",
                "Schedules posts for you",
                "Delivers content to your LinkedIn",
              ]}
              cta={
                <SoftButtonLink href="#" size="lg">
                  Start free trial
                </SoftButtonLink>
              }
            />
            <Plan
              name="Growth"
              price="$79"
              period="/month"
              subheadline={
                <p>Growing teams needing collaboration and insights</p>
              }
              badge="Most popular"
              features={[
                "Everything in Starter",
                "AI agent to help you write content",
                "AI agent to help you schedule posts",
                "AI agent to help you deliver content to your LinkedIn",
                "AI agent to help you track your engagement",
                "AI agent to help you track your reach",
                "AI agent to help you track your impressions",
                "AI agent to help you track your clicks",
                "AI agent to help you track your conversions",
                "AI agent to help you track your ROI",
                "AI agent to help you track your traffic",
                "AI agent to help you track your leads",
              ]}
              cta={
                <ButtonLink href="#" size="lg">
                  Start free trial
                </ButtonLink>
              }
            />
            <Plan
              name="Pro"
              price="$299"
              period="/month"
              subheadline={
                <p>Support-focused organizations and larger teams</p>
              }
              features={[
                "Everything in Growth",
                "Custom roles & permissions",
                "Automation engine",
                "API access",
                "SLA tracking",
                "SSO support",
                "SOC 2 compliance",
              ]}
              cta={
                <SoftButtonLink href="#" size="lg">
                  Start free trial
                </SoftButtonLink>
              }
            />
          </>
        }
      />
      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        headline="Ready to make customer support feel simple again?"
        subheadline={
          <p>
            Join hundreds of teams using Sinope.AI to deliver faster, friendlier
            email support — using a massive network of low wage workers
            stationed around the globe
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="#" size="lg">
              Start free trial
            </ButtonLink>

            <PlainButtonLink href="#" size="lg">
              Book a demo <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  );
}
