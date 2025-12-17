import Image from "next/image";

export default function Home() {
  return (
    <section className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      <div className="absolute w-full h-full z-0">
        <Image fill className="object-cover" src={"/img/brave.webp"} alt="Brave" />
      </div>
    </section>
  );
}
