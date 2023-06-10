"use client";
import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";



type DataType = {
  data: {
    dataColunm: string[],
    dataRow: string[][],
  }
}


export default function TableProducst({ data: { dataColunm, dataRow } }: DataType) {

  const columns = dataColunm.map(data => {
    return {
      field: data,
      headerName: data,
      with: 150
    }
  })

  const rows = dataRow.map(data => {
    return {
      id: data[0],
      Nome: data[1],
      Valor: data[2]
    }
  })


  return <DataGrid columns={columns} rows={rows}/>;
}
