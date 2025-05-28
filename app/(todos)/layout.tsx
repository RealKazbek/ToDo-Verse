import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="relative flex">
        <SideBar />
        <main className="mt-19 ml-[400px]">{children}</main>
      </div>
    </div>
  );
}
