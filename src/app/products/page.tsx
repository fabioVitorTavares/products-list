"use client";

import { getData } from "@/api";
import TableProducst from "@/components/TableProducts";
import React, { useEffect, useState } from "react";

const dataColunm = ["id", "Nome", "Valor"];

type DataType = {
  id: string,
  name: string,
  value: number,
}

export default function Home() {

  const [dataRow, setDataRow] = useState<string[][]>([]);
    
  async function fethData() {
    const dados = await getData() as DataType[];
    setDataRow(dados.map(dado => {
      return [dado?.id, dado?.name, dado?.value.toString()]
    }))
  }

  useEffect(() => {
    fethData();
  }, []);


  const data = {
    dataColunm,
    dataRow,
  };
  

  return (
    <main className="main">
      <TableProducst data={data} />
    </main>
  );
}
