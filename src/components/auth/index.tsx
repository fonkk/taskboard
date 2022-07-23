import React from 'react'
import * as ST from './styled'
import { Button, TextField } from '@material-ui/core'

const Auth = () => {
    return (
        <ST.Wrapper>
            <ST.AuthBlock>
                <h1>Log in to Task board</h1>
                <TextField
                    id="outlined-basic"
                    label="Login"
                    variant="outlined"
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    variant="outlined"
                    autoComplete="current-password"
                />
                <Button variant="outlined">Log in</Button>
            </ST.AuthBlock>
        </ST.Wrapper>
    )
}

export default Auth
