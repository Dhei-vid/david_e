import { Toaster } from "@/components/ui/sonner";
import Footer from "../../components/navigation/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Toaster />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
