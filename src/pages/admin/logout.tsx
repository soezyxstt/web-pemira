import { signOut } from "next-auth/react";
import { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    void signOut({ callbackUrl: "/admin/login" });
  }, []);

  return (
    <div className="flex items-center justify-center text-xl text-navy flex-1 bg-cream">
      Logging Out...
    </div>
  );
};

export default Logout;
