import { Outlet } from "react-router-dom";

export default function BaseLayout() {
    return (
        <div>
            <header></header>
            <Outlet></Outlet>
            <footer></footer>
        </div>
    )
}