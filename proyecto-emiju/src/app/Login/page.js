"use client"

import Button from "@/components/Button";
import Form from "@/components/Form";
import Title from "@/components/Title";

export default function Login() {

      function imprimir(){
        console.log("fui presionado 😰")
    }

  return (
    <>
        <h1>Login</h1>
        <Button text={"presioname"} onClick={imprimir}></Button>
        <br></br>
        <Title title="Complete sus datos"></Title>
        <Form type={"text"} type2={"password"} onClick={imprimir}></Form>
    </>
  )
}  