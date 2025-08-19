"use client"
import clsx from "clsx"
import styles from "@/components/Button.module.css"

export default function Button(props) {
  return (
    <>
      <button className={
      clsx(
        {
          [styles.button] : true,
          [styles.incremental] : props.color = "lila",
          [styles.decremental] : props.color = "celeste",
        }
      )
      
    }onClick={props.onClick}>{props.text}</button>
    </>

  )
}