import Link from "next/link";

const Nav = () => {
  return (
    <nav className="h-16 bg-zinc-800">
      <div className="container mx-auto flex h-full items-center">
        <div>
          <Link href="/">
            <a className="text-2xl">
              <h4>visual algorithms</h4>
            </a>
          </Link>
        </div>
        <div className="ml-12 flex-1 text-zinc-300 hover:text-zinc-200">
          <Link href="/explore">
            <a className="text-lg">Explore</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
