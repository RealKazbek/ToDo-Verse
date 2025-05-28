export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center h-screen p-5"
      style={{
        // Если сделаю через Tailwind то выдает ошибку
        backgroundImage: "url('/images/auth-bg.webp')",
      }}
    >
      {children}
    </div>
  );
}
