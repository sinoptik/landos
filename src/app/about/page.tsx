import Image from "next/image";
import { Suspense } from "react";

import { ButtonLink, PlainButtonLink } from "@/components/elements/button";
import { ChevronIcon } from "@/components/icons/chevron-icon";
import { CallToActionSimple } from "@/components/sections/call-to-action-simple";
import { HeroLeftAlignedWithPhoto } from "@/components/sections/hero-left-aligned-with-photo";
import { Stat, StatsWithGraph } from "@/components/sections/stats-with-graph";
import {
  TeamFourColumnGrid,
  TeamMember,
} from "@/components/sections/team-four-column-grid";
import { TestimonialTwoColumnWithLargePhoto } from "@/components/sections/testimonial-two-column-with-large-photo";
import WaitlistForm from "../wait/components/form";

export default function Page() {
  return (
    <>
      {/* Hero */}
      <HeroLeftAlignedWithPhoto
        id="hero"
        headline="Clarity and consistency is our mission."
        subheadline={
          <p>
            We're on a mission to take the human element completely out of hard
            tasks — so you can focus on what matters most.
          </p>
        }
        photo={
          <Image
            src="/img/photos/1.png"
            alt=""
            width={1800}
            height={945}
            className="not-dark:bg-white/75 dark:bg-black/75"
          />
        }
      />
      {/* Stats */}
      <StatsWithGraph
        id="stats"
        eyebrow="Built for scale"
        headline="The idea bank powering content creation everywhere."
        subheadline={
          <p>
            Sinope.AI helps founders and creators deliver personal, organized,
            and relevant content to their audience. From ideas to posts, we help
            them stay consistent and build their brand.
          </p>
        }
      >
        <Stat
          stat="2M+"
          text="Ideas manually captured every week across thousands of founders and creators."
        />
        <Stat
          stat="99.98%"
          text="Consistency — because your audience never stops engaging."
        />
      </StatsWithGraph>
      {/* Testimonial */}
      <TestimonialTwoColumnWithLargePhoto
        id="testimonial"
        quote={
          <p>
            Ever since we started using Sinope.AI, our engagement scores have
            skyrocketed. The content we produce is consistent and relevant to
            our audience.
          </p>
        }
        img={
          <Image
            src="/img/avatars/16-h-1000-w-1400.webp"
            alt=""
            className="not-dark:bg-white/75 dark:bg-black/75"
            width={1400}
            height={1000}
          />
        }
        name="Lynn Marshall"
        byline="Founder at Pine Labs"
      />
      {/* Team */}
      {/* <TeamFourColumnGrid
        id="team"
        headline="Our leadership team"
        subheadline={
          <p>
            Sinope.AI's leadership team combines decades of experience in
            private equity, where they honed their skills in cost-cutting and
            maximizing shareholder value.
          </p>
        }
      >
        <TeamMember
          img={
            <Image
              src="/img/avatars/1-h-1000-w-800.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={800}
              height={1000}
            />
          }
          name="Leslie Alexander"
          byline="Co-Founder / CEO"
        />
        <TeamMember
          img={
            <Image
              src="/img/avatars/2-h-1000-w-800.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={800}
              height={1000}
            />
          }
          name="Michael Foster"
          byline="Co-Founder / CTO"
        />
        <TeamMember
          img={
            <Image
              src="/img/avatars/7-h-1000-w-800.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={800}
              height={1000}
            />
          }
          name="Dries Vincent"
          byline="Business Relations"
        />
        <TeamMember
          img={
            <Image
              src="/img/avatars/4-h-1000-w-800.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={800}
              height={1000}
            />
          }
          name="Lindsay Walton"
          byline="Front-end Developer"
        />
        <TeamMember
          img={
            <Image
              src="/img/avatars/5-h-1000-w-800.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={800}
              height={1000}
            />
          }
          name="Noor Hasan"
          byline="Designer"
        />
        <TeamMember
          img={
            <Image
              src="/img/avatars/6-h-1000-w-800.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={800}
              height={1000}
            />
          }
          name="Tom Cook"
          byline="Director of Product"
        />
        <TeamMember
          img={
            <Image
              src="/img/avatars/8-h-1000-w-800.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={800}
              height={1000}
            />
          }
          name="Whitney Francis"
          byline="Copywriter"
        />
        <TeamMember
          img={
            <Image
              src="/img/avatars/3-h-1000-w-800.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={800}
              height={1000}
            />
          }
          name="Leonard Wu"
          byline="Senior Designer"
        />
      </TeamFourColumnGrid> */}
      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        headline="Join the waitlist"
        subheadline={
          <>
            <p>
              We’re opening access slowly while we build the first version. If
              you want early access, join the waitlist.
            </p>
            <p>You’ll get:</p>
            <ul>
              <li>early product access</li>
              <li>private testing invites</li>
              <li>updates on new features</li>
            </ul>
          </>
        }
        cta={
          <div className="max-w-md">
            <Suspense>
              <WaitlistForm />
            </Suspense>
          </div>
          // <div className="flex items-center gap-4">
          //   <ButtonLink href="#" size="lg">
          //     Chat with us
          //   </ButtonLink>
          //   <PlainButtonLink href="#" size="lg">
          //     Book a demo <ChevronIcon />
          //   </PlainButtonLink>
          // </div>
        }
      />
    </>
  );
}
