
import UniversitySidebar from '@/components/UniversitySidebar';
import { Outlet } from 'react-router-dom';

const UniversityLayout = () => {
    return (
        <div className="flex h-screen">
          <UniversitySidebar />
          <div className="flex flex-1 flex-col">
            {/* <Header /> */}
            <main className="flex-1 overflow-auto">
              <Outlet />
            </main>
          </div>
        </div>
      );
}

export default UniversityLayout
