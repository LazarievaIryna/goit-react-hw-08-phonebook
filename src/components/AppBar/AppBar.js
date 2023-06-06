import { AuthNav } from "components/AuthNav/AuthNav"
import { UserMenu } from "components/UserMenu/UserMenu"

export const AppBar=()=>{
    return (
        <header>
            <UserMenu/>
            <AuthNav/>
        </header>
    )
}