import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: "Contact Notch — Send Us a Signal",
  description: "Let's align our orbits. Reach out to Notch for collaborations, inquiries, or creative missions. We’re ready to explore new ideas and craft meaningful impact together.",
  url: "/contact-us"
})

const ContactPage = () => {
  return (
    <section className="w-full min-h-screen">Contactpage</section>
  )
}

export default ContactPage