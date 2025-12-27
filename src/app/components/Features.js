"use client";
import { motion } from "framer-motion";
import  "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link";

export default function Features(props){
  return(
    <>
    <div className="col">
    <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
    >
    <div className="col">
    <div className="card" >
  {/* <img src="..." className="card-img-top" alt="..."></img> */}
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.desc}</p>
    <Link href={props.href || "#"} className="btn btn-primary">{props.button}</Link>
  </div>
</div>
    </div>
    </motion.div>
    </div>
    </>

  )  
}