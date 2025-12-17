import Image from "next/image";

const Contact = () => {
  return (
    <section className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      <div className="absolute w-full h-full z-0">
        <Image src={"/img/avengers.webp"} alt="Avengers" fill className="object-cover" />
      </div>
    </section>
  );
};

export default Contact;
