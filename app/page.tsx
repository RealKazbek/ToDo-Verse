import Header from "@/components/mainPage/Header";
import MainHero from "@/components/mainPage/Hero";

export default function Home() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center h-screen flex flex-col"
      style={{
        backgroundImage: "url('/images/main-bg.webp')",
      }}
    >
      <Header />
      <div className="flex-1">
        <MainHero />
      </div>
    </div>
  );
}

