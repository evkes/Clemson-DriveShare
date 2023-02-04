import React, {useState} from "react";
inport Form from "react-bootstrap/Form";
import Button from "react-bootstap/Button";
inport "./Login.css";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm(){
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event)
}