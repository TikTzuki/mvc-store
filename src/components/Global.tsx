'use client'

import React from "react"
import {signIn, signOut} from "next-auth/react"

export const SignOutButton = () => {
    return (
        <Button
            variant="outlined"
            size="small"
            color="secondary"
            onClick={() => {
                signOut()
            }}>
            log out
        </Button>
    )
}

export const NotLoggedIn = () => {
    return (
        <main className="min-h-[70vh] flex flex-col items-center">
            You must login to view this content
            {/*<form*/}
            {/*    action={setGuestMode}*/}
            {/*    className="mt-1">*/}
            {/*    <CoolButton>*/}

            {/*        <input*/}
            {/*            className="cursor-pointer px-2 py-1"*/}
            {/*            value={"Guest Mode"}*/}
            {/*            type="submit"/>*/}
            {/*    </CoolButton>*/}
            {/*</form>*/}
        </main>
    )
}

export const LoginButtons = ({setLoading}: { setLoading: (value: boolean) => void }) => {
    const providers = [
        // "github",
        "google"
    ];

    const LoginButton = ({provider}: { provider: string }) => (
        <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{mt: 3, mb: 2}}
            onClick={() => {
                setLoading(true);
                signIn(provider);
            }}
        >
            {provider}
        </Button>
    )

    return (
        <>
            {providers.map(provider => (
                <LoginButton key={provider} provider={provider}/>
            ))}
        </>
    )
}