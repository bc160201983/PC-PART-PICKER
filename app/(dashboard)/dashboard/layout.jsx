import Navbar from "@/app/(dashboard)/ui/dashboard/navbar/navbar";
import Sidebar from "@/app/(dashboard)/ui/dashboard/sidebar/sidebar";
import styles from "@/app/(dashboard)/ui/dashboard/dashboard.module.css";
import Footer from "@/app/(dashboard)/ui/dashboard/footer/footer";
import "@/app/(dashboard)/ui/globals.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
