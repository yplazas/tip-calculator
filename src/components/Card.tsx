import { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <section className="max-w-xl border-teal-400 p-5 border-2 rounded-lg">
      <h2 className="mb-5 text-2xl font-medium">{title}</h2>
      <div className="flex flex-col gap-2">{children}</div>
    </section>
  );
}
