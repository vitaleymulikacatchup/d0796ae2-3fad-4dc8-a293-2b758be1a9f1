"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TextAbout from '@/components/sections/about/TextAbout';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/34286743/pexels-photo-34286743.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Two kitesurfers set up their kite on a sandy beach during sunset, with soft light and gentle waves." },
  { "id": "feature-image", "url": "https://images.pexels.com/photos/757133/pexels-photo-757133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Vibrant surfboards on display at a surf shop in Haleiwa, Hawaii, showcasing tropical colors." },
  { "id": "about-image", "url": "https://images.pexels.com/photos/1654492/pexels-photo-1654492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "An exhilarating surfing wipeout captures the thrill and action of water sports at sea." },
  { "id": "team-image", "url": "https://images.pexels.com/photos/6299933/pexels-photo-6299933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A family enjoys a surfing lesson on a sunny beach in Portugal, learning and bonding together." },
  { "id": "testimonial-image", "url": "https://images.pexels.com/photos/4173266/pexels-photo-4173266.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Positive elegant female in trendy coat carrying paper bags while using smartphone on street near restaurant entrance" },
  { "id": "lesson-image", "url": "https://images.pexels.com/photos/5940833/pexels-photo-5940833.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A diverse group of students working together in a university classroom setting with laptops and casual attire." },
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Lessons", id: "lessons" },
            { name: "Contact", id: "contact" },
          ]}
          brandName="SurfClub Haifa"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Ride the Waves in Haifa"
            description="Join us for thrilling surf lessons and adventures."
            imageSrc="https://images.pexels.com/photos/34286743/pexels-photo-34286743.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[
              { text: "Book Now", href: "contact" },
              { text: "Learn More", href: "about" },
            ]}
            className="bg-blue-100"
            descriptionClassName="text-blue-900"
          />
        </div>
      </div>

      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            title="Why Choose Us?"
            features={[
              { title: "Experienced Instructors", description: "Learn from the best in the business.", icon: "Star" },
              { title: "Flexible Schedules", description: "Find a lesson time that fits your schedule.", icon: "Calendar" },
            ]}
            className="bg-blue-100"
            textBoxTitleClassName="text-blue-900"
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Welcome to SurfClub Haifa, where waves meet adventure."
            buttons={[{ text: "Join Us", href: "contact" }]} 
            className="bg-blue-100"
            titleClassName="text-blue-900"
          />
        </div>
      </div>

      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardOne
            title="What Our Students Say"
            testimonials={[
              { id: "1", name: "John Doe", role: "Beginner Surfer", company: "Surf Enthusiast", rating: 5, imageSrc: "https://images.pexels.com/photos/4173266/pexels-photo-4173266.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
            ]}
            className="bg-blue-100"
            textBoxTitleClassName="text-blue-900"
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplitForm
            title="Get in Touch With Us"
            description="We'd love to hear from you. Send us a message for any inquiries."
            inputs={[{ name: "name", type: "text", placeholder: "Name", required: true }, { name: "email", type: "email", placeholder: "Email", required: true }]}
            textarea={{ name: "message", placeholder: "Type your message...", rows: 5, required: true }}
            imageSrc="https://images.pexels.com/photos/5940833/pexels-photo-5940833.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            className="bg-blue-100"
            titleClassName="text-blue-900"
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[{ items: [{ label: "About", href: "about" }, { label: "Lessons", href: "lessons" }, { label: "Contact", href: "contact" }] }]} 
            logoText="SurfClub Haifa"
            className="bg-blue-100"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}