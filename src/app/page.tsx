"use client";

import { Theme } from "@radix-ui/themes";
import { Test } from "@fancn21th/molecules-organisms-bones";
import "@radix-ui/themes/styles.css";

import styles from "./page.module.css";

export default function Home() {
  return (
    <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
      <main className={styles.main}>
        <Test />
      </main>
    </Theme>
  );
}
