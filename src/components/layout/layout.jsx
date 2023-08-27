import { Banner } from "@/components/layout/banner";
import { NavBar } from "@/components/layout/navBar";
import { Footer } from "@/components/layout/footer";

export function Layout({ children }) {
  return (
    <div>
      <Banner />
      <NavBar />
      <main className="container mx-auto max-w-screen-xl px-6">{children}</main>
      <Footer />
    </div>
  );
}
