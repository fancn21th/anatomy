"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Theme } from "@radix-ui/themes";
import { Zhi_Mang_Xing } from "next/font/google";
import styles from "./page.module.css";

// https://nextjs.org/docs/messages/google-fonts-missing-subsets
const zmx = Zhi_Mang_Xing({
  preload: false,
  weight: "400",
});

const texts = "从小处思考, 从大处设想".split("");
const leftTexts = texts.slice(0, texts.length / 2);
const rightTexts = texts.slice(texts.length / 2);

export default function Home() {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      container.current &&
        gsap.from("span", {
          opacity: 0,
          duration: 2,
          ease: "power2.inOut",
          stagger: {
            each: 0.2,
          },
        });
    },
    { scope: container }
  );

  return (
    <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
      <main className={[zmx.className, styles.main].join(" ")} ref={container}>
        <div className={styles.left}>
          {leftTexts.map((text, index) => {
            return <span key={index}>{text}</span>;
          })}
        </div>
        <div className={styles.right}>
          {rightTexts.map((text, index) => {
            return <span key={index}>{text}</span>;
          })}
        </div>
      </main>
    </Theme>
  );
}
