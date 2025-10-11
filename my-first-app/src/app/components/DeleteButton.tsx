import styles from "./Button.module.css";

export default function DeleteButton({ text }: { text: string }) {
  return <button className={styles.delete}>{text}</button>;
}
