import { Toaster } from "@/components/ui/sonner";
import Footer from "../../components/navigation/footer";
import { Header } from "@/components/navigation/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Toaster />
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
