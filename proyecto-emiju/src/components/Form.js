"use client"

import Input from "./Input"

export default function Form(props) {
    return (
        <>
            <h3>Username:</h3>
            <Input type={type="radio"}></Input> //revisar
            <h3>Mail:</h3>
            <Input type={type="radio"}></Input>
            <h3>Password:</h3>
            <Input type={type="radio"}></Input>
        </>
    )
}