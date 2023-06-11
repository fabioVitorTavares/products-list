"use client";

import { ProductsType, getProducts } from "@/api";
import TableProducst from "@/components/TableProducts";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const dataColunm = ["id", "Nome", "Valor"];

type PropsProductsType = {
  products: ProductsType[];
};
export default function Products({ products }: PropsProductsType) {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["hydrate-users"],
    queryFn: async () => getProducts(),
  });

  const [dataRow, setDataRow] = useState<string[][] | undefined>([]);

  useEffect(() => {
    if (products) {
      // console.log(
      //   products.map((dado: ProductsType) => {
      //     return [dado?.id, dado?.name, dado?.value.toString()];
      //   })
      // );
      setDataRow(
        products.map((dado: ProductsType) => {
          return [dado?.id, dado?.name, dado?.value.toString()];
        })
      );
    }
  }, [products]);

  useEffect(() => {
    // console.log("Log line 35: ", dataRow);
  }, [dataRow]);

  return (
    <main className="main">
      {isLoading || isFetching || error ? (
        <h1> carregando </h1>
      ) : (
        <TableProducst
          data={{
            dataColunm,
            dataRow: dataRow,
          }}
        />
      )}
    </main>
  );
}
