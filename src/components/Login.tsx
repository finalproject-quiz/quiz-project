import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./Login.css"


export default function Login(props) {

    const [username, setUsername] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        await props.login(username);
        setUsername("");
    }
    return (
        <Box>
            <form className='usernameButton' noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    name="name"
                    variant="outlined"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                >Start</Button>
            </form>
        </Box>
    );
}
