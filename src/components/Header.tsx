import { shadow } from "@/styles/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { DarkModeToggle } from "./DarkModeToggle";

function Header() {
  const user = null;

  return (
    <header
      className="relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8"
      style={{
        boxShadow: shadow,
      }}
    >
      <Link className="flex items-end gap-4" href="/">
        <Image src="/noted.svg" height={30} width={30} alt="favicon" priority />
        <h1 className=" text-sm uppercase pb-1 font-semibold leading-6">
          Noted
        </h1>
      </Link>
      <div className="flex gap-4">
        {user ? (
          "Sign out"
        ) : (
          <>
            <Button asChild className="hidden sm:block">
              <Link href="/signIn">Sign up</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/signIn">Login</Link>
            </Button>
          </>
        )}
        <DarkModeToggle />
      </div>
    </header>
  );
}

export default Header;
