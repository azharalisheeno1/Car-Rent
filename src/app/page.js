import About from "@/components/About";
import Banner from "@/components/Banner";
import Blogs from "@/components/Blogs";
import BookingForm from "@/components/BookingForm";
import CarItems from "@/components/CarItems";
import Hero from "@/components/hero/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
  <Hero/>
  <BookingForm/>
  <About/>
  <Services/>
  <CarItems/>
  <Banner/>
  <Testimonials/>
  <Blogs/>
    </>
  );
}
