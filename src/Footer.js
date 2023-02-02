import styles from "./Footer.module.css";

const footerItems = [
  {
    title: "Terms",
    link: `https://github.com`,
  },
  {
    title: "Privacy",
    link: `https://github.com`,
  },
  {
    title: "Security",
    link: `https://github.com`,
  },
  {
    title: "Status",
    link: `https://github.com`,
  },
  {
    title: "Docs",
    link: `https://github.com`,
  },
  {
    title: "Docs",
    link: `https://github.com`,
  },
  {
    title: "Contact GitHub",
    link: `https://github.com`,
  },
  {
    title: "Pricing",
    link: `https://github.com`,
  },
  {
    title: "API",
    link: `https://github.com`,
  },
];

export default function Footer() {
  return (
    <ul className={styles.footer}>
      {footerItems.map(({ link, title }) => (
        <li className={styles.item} key={title}>
          <a className={styles.link} href={link}>
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
}
