import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center gap-4 font-mono">
        <h1 className="text-xl">Home</h1>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/alunos" className="hover:text-gray-300">
            Alunos
          </Link>
          <Link href="/login" className="hover:text-gray-300">
            Desconectar
          </Link>
        </div>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;