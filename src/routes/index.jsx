import { createBrowserRouter } from 'react-router-dom';

import Portfolio from '../screens/portfolio';
import Projects from '../screens/projects';
import About from '../screens/about';
import ProjectFastSum from '../screens/projects/ProjectFastSum';
import ProjectSmsApiGateway from '../screens/projects/ProjectSmsApiGateway';
import ErrorPage from '../screens/error';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Portfolio />,
        errorElement: <ErrorPage />
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "/projects/fast-sum",
        element: <ProjectFastSum />,
    },
    {
        path: "/projects/sms-api-gateway",
        element: <ProjectSmsApiGateway />,
    },
]);
