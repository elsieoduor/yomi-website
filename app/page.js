import CTASection from "@/components/CTA";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import MenuSection from "@/components/Menu";
import Service from "@/components/Service";
import Testimonials from "@/components/Testimonials";
import Why from "@/components/Why";

export default function Home() {
  return (
    <>
      <Hero />
      <Why />
      {/* <Service /> */}
      <MenuSection />
      <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: "url('/nairobi2.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
          <div className="relative md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b text-white border-gray-200 z-10 ml-10">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">Pitchfork Join Us for a Great Dining Experience!</h1>
              <p className="leading-relaxed text-base">Savor the Unexpected: Dive into a World of Unique Flavors and Artful Creations</p>
          </div>
      </section>
      <Testimonials />
      <Gallery />
      <CTASection />
    </>
  );
}
