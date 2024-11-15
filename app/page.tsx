import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <main className="flex-1 flex items-center justify-center h-[80vh]">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Streamline Your Team Communication
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Gre8 Comm is an in-house messaging platform designed to enhance collaboration and simplify communication within your organization.
          </p>
          <Link href="/chat">
            <Button className="inline-flex items-center justify-center">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </main>
      <footer className="py-6 w-full border-t">
        <div className="container px-4 md:px-6 flex justify-center">
          <p className="text-sm text-muted-foreground">© 2024 Pulse. All rights reserved.</p>
        </div>
      </footer>
      </div>
    </section>
  )
}
