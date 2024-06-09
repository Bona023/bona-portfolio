import { Link } from "gatsby";
import * as React from "react";

interface ILayoutProps {
    children: any;
}

export default function Layout({ children }: ILayoutProps) {
    return (
        <div className="flex flex-col lg:flex-row w-full">
            <nav className="w-full h-14 lg:h-[100vh] lg:w-28 lg:pl-2 flex lg:flex-col justify-center items-center gap-8 text-lg font-semibold fixed top-0 bg-white/70 z-10">
                <Link
                    to="/"
                    className="navLink"
                    activeStyle={{ color: "#2CD3E1" }}
                >
                    About Me
                </Link>
                <Link
                    to="/skill"
                    className="navLink"
                    activeStyle={{ color: "#2CD3E1" }}
                >
                    Skill
                </Link>
                <Link
                    to="/project"
                    className="navLink"
                    activeStyle={{ color: "#2CD3E1" }}
                >
                    Project
                </Link>
            </nav>
            <div className="w-full lg:pt-0 lg:pl-28 lg:h-[100vh]">{children}</div>
        </div>
    );
}
