import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--accent)]">
      <Header />
      <div className="relative flex">
        <SideBar />
        <main className="mt-37 ml-[400px] mr-6 w-full border px-4 py-2 rounded-lg shadow-md border-gray-400">{children}</main>
      </div>
    </div>
  );
}
