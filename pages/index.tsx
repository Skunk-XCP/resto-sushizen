import Header from "../components/Header";
import PlatCard from "../components/PlatCard";
import { plats } from "../data/menu.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Bienvenue chez Sushi Zen
          </h1>
          <div className="divider max-w-md mx-auto"></div>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            <span className="border-b-4 border-primary pb-2">Notre Carte</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {plats.map((plat) => (
              <PlatCard
                key={plat.id}
                titre={plat.titre}
                image={plat.image}
                descriptif={plat.descriptif}
                prix={plat.prix}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
