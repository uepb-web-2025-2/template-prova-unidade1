import styles from './page.module.css';

const eventos = [
  { id: 1, nome: "Workshop de Next.js", data: "10/05", status: "aberto" },
  { id: 2, nome: "Palestra sobre IA", data: "12/05", status: "esgotado" },
  { id: 3, nome: "Hackathon UEPB", data: "15/05", status: "aberto" },
  { id: 4, nome: "Code Review ao Vivo", data: "20/05", status: "esgotado" },
];

export default function Home() {
  return (
    <div>
      <main>
        <h1>Prova 1 - Programação Web</h1>
      </main>
    </div>
  );
}
