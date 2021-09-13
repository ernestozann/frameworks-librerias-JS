import Link from "next/link";
import { useRouter } from "next/router";

export default function PayPage() {
  const { query } = useRouter();

  return (
    <div>
      <p>
        Compraste {query.quantity} boletos de la pelicula {query.name}
      </p>
      <Link href="movies">
        <a>Regresar</a>
      </Link>
    </div>
  );
}
