"use client";

import { useEffect, useState } from "react";
import styles from "./MenuNav.module.scss";

type Item = { id: string; title: string };

export function MenuNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  return (
    <div className={styles.bar}>
      <nav className={styles.nav} aria-label="Menü-Kategorien">
        {items.map((i) => (
          <a
            key={i.id}
            href={`#${i.id}`}
            className={`${styles.tab} ${active === i.id ? styles.active : ""}`}
          >
            {i.title}
          </a>
        ))}
      </nav>
    </div>
  );
}
