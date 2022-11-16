import React from "react";
import styles from "./Header.module.css";
import igniteLogo from "../assets/igniteLogo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <strong>Ignite Feed</strong>  
      <img src={igniteLogo} alt="Ignite Logo" />
    </header>
  );
};
