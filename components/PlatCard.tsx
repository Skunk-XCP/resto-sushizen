import Image from "next/image";

interface PlatProps {
  titre: string;
  image: string;
  descriptif: string;
  prix: number;
}

export default function PlatCard({
  titre,
  image,
  descriptif,
  prix,
}: PlatProps) {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure className="relative h-56">
        <Image
          src={image}
          alt={titre}
          fill
          className="object-cover rounded-t-xl"
        />
      </figure>
      <div className="card-body bg-base-200 rounded-b-xl">
        <h2 className="card-title text-primary font-bold text-xl">{titre}</h2>
        <p className="text-base-content/80 text-sm leading-relaxed min-h-[60px]">
          {descriptif}
        </p>
        <div className="card-actions justify-end mt-4">
          <div className="badge badge-primary badge-lg text-lg font-semibold">
            {prix.toFixed(2)} €
          </div>
        </div>
      </div>
    </div>
  );
}
