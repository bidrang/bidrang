import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-6">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Discover My Preferred Software, Beloved Gadgets, and Top Recommendations"
      intro="Curious about the tools and tech that fuel my software endeavors and keep me in the productivity zone? Dive into my extensive list of personal favorites right here!"
    >
      <div className="space-y-16">
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, i7 64GB RAM (2019)">
            On my trusty MacBook Pro 2019, I may not have the newest gear, but
            it's a reliable partner. Plus, I've got Windows 11 virtually
            installed to keep my older projects running with Visual Studio 2019.
          </Tool>
          <Tool title="Sony MDR Noise Canceling Earphone">
            Whether I'm designing, coding, or tackling complex problems, my
            trusty earphones are my constant companion. Music fuels my
            creativity and keeps me in the zone.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            My primary IDE of choice is Visual Studio Code, a versatile and
            powerful tool that empowers me to write clean, efficient code with
            ease and precision.
          </Tool>
          <Tool title="Night Owl Theme">
            I enhance my coding experience with the Night Owl theme, bringing a
            sleek and eye-friendly design to my favorite IDE, Visual Studio
            Code.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            I turn to Figma for all my design needs, harnessing its
            collaborative power to create stunning visuals and seamless user
            experiences.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Frontend">
          <Tool title="React">
            React is my go-to technology for frontend development, allowing me
            to craft dynamic and responsive user interfaces with efficiency and
            creativity.
          </Tool>
          <Tool title="NextJS">
            I also rely on Next.js to enhance my React projects, enabling
            server-side rendering and optimized performance for web
            applications.
          </Tool>
          <Tool title="Tailwind">
            To streamline my UI development, I harness the power of Tailwind
            CSS, simplifying the process of crafting elegant and responsive user
            interfaces.
          </Tool>
          <Tool title="TypeScript">
            TypeScript is my frontend language of choice, enhancing code
            reliability and maintainability while delivering robust and scalable
            web applications.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Backend">
          <Tool title="DotNet">
            In the backend realm, I'm a proponent of .NET, leveraging its
            versatility and power to build robust, enterprise-grade software
            solutions.
          </Tool>
          <Tool title="Golang">
            Additionally, I'm proficient in Golang, using its speed and
            efficiency to develop high-performance, scalable applications for
            various projects.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Data">
          <Tool title="Kafka">
            Kafka is my preferred tool for building resilient and scalable
            event-driven architectures, ensuring efficient data streaming and
            processing in my projects.
          </Tool>
          <Tool title="Postgress">
            I rely on PostgreSQL as my database solution of choice, offering a
            robust and versatile platform for storing and managing data in my
            applications.
          </Tool>
          <Tool title="MongoDB">
            For my NoSQL database needs, MongoDB is my trusted companion,
            providing flexibility and scalability for data storage in diverse
            projects.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
