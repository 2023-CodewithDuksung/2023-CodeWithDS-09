import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Auth/Login'
import SignUp from '../pages/Auth/SignUp'
import Main from '../pages/Main/Main'
import Chatbot from '../pages/Chatbot/Chatbot'
import Layout from '../components/Layout'
import TopNav from '../components/Layout/nav/TopNav'
import MachineIntroduction from '../pages/Raon/MachineIntroduction'
import Information from '../pages/Raon/Information'
import UserNumber from '../pages/Raon/UserNumber'
import Assignment from '../pages/Community/Assignment'
import Together from '../pages/Community/Together'
import Communication from '../pages/Community/Communication'
import AssignmentWrite from '../pages/Community/AssignmentWrite'
import CommunicationWrite from '../pages/Community/CommunicationWrite'
import Beginning from '../pages/Routine/Beginning'
import Intermediate from '../pages/Routine/Intermediate'
import High from '../pages/Routine/High'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'signup',
				element: <SignUp />,
			},
			{
				path: '',
				element: <Main />,
			},
			{
				path: 'raon',
				element: <TopNav type={'raon'} />,
				children: [
					{
						path: 'current',
						element: <UserNumber />,
					},
					{
						path: 'machine',
						element: <MachineIntroduction />,
					},
					{
						path: 'info',
						element: <Information />,
					},
				],
			},
			{
				path: 'chatbot',
				element: <Chatbot />,
			},
			{
				path: 'community',
				element: <TopNav type={'community'} />,
				children: [
					{
						path: 'assign',
						element: <Assignment />,
					},
					{
						path: 'assign/write',
						element: <AssignmentWrite />,
					},
					{
						path: 'together',
						element: <Together />,
					},
					{
						path: 'communication',
						element: <Communication />,
					},
					{
						path: 'communication/write',
						element: <CommunicationWrite />,
					},
				],
			},
			{
				path: 'routine',
				element: <TopNav type={'routine'} />,
				children: [
					{
						path: 'beginning',
						element: <Beginning />,
					},
					{
						path: 'intermediate',
						element: <Intermediate />,
					},
					{
						path: 'high',
						element: <High />,
					},
				],
			},
		],
	},
])

export default router
