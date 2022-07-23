import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import RouteContent from './routeContent'

const Auth = lazy(() =>
    import('../pages/authPage').then((module) => ({ default: module.AuthPage }))
)

export const Routing = () => {
    return (
        <Routes>
            <Route
                path={'/'}
                element={
                    <RouteContent isPrivate={true}>
                        <>Главная</>
                    </RouteContent>
                }
            />
            <Route
                path={'/auth'}
                element={
                    <RouteContent isPrivate={false}>
                        <Auth />
                    </RouteContent>
                }
            />
        </Routes>
    )
}
