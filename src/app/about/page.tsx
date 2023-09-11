import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Saeed Bidrang. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I'm Saeed Bidrang, an Earth Resident Eager to Solve Global
            Challenges through Software Engineering.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Hello there! I'm Saeed Bidrang, and I'm thrilled to have you here
              on my journey through the ever-evolving world of software
              engineering and problem-solving.
            </p>
            <p>
              I hail from Iran, but I consider myself an Earth Resident. My
              dream? To leverage my extensive experience as a startup founder
              and my work on a plethora of exciting projects to contribute to
              the betterment of our world through the power of software
              engineering.
            </p>
            <p>
              I wear many hats, but one that defines me well is my role as a
              startup founder. I've had the privilege of leading a passionate
              team to create Profile, a pioneering social networking platform
              for professionals in Iran. This journey not only honed my
              leadership skills but also allowed me to immerse myself in
              groundbreaking technologies like React, Golang, and microservices
              architecture.
            </p>
            <p>
              But my story doesn't stop there. I've ventured into a diverse
              range of projects, from crafting custom content management systems
              for renowned clients to co-founding Profile Digital Agency, where
              we've partnered with influential companies across the MENA region.
              My experiences have been marked by embracing agile methodologies,
              driving team efficiency, and, most importantly, finding innovative
              solutions to complex challenges.
            </p>
            <p>
              As I navigate this incredible landscape of software development,
              I'm here not only to share my experiences but also to learn from
              fellow enthusiasts like you. So, let's embark on this exciting
              journey together, exploring the limitless possibilities of
              software engineering, problem-solving, and making a positive
              impact on our shared world.
            </p>
            <p>
              Thank you for joining me on this adventure, and I can't wait to
              connect, collaborate, and create with you!
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/bidrang" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink
              href="https://instagram.com/bidrang"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/bidrang"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/bidrang"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:saeed.bidrang@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              saeed.bidrang@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
