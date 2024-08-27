import React, { useEffect, useState } from 'react';
import Home from './root/Home';
import Login from './root/Auth/Login';
import { useLocation, Route, Routes } from 'react-router-dom';
import RenderRoute from './Routes/RenderRoute';
import SignUp from './root/Auth/SignUp';
import PrivateRouter from './Routes/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './root/Loading';
import { useDefaultAuthMutation } from './redux/api/api';
import toast from 'react-hot-toast';
import { startLoading, stopLoading } from './redux/appSlice/loadingSlice';


function App() {

    const dispatch = useDispatch();
    const [login, setLogin] = useState()
    const location = useLocation();

    useEffect(() => {
        setLogin(false)
        dispatch(startLoading());
        defaultAuth()
    }, [])

    const [defaultAuth, { data, error, isSuccess }] = useDefaultAuthMutation();
    const isLoading = useSelector((state) => state.loading.isLoading);

    useEffect(() => {
        console.log(data?.message, error, isSuccess);

        if (data?.message) {
            toast.error(String(data?.message))
            return;
        }

        if (data?.email) return setLogin(true)

        dispatch(stopLoading());

    }, [data, error, isSuccess])

    useEffect(() => {
        dispatch(startLoading());
        setTimeout(() => {
            dispatch(stopLoading());
        }, 500); // Simulate loading time
    }, [location, dispatch]);

    return (
        <React.Fragment>
            <Routes>

                <Route path="/:page" element={<PrivateRouter login={login} element={<RenderRoute />} />} />
                <Route path='/' element={isLoading ? <Loading /> : login ? <Home /> : <Login />} />
                <Route path='/SignUp' element={login ? <Home /> : <SignUp />} />

                {/* <PrivateRouter path='/:page' element={<RenderRoute />} /> */}
            </Routes>
        </React.Fragment>
    );
}

export default App;
