import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import ThemeProvider from "./ThemeProvider";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import GlobalContext from "./globalContext";
import Blog from "./Blogs";
import PrivateRoute from "./PrivateRoute";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";



function App() {
    const [today, setToday] = useState("");

    // useEffect(() => {
    //     setInterval(() => {
    //         setToday(`${dayjs().format('MM/DD/YYYY hh:mm:ss A dddd')}`)
    //     }, 1000)
    // }, [today])

    return (
        <>
            {/* <BrowserRouter>
            <GlobalContext>
                <ThemeProvider>
                <Header />
                <Blog />
                </ThemeProvider>
            </GlobalContext>
        </BrowserRouter> */}
            <BrowserRouter>
                <ThemeProvider>
                    <Header />
                    <Routes>
                        <Route path="/" element={<PrivateRoute element={Home} />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        {today}
                    </div>
                </ThemeProvider>
            </BrowserRouter>
        </>
    )
}

export default App;