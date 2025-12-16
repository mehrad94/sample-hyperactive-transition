import Image from "next/image";

export default function Home() {
  return (
    <section className="relative w-screen h-screen">
      <div className="section-bg ">
        <Image
          width={3000}
          height={2000}
          className="w-screen h-screen"
          src={"/img/brave.webp"}
          alt="Brave"
        />
      </div>
    </section>
  );
}
