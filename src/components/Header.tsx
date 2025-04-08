import LogoReact from "./LogoReact";
import LogoTailwindCSS from "./LogoTailwind";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-teal-100 text-2xl p-6 text-gray-800 font-bold">
      <div className="flex gap-1 items-center">
        <LogoReact/>
        <h1>React</h1>
        <p>+</p>
        <h1>Tailwind CSS</h1>
        <LogoTailwindCSS />
      </div>
      <p>Calculadora de propinas y consumo</p>
    </header>
  );
}
