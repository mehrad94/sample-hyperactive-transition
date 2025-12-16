import Image from "next/image";

const About = () => {
  return (
    <section className="relative w-screen h-screen">
      <div className="section-bg">
        <Image width={3000} height={2000} src={"/img/midway.jpg"} alt="Midway" />
      </div>
    </section>
  );
};

export default About;
