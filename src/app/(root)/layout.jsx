import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="flex w-full gap-2">
        <Sidebar />
      <div className="w-full space-y-2.5">
        <Navbar />
        <div className="bg-white min-h-screen p-4 dark:bg-stone-900">{children}</div>
      </div>
    </div>
  );
}
