import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

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
        <div className="ml-12 flex flex-1 items-center gap-8 text-zinc-300 hover:text-zinc-200">
          <Link href="/explore">
            <a
              className={`text-lg ${
                router.asPath.includes("explore")
                  ? "font-bold text-emerald-400"
                  : ""
              }`}
            >
              Explore
            </a>
          </Link>
          <Link href="/play">
            <a
              className={`text-lg ${
                router.asPath.includes("play")
                  ? "font-bold text-emerald-400"
                  : ""
              }`}
            >
              Play
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
