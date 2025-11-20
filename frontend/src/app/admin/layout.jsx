"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { isAdminAuthenticated, adminVerify } from "../../utils/api";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      // Allow access to login page without authentication
      if (pathname === "/admin/login") {
        setIsChecking(false);
        return;
      }

      // Check if authenticated
      if (!isAdminAuthenticated()) {
        router.push("/admin/login");
        return;
      }

      // Verify token is still valid
      const verifyResult = await adminVerify();
      if (!verifyResult.success) {
        router.push("/admin/login");
        return;
      }

      setIsChecking(false);
    };

    checkAuth();
  }, [pathname, router]);

  if (isChecking && pathname !== "/admin/login") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return <div className="bg-gray-50 text-gray-900 font-sans antialiased">{children}</div>;
}

