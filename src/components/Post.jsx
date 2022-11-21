import React from "react";
import styles from "./post.module.css";

const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/Marcelo-Lecampos.png"
            alt="foto de perfil"
          />
          <div className={styles.authorInfo}>
            <strong>Marcelo Leão</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time tittle="2022-11-15 20:00">1 de novembro de 2022</time>
      </header>

      <div>
        <p className={styles.content}></p>
        <p>fala galera</p>
        <p>Projeto novo</p>
        <p>
          <a href="">#novoProjeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketSeat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
};

export default Post;
