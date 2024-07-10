import { Outlet } from 'react-router-dom';

import './layout.css';

import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';

export default function Layout() {
    return (
        <div className='layout-container'>
            <Navbar />

            <main className='content'>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}