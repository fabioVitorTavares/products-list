"use client";

import { getData } from "@/api";
import TableProducst from "@/components/TableProducts";
import React, { useEffect } from "react";

const dataColunm = ["id", "Nome", "Valor"];
const dataRow = [
  ["1", "Maçã", "1,50"],
  ["2", "Banana", "2,50"],
];

const data = {
  dataColunm,
  dataRow,
};

export default function Home() {
  useEffect(() => {
    // const dados = getData();
  }, []);

  return (
    <main className="main">
      <TableProducst data={data} />
    </main>
  );
}
