import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/Button";
import DeleteButton from "@/app/components/DeleteButton";

export default function About() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-3xl font-bold">This is about landing page</h1>
        <p className="text-base">
          Welcome to the about page. Here you can share details about your
          project.
        </p>
        <Link href="/" className="text-blue-600 hover:underline">
          <Button text="Click to go to homepage!" />
        </Link>
        <DeleteButton text="delete me!" />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
