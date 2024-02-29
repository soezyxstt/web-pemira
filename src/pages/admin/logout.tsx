import { signOut } from "next-auth/react";
import { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    signOut({ callbackUrl: "/admin/login" });
  }, []);

  return (
    <div className="flex items-center justify-center text-xl text-navy">
      Logging Out...
    </div>
  );
};

export default Logout;
