import { useState } from "react";

export function useLoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);
        console.log("Remember me:", remember);

        setUsername("");
        setPassword("");
        setRemember(false);
    };

    return {
        username,
        setUsername,
        password,
        setPassword,
        remember,
        setRemember,
        handleSubmit
    };
}
