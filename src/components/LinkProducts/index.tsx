"use client"
import Link from "next/link";
import ListAltIcon from '@mui/icons-material/ListAlt';


export default function LinkProducts() {

  return(
    <Link href={"/products"}>
      <ListAltIcon style={{fontSize: "200px", color: "#000"}} />
    </Link>
  );
 }
