import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import Image from "next/image";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="h-20 w-full border-b-2 border-orange-400 flex items-center justify-between p-2">
      <ul className="flex justify-between items-center">
        <li className="p-2 cursor-pointer">
          <Link href="/">
            <Image
              src="/id.png"
              alt="id-dev logo"
              width={75}
              height={75}
              className="cursor-pointer hover:scale-105 duration-500 ease-in-out"
            />
          </Link>
        </li>
        <li className="p-2 cursor-pointer hover:opacity-70 duration-500 ease-in-out">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2 cursor-pointer hover:opacity-70 duration-500 ease-in-out">
          <Link href="/about">About</Link>
        </li>
        {!user ? null : (
          <li className="p-2 cursor-pointer hover:opacity-70 duration-500 ease-in-out">
            <Link href="/profile">Profile</Link>
          </li>
        )}
      </ul>

      {loading ? null : !user ? (
        <ul className="flex">
          <li
            onClick={handleSignIn}
            className="p-2 cursor-pointer hover:opacity-70 duration-500 ease-in-out"
          >
            Login
          </li>
          <li
            onClick={handleSignIn}
            className="p-2 cursor-pointer hover:opacity-70 duration-500 ease-in-out"
          >
            Sign up
          </li>
        </ul>
      ) : (
        <div>
          <p>Welcome, {user.displayName}</p>
          <p
            className="cursor-pointer hover:opacity-70 duration-500 ease-in-out"
            onClick={handleSignOut}
          >
            Sign out
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
