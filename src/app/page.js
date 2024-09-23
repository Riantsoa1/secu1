"use client"

import Image from "next/image";
import styles from "./page.module.css";
import FinancialGraph from '../components/graph';
import DateFilter from '../components/entree';
import { useState } from 'react';

export default function Home() {

  const [filterdDates, setFilterdDates] = useState({})
  const handleFilter = (startDate, endDate) => {
  console.log('Dates selectionnees : ', startDate, endDate);
  }

  return (
    <div>
      <div>
        <h1>Gestion de Patrimoine</h1>
      </div>
    <h1>Financial Graph</h1>
    <FinancialGraph />
  </div>
  )
}
