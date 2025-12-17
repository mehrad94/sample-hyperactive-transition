"use client";
import { TransitionRouter } from "next-transition-router";
import { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";

const BLOCK_SIZE = 100;

const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const transitionGridRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement[]>([]);

  const createTransitionGrid = () => {
    if (!transitionGridRef.current) return;

    const container = transitionGridRef.current;
    container.innerHTML = "";
    blockRef.current = [];

    const gridWidth = window.innerWidth;
    const gridHeight = window.innerHeight;

    const cols = Math.ceil(gridWidth / BLOCK_SIZE);
    const rows = Math.ceil(gridHeight / BLOCK_SIZE);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const block = document.createElement("div");
        block.className = "transition-block absolute bg-[rgb(82,82,82)] opacity-0";
        block.style.width = `${BLOCK_SIZE}px`;
        block.style.height = `${BLOCK_SIZE}px`;
        block.style.left = `${col * BLOCK_SIZE}px`;
        block.style.top = `${row * BLOCK_SIZE}px`;

        container.appendChild(block);
        blockRef.current.push(block);
      }
    }

    gsap.set(blockRef.current, { opacity: 0 });
  };

  useEffect(() => {
    createTransitionGrid();
    window.addEventListener("resize", createTransitionGrid);
    return () => window.removeEventListener("resize", createTransitionGrid);
  }, []);

  return (
    <TransitionRouter
      auto
      leave={(next) => {
        const tween = gsap.to(blockRef.current, {
          opacity: 1,
          duration: 0.05,
          stagger: { amount: 0.5, from: "random" },
          ease: "power2.inOut",
          onComplete: next,
        });
        return () => tween.kill();
      }}
      enter={(next) => {
        const tween = gsap.to(blockRef.current, {
          opacity: 0,
          duration: 0.05,
          delay: 0.3,
          stagger: { amount: 0.5, from: "random" },
          ease: "power2.inOut",
          onComplete: next,
        });
        return () => tween.kill();
      }}
    >
      <>
        <div
          ref={transitionGridRef}
          className="transition-grid fixed top-0 left-0 w-full h-full pointer-events-none z-100 overflow-hidden"
        />
        {children}
      </>
    </TransitionRouter>
  );
};

export default TransitionProvider;
