import React from 'react'
import { Routing } from './routing'
import BackgroundLayout from './layouts/backgroundLayout'

function App() {
    return (
        <BackgroundLayout theme={'dark'}>
            <Routing />
        </BackgroundLayout>
    )
}

export default App
