import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'On Media',
  description:
    "Media Engagements: Exploring Startups, Challenges, and Profile's Journey",
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Media Engagements: Exploring Startups, Challenges, and Profile's Journey"
      intro="Explore my engaging conversations with top media outlets, where I delve into the dynamic world of startups, challenges in the Iranian ecosystem, and the remarkable journey of Profile Social Network."
    >
      <div className="space-y-20">
        <SpeakingSection title="Newsletters (Persian)">
          <Appearance
            href="https://digiato.com/article/2023/05/14/profile-platform-has-ended-its-activity"
            title="Profile has ended its activity"
            description="During my interview with Digiato, I officially announced the conclusion of Profile Social Network's journey, reflecting on our accomplishments and the path ahead."
            event="May 2023"
            cta="Visit Website"
          />
          <Appearance
            href="https://digiato.com/article/2021/09/25/%DA%AF%D9%81%D8%AA%DA%AF%D9%88%DB%8C-%D8%AF%DB%8C%D8%AC%DB%8C%D8%A7%D8%AA%D9%88-%D8%A8%D8%A7-%D8%A8%D9%86%DB%8C%D8%A7%D9%86-%DA%AF%D8%B0%D8%A7%D8%B1-%D9%BE%D8%B1%D9%88%D9%81%D8%A7%DB%8C%D9%84-%D8%A7"
            title="My Interview with Digiato"
            description="I engaged in an informative interview with Digiato, delving into the unique challenges of running startups in Iran and outlining our strategic plans for the future."
            event="September 2021"
            cta="Visit Website"
          />
          <Appearance
            href="https://icheezha.ir/%D9%BE%D8%B1%D9%88%D9%81%D8%A7%DB%8C%D9%84/"
            title="My Interview with ICheezha"
            description="I had an insightful interview with ICheezha, discussing the exciting new feature of Profile: our Webinars service. Sharing the vision and the impact it brings to our platform."
            event="April 2020"
            cta="Visit Website"
          />
          <Appearance
            href="https://shanbemag.com/%DB%8C%DA%A9-%D9%BE%D8%B1%D9%88%D9%81%D8%A7%DB%8C%D9%84-%D9%BE%D9%8F%D8%B1%D9%88%D9%BE%DB%8C%D9%85%D8%A7%D9%86-%D8%A8%D8%B3%D8%A7%D8%B2%DB%8C%D8%AF/"
            title="My Interview with ShanbeMag"
            description="I had the pleasure of speaking with Shanbe Mag, a renowned magazine in the Iranian startup ecosystem, sharing insights about Profile Social Network, our mission, and achievements."
            event="October 2017"
            cta="Visit Website"
          />
        </SpeakingSection>
        <SpeakingSection title="Videos (Persian)">
          <Appearance
            href="https://www.aparat.com/v/3kZv4"
            title="Mashhad Hamfekr Talk: Startup Challenges & Profile's Journey"
            description="I had the honor of being a speaker at the Mashhad Hamfekr Event, where I shared insights into the world of startups, the challenges we've faced, and the impactful journey of Profile Social Network."
            event="January 2019"
            cta="Watch Video"
          />
          <Appearance
            href="https://www.aparat.com/v/2mCuX"
            title="ًInterview with Radio Codsi"
            description="I participated in a Radio Codsi interview discussing Profile's developmental phase and vision."
            event="February 2020"
            cta="Watch Video"
          />
          <Appearance
            href="https://www.aparat.com/v/4T9b6"
            title="Interview with Innotalks about Profile"
            description="I participated in a Innotalks interview discussing why we need a social network like Profile."
            event="September 2019"
            cta="Watch Video"
          />
          <Appearance
            href="https://www.namasha.com/v/RXGklZEU/%D9%85%D8%B4%D8%A7%D8%B1%DA%A9%D8%AA_%D9%88_%D9%87%D9%85_%D8%A7%D9%86%D8%AF%DB%8C%D8%B4%DB%8C_%D8%AF%D8%B1_%D9%81%D8%B6%D8%A7%DB%8C_%D9%85%D8%AC%D8%A7%D8%B2%DB%8C_%DA%A9%D8%A7%D8%B1%D8%A2%D9%81%D8%B1%DB%8C%D9%86_%D8%B3%D8%B9%DB%8C%D8%AF_%D8%A8%DB%8C%D8%AF%D8%B1%D9%86%DA%AF_%D8%AA%D8%A7%D8%B1%DA%AF%D8%B1%D8%AF"
            title="Interview with Iran national TV - Targard Program"
            description="I had the privilege of being interviewed on Iran National TV's Targard program, discussing the dynamics, challenges, and opportunities within the Iranian startup ecosystem."
            event="January 2019"
            cta="Watch Video"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
