import Image from "next/image";
import styles from "./page.module.css";
import FinancialGraph from '../components/graph';

export default function Home() {
  return (
    <div>
    <h1>Financial Graph</h1>
    <FinancialGraph />
  </div>
  )
}
