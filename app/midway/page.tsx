import Image from "next/image";

const About = () => {
  return (
    <section className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      <div className="absolute w-full h-full z-0">
        <Image fill src={"/img/midway.jpg"} alt="Midway" className="object-cover" />
      </div>
    </section>
  );
};

export default About;
