import { ReactNode, Suspense, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface RouteContentProps {
    children: ReactNode
    isPrivate: boolean
}

const RouteContent = ({ children, isPrivate }: RouteContentProps) => {
    const isAuthorised = false
    const navigate = useNavigate()
    useEffect(() => {
        if (!isAuthorised && isPrivate) {
            navigate('/auth')
        }
    }, [navigate, isAuthorised, isPrivate])
    return <Suspense fallback={<> чо </>}>{children}</Suspense>
}
export default RouteContent
