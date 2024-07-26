import { Outlet } from 'react-router-dom';

import './layout.css';

import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';

export default function Layout({user}) {
    return (
        <div className='layout-container'>
            <Navbar  user={user} />

            <main className='content'>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}