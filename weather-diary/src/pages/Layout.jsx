import { Outlet } from "react-router";
import Header from "@/components/Header";

export default function Layout() {
  return (
    <div>
      <Header />
      <main className="flex items-center justify-center w-full h-screen bg-gray-100">
        <Outlet />
      </main>
      <footer className="text-center py-4">
        <p>&copy; {new Date().getFullYear()} Weather Diary</p>
      </footer>
    </div>
  );
}