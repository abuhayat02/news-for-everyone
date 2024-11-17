import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import News from "../Components/News";
import SignIn from "../Components/SignIn";
import Authentications from './../Components/Authentications/Authentications';
import Register from "../Components/Register";
import NewsInfo from "../Components/NewsInfo";
import Privet from './../Components/Authentications/Privet';



let routs = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children: [
                    {
                        path: '',
                        element: <Navigate to={'/cetagory/01'} ></Navigate>
                    },
                    {
                        path: '/cetagory/:id',
                        element: <News></News>,
                        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
                    }
                ]
            }
        ]
    },
    {
        path : '/news-info/:id',
        element :<Privet> <NewsInfo></NewsInfo></Privet>,
        loader : ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: '/authentications',
        element: <Authentications></Authentications>,
        children: [
            {
                path: '/authentications/sign-in',
                element: <SignIn></SignIn>,
            },
            {
                path: '/authentications/register',
                element: <Register></Register>
            }
        ]
    }
])

export default routs;




