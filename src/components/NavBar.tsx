import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img
              src="/assets/logo-black-text.png"
              alt="Stellar Learn Logo"
              className="h-16 w-auto object-contain"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
