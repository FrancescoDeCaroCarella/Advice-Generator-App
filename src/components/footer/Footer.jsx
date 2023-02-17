import styles from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <h3>Follow me</h3>
      <div className={styles.navSocial}>
        <a
          href="https://www.francescodecarocarella.it"
          class="fa-solid fa-globe"
        ></a>
        <a
          href="https://it.linkedin.com/in/francescodecarocarella"
          class="fa-brands fa-linkedin-in"
        ></a>
        <a
          href="https://www.instagram.com/fdcc_webdev/"
          class="fa-brands fa-instagram"
        ></a>
        <a
          href="https://github.com/FrancescoDeCaroCarella"
          class="fa-brands fa-github"
        ></a>
        <a
          href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%6D%65%40%66%72%61%6E%63%65%73%63%6F%64%65%63%61%72%6F%63%61%72%65%6C%6C%61%2E%69%74"
          class="fa-regular fa-envelope"
        ></a>
      </div>
      <h4>
        Made with ❤️ by Fdcc<br></br>Copyright{" "}
        <span>{new Date().getFullYear()}</span>
      </h4>
    </footer>
  );
}

export default Footer;