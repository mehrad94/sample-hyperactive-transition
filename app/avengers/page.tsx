import Image from "next/image";

const Contact = () => {
  return (
    <section className="relative w-screen h-screen">
      <div className="section-bg">
        <Image width={3000} height={2000} src={"/img/avengers.webp"} alt="Avengers" />
      </div>
    </section>
  );
};

export default Contact;
