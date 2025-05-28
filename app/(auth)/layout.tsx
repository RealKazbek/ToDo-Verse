import { Boxes } from "@/components/ui/background-boxes";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-slate-900 p-15 flex items-center justify-center">

      <Boxes />

      <div className="relative z-1000 w-full h-full">
        {children}
      </div>
    </div>
  );
}
