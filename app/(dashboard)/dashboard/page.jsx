import { cards } from "@/app/(dashboard)/lib/data";
import Card from "@/app/(dashboard)/ui/dashboard/card/card";
import Chart from "@/app/(dashboard)/ui/dashboard/chart/chart";
import styles from "@/app/(dashboard)/ui/dashboard/dashboard.module.css";
import Rightbar from "@/app/(dashboard)/ui/dashboard/rightbar/rightbar";
import Transactions from "@/app/(dashboard)/ui/dashboard/transactions/transactions";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
