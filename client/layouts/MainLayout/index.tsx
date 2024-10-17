import { ReactNode } from 'react';
import Navbar from './Navbar';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <main className="flex-1  overflow-y-auto">
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
