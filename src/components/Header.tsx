import LogoTailwindCSS from "./LogoTailwind";
import LogoVite from "./LogoVite";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-teal-100 text-2xl p-6 text-gray-800 font-bold">
      <div className="flex gap-1 items-center">
        <LogoTailwindCSS />
        <h1>Tailwind CSS</h1>
        <p>+</p>
        <h1>Vite</h1>
        <LogoVite />
      </div>
      <p>Calculadora de propinas y consumo</p>
    </header>
  );
}
