import {
    Routes, Route
} from "react-router-dom";
import HomePage from "../../../pages/home/home";
import SharedLayout from "../../layout/layout";

export default function Router() {

    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<HomePage />} />
            </Route>
        </Routes>

    )
}
