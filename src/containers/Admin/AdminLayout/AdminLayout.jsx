import AdminSidebar from '@/components/AdminSidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div className="flex h-screen">
          <AdminSidebar />
          <div className="flex flex-1 flex-col">
            {/* <Header /> */}
            <main className="flex-1 overflow-auto">
              <Outlet />
            </main>
          </div>
        </div>
      );
}

export default AdminLayout
