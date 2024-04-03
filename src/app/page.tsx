"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Theme } from "@radix-ui/themes";
import { Card } from "@fancn21th/molecules-organisms-bones";

import styles from "./page.module.css";

export default function Home() {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      container.current &&
        gsap.from(".card", {
          scale: 0,
          duration: 1,
          repeat: -1,
          ease: "power1.inOut",
          yoyo: true,
          stagger: {
            each: 0.2,
          },
        });
    },
    { scope: container }
  );

  return (
    <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
      <main className={styles.main} ref={container}>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
      </main>
    </Theme>
  );
}
