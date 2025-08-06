"use client"

export default function Button() {
    function imprimir(){
        console.log("fui presionado 😰")
    }
  return (

    <>
        <button onClick={imprimir}>Presioname</button>
    </>

  )
}