import { lazy } from "react";

const ReactList = lazy(() => import('./ReactList'))

function LazyLoading(){
    return(
        <>
        <ReactList />
        </>
    )
}

export default LazyLoading;