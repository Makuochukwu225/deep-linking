
export default function Home() {
  return (
      <div
          className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 flex-col w-full">
        <a href="kolnapp://profile?id=123">Open Profile in App</a>
        <a href="https://deep-linking-bice.vercel.app/profile?id=123">Open Profile (Universal Link)</a>
      </div>
  );
}
