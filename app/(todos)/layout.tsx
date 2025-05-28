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
      <div className="flex">
        <SideBar />

        <main className="">{children}</main>
      </div>
    </div>
  );
}
