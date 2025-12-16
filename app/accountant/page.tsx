import Image from "next/image";
import React from "react";

const Members = () => {
  return (
    <section className="relative w-screen h-screen">
      <div className="section-bg">
        <Image width={3000} height={2000} src={"/img/accountant.webp"} alt="accountant" />
      </div>
    </section>
  );
};

export default Members;
