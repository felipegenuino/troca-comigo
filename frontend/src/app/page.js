"use client";

import { useEffect, useState } from "react";
import api from "./services/api";

export default function Home() {
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const response = await api.get("/albums");
        setAlbums(response.data);
      } catch (error) {
        if (error.response && error.response.data.errors) {
          setError(`Erro: ${error.response.data.errors.join(", ")}`);
        } else {
          setError("Erro ao buscar álbuns. Tente novamente.");
        }
      }
    }
    fetchAlbums();
  }, []);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <img
          src="/error-illustration.svg"
          alt="Erro ao carregar dados"
          className="w-1/3 mb-4"
        />
        <h1 className="text-xl font-bold text-red-500">Algo deu errado</h1>
        <p className="text-gray-500">{error}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => window.location.reload()}
        >
          Tentar Novamente
        </button>
      </div>
    );
  }

  if (albums.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <img
          src="/empty-albums-illustration.svg"
          alt="Nenhum álbum disponível"
          className="w-1/3 mb-4"
        />
        <h1 className="text-xl font-bold">Nenhum álbum disponível</h1>
        <p className="text-gray-500">
          Parece que ainda não há álbuns. Tente novamente mais tarde ou adicione
          novos álbuns.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1>Álbuns Disponíveis</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <h2>{album.title}</h2>
            <p>{album.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
