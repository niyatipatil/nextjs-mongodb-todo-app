import Footer from "@/components/Footer";
import Feature from "@/components/homepage/Feature";
import Information from "@/components/homepage/Information";
import MainBanner from "@/components/homepage/MainBanner";
import UserTestimonials from "@/components/homepage/UserTestimonials";
import Image from "next/image";

export default function Home() {
  return (
    //<main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
      <MainBanner />
      <Feature />
      <Information />
      <UserTestimonials />
      <Footer />
    </div>
    //</main>
  );
}
