import Image from "next/image";

const Members = () => {
  return (
    <section className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      <div className="absolute w-full h-full z-0">
        <Image className="object-cover" src={"/img/accountant.webp"} alt="accountant" fill/>
      </div>
    </section>
  );
};

export default Members;
