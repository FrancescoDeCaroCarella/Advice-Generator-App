import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "./index.module.scss";

const Mainlayout = ({ children }) => {
  return (
    <div className={styles.MainLayout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Mainlayout;

