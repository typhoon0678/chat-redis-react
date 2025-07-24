import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Loading, Main } from "./page";

const root = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={Loading}><Main /></Suspense>
    }
]);

export default root;