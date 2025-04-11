import Button from "@/components/Button";
import Logo from "@/components/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center gap-4 w-full h-screen">
      <div className="flex flex-col justify-start">
        <h1 className="font-extrabold text-8xl">Witamy w <Logo /></h1>
        <p className="text-text text-lg">Tutaj możesz zobaczyć i pobrać wszystkie projekty uczniów!</p>
      </div>
      <Link href="/projects">
        <Button>
          Przeglądaj projekty
        </Button>
      </Link>

    </div>
  );
}
