export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen 
        bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white text-center px-4">
      
      {/* Titlu animat */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in">
        👋 Bine ai venit la <span className="text-blue-500">Ciocan Web3</span>
      </h1>

      {/* Subtitlu descriptiv */}
      <p className="text-lg md:text-xl max-w-2xl mb-6 opacity-80">
        Un CV Web3 interactiv care îmbină pasiunea pentru turism, blockchain, 3D printing și tehnologie.  
      </p>

      {/* Buton CTA */}
      <a href="/cv" 
        className="px-6 py-3 text-lg bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
        📜 Explorează CV-ul
      </a>

      {/* Elemente decorative */}
      <div className="absolute bottom-10 opacity-50 text-sm">
        🌐 Dezvoltat de Ladislau | Next.js + TailwindCSS
      </div>
    </main>
  );
}
