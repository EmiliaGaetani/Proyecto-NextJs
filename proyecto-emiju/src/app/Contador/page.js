"use client"

import Button from "@/components/Button";
import Input from "@/components/Input";
import Title from "@/components/Title";
import { useEffect, useState } from "react";

export default function Contador(){

    const [cuenta, setCuenta] = useState(0);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (cuenta == 20){
            setCuenta(0)
        }
    }, [cuenta])

    function incrementar(){
        setCuenta(cuenta + 1)
    }

    function decrementar(){
        setCuenta(cuenta - 1)
    }

    function funcionalidad(event){
        setChecked(event.target.checked)
    }

    function subeobaja(){
        if (checked == true){
            incrementar()
        } else{
            decrementar()
        }
    }

    return(
        <>
        <Title title= "Página del contador"></Title>
        <h3>Si desea que el contador incremente, aprete la casilla para que esté seleccionada</h3>
        <Input type={"checkBox"} onChange={funcionalidad}></Input>
        <Button text={"subir/bajar"} onClick={subeobaja}></Button>
        </>
    )
}