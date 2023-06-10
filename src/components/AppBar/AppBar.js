import { Box } from '@chakra-ui/react'


import { AuthNav } from "components/AuthNav/AuthNav"
import { Navigation } from "components/Navigation/Navigation"
import { UserMenu } from "components/UserMenu/UserMenu"
import { useAuth } from "hooks"

export const AppBar=()=>{
    const {isLoggedIn}=useAuth()
    return (
        <Box as='header' display="flex" alignItems="center" justifyContent="space-between" marginBottom='70px' >
            <Navigation/>
            {isLoggedIn? <UserMenu/> : <AuthNav/>}
            
            
        </Box>
    )
}