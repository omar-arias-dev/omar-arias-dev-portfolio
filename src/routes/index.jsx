import { createBrowserRouter } from 'react-router-dom';

import Portfolio from '../screens/portfolio';
import Projects from '../screens/projects';
import About from '../screens/about';
import ProjectFastSum from '../screens/projects/ProjectFastSum';
import ProjectSmsApiGateway from '../screens/projects/ProjectSmsApiGateway';
import ErrorPage from '../screens/error';

export const router = createBrowserRouter([
    {
        path: "/omar-arias-dev-portfolio/",
        element: <Portfolio />,
        errorElement: <ErrorPage />
    },
    {
        path: "/omar-arias-dev-portfolio/about",
        element: <About />,
    },
    {
        path: "/omar-arias-dev-portfolio/projects",
        element: <Projects />,
    },
    {
        path: "/omar-arias-dev-portfolio/projects/fast-sum",
        element: <ProjectFastSum />,
    },
    {
        path: "/omar-arias-dev-portfolio/projects/sms-api-gateway",
        element: <ProjectSmsApiGateway />,
    },
]);
