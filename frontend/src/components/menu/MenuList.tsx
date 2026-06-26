import { MENU } from "@/lib/menu";
import styles from "./MenuList.module.scss";

export function MenuList() {
  return (
    <div className={styles.wrap}>
      {MENU.map((cat) => (
        <section key={cat.id} id={cat.id} className={styles.category}>
          <div className={styles.catHead}>
            <h2 className={styles.catTitle}>{cat.title}</h2>
            <p className={styles.catBlurb}>{cat.blurb}</p>
          </div>

          {cat.groups.map((group) => (
            <div key={group.title} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              {group.extras && group.extras.length > 0 && (
                <div className={styles.extras}>
                  <span className={styles.extrasLabel}>Extras</span>
                  <ul className={styles.extrasList}>
                    {group.extras.map((ex) => (
                      <li key={ex.name} className={styles.extra}>
                        {ex.name}
                        <span className={styles.extraPrice}>{ex.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li key={item.name} className={styles.item}>
                    <div className={styles.line}>
                      <span className={styles.name}>{item.name}</span>
                      <span className={styles.leader} aria-hidden />
                      <span className={styles.price}>{item.price}</span>
                    </div>
                    {item.desc && <p className={styles.desc}>{item.desc}</p>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
